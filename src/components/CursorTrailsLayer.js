"use client";

import { useEffect, useRef } from "react";

const MAX_POINTS = 140;
const TRAILS = [
  { hue: 10, alpha: 0.5, follow: 0.2 },
  { hue: 140, alpha: 0.35, follow: 0.16 },
  { hue: 220, alpha: 0.25, follow: 0.12 },
  { hue: 300, alpha: 0.2, follow: 0.09 },
];

export default function CursorTrailsLayer() {
  const canvasRef = useRef(null);
  const trailsRef = useRef(
    TRAILS.map((trail) => ({ ...trail, points: [], x: null, y: null }))
  );
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return undefined;
    }

    const setCanvasSize = () => {
      const { innerWidth, innerHeight, devicePixelRatio } = window;
      canvas.width = innerWidth * devicePixelRatio;
      canvas.height = innerHeight * devicePixelRatio;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    setCanvasSize();
    const handleResize = () => setCanvasSize();
    const handlePointerMove = (event) => {
      pointerRef.current.x = event.clientX;
      pointerRef.current.y = event.clientY;
    };

    const handlePointerLeave = () => {
      pointerRef.current.x = window.innerWidth / 2;
      pointerRef.current.y = window.innerHeight / 2;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    pointerRef.current.x = window.innerWidth / 2;
    pointerRef.current.y = window.innerHeight / 2;

    let animationFrame;
    const draw = () => {
      const { width, height } = canvas;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.clearRect(0, 0, width, height);
      context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

      trailsRef.current.forEach((trail) => {
        const targetX = pointerRef.current.x;
        const targetY = pointerRef.current.y;

        if (trail.x === null || trail.y === null) {
          trail.x = targetX;
          trail.y = targetY;
        }

        trail.x += (targetX - trail.x) * trail.follow;
        trail.y += (targetY - trail.y) * trail.follow;
        trail.points.push({ x: trail.x, y: trail.y });

        if (trail.points.length > MAX_POINTS) {
          trail.points.splice(0, trail.points.length - MAX_POINTS);
        }

        if (trail.points.length < 2) {
          return;
        }

        context.beginPath();
        context.lineWidth = 2;
        context.strokeStyle = `hsla(${trail.hue}, 90%, 60%, ${trail.alpha})`;
        context.moveTo(trail.points[0].x, trail.points[0].y);
        for (let index = 1; index < trail.points.length; index += 1) {
          const point = trail.points[index];
          context.lineTo(point.x, point.y);
        }
        context.stroke();
      });

      animationFrame = window.requestAnimationFrame(draw);
    };

    animationFrame = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-trails-layer" aria-hidden="true" />;
}
