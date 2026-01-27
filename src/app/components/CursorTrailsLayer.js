"use client";

import { useEffect, useRef } from "react";

const MAX_TRAILS = 12;
const LIFESPAN_MS = 8000;
const TURN_WINDOW_MS = 100;
const HUE_SPEED = 98;
const SPAWN_MIN_MS = 800;
const SPAWN_MAX_MS = 1000;
const SPAWN_BATCH = 6;
const POINTER_SHIELD_RADIUS = 25;

const randomBetween = (min, max) => min + Math.random() * (max - min);

const createDirection = () => {
  const angle = Math.random() * Math.PI * 2;
  const magnitude = randomBetween(0.8, 1.6);
  return {
    x: Math.cos(angle) * magnitude,
    y: Math.sin(angle) * magnitude,
  };
};

export default function CursorTrailsLayer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return undefined;
    }

    const trails = [];
    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      active: false,
    };
    let nextSpawnAt = performance.now() + randomBetween(SPAWN_MIN_MS, SPAWN_MAX_MS);
    let animationFrame;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handlePointerMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const spawnTrail = (now, origin) => {
      const hueOffset = Math.random() * 360;
      const direction = createDirection();
      trails.push({
        id: `trail-${now}-${Math.random().toString(16).slice(2)}`,
        startTime: now,
        points: [origin],
        hueOffset,
        direction,
        nextTurnAt: now + randomBetween(200, 800),
        lifespanMs: LIFESPAN_MS,
      });
    };

    const spawnTrailBatch = (now, count) => {
      if (pointer.active) {
        const baseAngle = Math.random() * Math.PI * 2;
        const angleStep = (Math.PI * 2) / count;
        for (let i = 0; i < count; i += 1) {
          const angle = baseAngle + angleStep * i;
          const origin = {
            x: pointer.x + Math.cos(angle) * POINTER_SHIELD_RADIUS,
            y: pointer.y + Math.sin(angle) * POINTER_SHIELD_RADIUS,
          };
          spawnTrail(now, origin);
        }
        return;
      }

      for (let i = 0; i < count; i += 1) {
        const origin = {
          x: window.innerWidth / 2 + randomBetween(-120, 120),
          y: window.innerHeight / 2 + randomBetween(-120, 120),
        };
        spawnTrail(now, origin);
      }
    };

    const updateTrail = (trail, now) => {
      if (now >= trail.nextTurnAt) {
        const turnAngle = randomBetween(-1.9, 1.9);
        const cos = Math.cos(turnAngle);
        const sin = Math.sin(turnAngle);
        const { x, y } = trail.direction;
        trail.direction = {
          x: x * cos - y * sin,
          y: x * sin + y * cos,
        };
        trail.nextTurnAt = now + randomBetween(400, 1400);
      }

      const lastPoint = trail.points[trail.points.length - 1];
      const nextPoint = {
        x: lastPoint.x + trail.direction.x * 2.4,
        y: lastPoint.y + trail.direction.y * 2.4,
      };
      trail.points.push(nextPoint);

      if (trail.points.length > 140) {
        trail.points.shift();
      }
    };

    const drawTrail = (trail, now) => {
      const age = now - trail.startTime;
      const fadeStart = trail.lifespanMs - TURN_WINDOW_MS;
      const opacity =
        age >= fadeStart
          ? Math.max(0, .7 - (age - fadeStart) / TURN_WINDOW_MS)
          : 1;

      const hue = ((now / 1000) * HUE_SPEED + trail.hueOffset) % 360;
      ctx.save();
      ctx.strokeStyle = `hsl(${hue}, 80%, 60%)`;
      ctx.globalAlpha = opacity;
      ctx.lineWidth = 2;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.setLineDash([1, 6]);

      ctx.beginPath();
      trail.points.forEach((point, index) => {
        if (index === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      });
      ctx.stroke();
      ctx.restore();
    };

    const drawPointerShield = () => {
      const shieldX = pointer.active ? pointer.x : window.innerWidth / 2;
      const shieldY = pointer.active ? pointer.y : window.innerHeight / 2;

      ctx.save();
      ctx.fillStyle = "rgba(246, 246, 244, 0.92)";
      ctx.beginPath();
      ctx.arc(shieldX, shieldY, POINTER_SHIELD_RADIUS, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const tick = (now) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (now >= nextSpawnAt && trails.length < MAX_TRAILS) {
        const availableSlots = MAX_TRAILS - trails.length;
        const spawnCount = Math.min(SPAWN_BATCH, availableSlots);
        spawnTrailBatch(now, spawnCount);
        nextSpawnAt = now + randomBetween(SPAWN_MIN_MS, SPAWN_MAX_MS);
      }

      for (let i = trails.length - 1; i >= 0; i -= 1) {
        const trail = trails[i];
        const age = now - trail.startTime;

        if (age >= trail.lifespanMs) {
          trails.splice(i, 1);
          continue;
        }

        updateTrail(trail, now);
        drawTrail(trail, now);
      }

      drawPointerShield();

      animationFrame = window.requestAnimationFrame(tick);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove);

    animationFrame = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas className="cursor-trails-layer" ref={canvasRef} aria-hidden="true" />;
}
