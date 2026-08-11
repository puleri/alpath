'use client';

import { useEffect, useRef } from 'react';

const MAX_TRAILS = 8;
const LIFESPAN_MS = 7000;
const FADE_DURATION_MS = 1400;
const SPAWN_MIN_MS = 1600;
const SPAWN_MAX_MS = 3200;
const SPAWN_BATCH = 2;
const POINTER_SHIELD_RADIUS = 52;
const MAX_POINTS = 120;
const TRAIL_STEP = 1.65;
const BRAND_ACCENTS = ['#0a77c6', '#0cb800', '#ff6f00'];
const CARDINAL_DIRECTIONS = [
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: -1, y: 0 },
  { x: 0, y: -1 },
];

const randomBetween = (min, max) => min + Math.random() * (max - min);

const createDirection = () => {
  const index = Math.floor(Math.random() * CARDINAL_DIRECTIONS.length);
  return { ...CARDINAL_DIRECTIONS[index] };
};

const turnDirection = ({ x, y }) =>
  Math.random() < 0.5 ? { x: -y, y: x } : { x: y, y: -x };

export default function CursorTrailsLayer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (reducedMotion || !finePointer) {
      return undefined;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return undefined;
    }

    const trails = [];
    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      active: false,
    };
    let nextSpawnAt =
      performance.now() + randomBetween(SPAWN_MIN_MS, SPAWN_MAX_MS);
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
      const direction = createDirection();
      trails.push({
        id: `trail-${now}-${Math.random().toString(16).slice(2)}`,
        startTime: now,
        points: [origin],
        nodes: [],
        accent: BRAND_ACCENTS[Math.floor(Math.random() * BRAND_ACCENTS.length)],
        direction,
        nextTurnAt: now + randomBetween(500, 1100),
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
        const corner = trail.points[trail.points.length - 1];
        trail.nodes.push({ ...corner });
        if (trail.nodes.length > 6) {
          trail.nodes.shift();
        }
        trail.direction = turnDirection(trail.direction);
        trail.nextTurnAt = now + randomBetween(650, 1400);
      }

      const lastPoint = trail.points[trail.points.length - 1];
      const nextPoint = {
        x: lastPoint.x + trail.direction.x * TRAIL_STEP,
        y: lastPoint.y + trail.direction.y * TRAIL_STEP,
      };
      trail.points.push(nextPoint);

      if (trail.points.length > MAX_POINTS) {
        trail.points.shift();
      }
    };

    const drawTrail = (trail, now) => {
      const age = now - trail.startTime;
      const fadeIn = Math.min(age / 350, 1);
      const fadeOut = Math.min((trail.lifespanMs - age) / FADE_DURATION_MS, 1);
      const opacity = Math.max(0, Math.min(fadeIn, fadeOut));

      ctx.save();
      ctx.strokeStyle = '#111111';
      ctx.globalAlpha = opacity * 0.28;
      ctx.lineWidth = 1.25;
      ctx.lineJoin = 'miter';
      ctx.lineCap = 'butt';
      ctx.setLineDash([10, 7]);
      ctx.lineDashOffset = -(age * 0.012);

      ctx.beginPath();
      trail.points.forEach((point, index) => {
        if (index === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      });
      ctx.stroke();

      ctx.setLineDash([]);
      ctx.fillStyle = '#111111';
      ctx.globalAlpha = opacity * 0.42;
      trail.nodes.forEach((node) => {
        ctx.fillRect(node.x - 1.5, node.y - 1.5, 3, 3);
      });

      const tail = trail.points[0];
      ctx.fillRect(tail.x - 1.5, tail.y - 1.5, 3, 3);

      const head = trail.points[trail.points.length - 1];
      ctx.fillStyle = trail.accent;
      ctx.globalAlpha = opacity * 0.9;
      ctx.fillRect(head.x - 3, head.y - 3, 6, 6);
      ctx.strokeStyle = '#111111';
      ctx.globalAlpha = opacity * 0.7;
      ctx.lineWidth = 1;
      ctx.strokeRect(head.x - 3.5, head.y - 3.5, 7, 7);
      ctx.restore();
    };

    const drawPointerGuide = () => {
      if (!pointer.active) {
        return;
      }

      ctx.save();
      ctx.strokeStyle = '#111111';
      ctx.globalAlpha = 0.16;
      ctx.lineWidth = 1;
      ctx.lineCap = 'butt';

      const outer = 20;
      const tick = 6;
      ctx.beginPath();
      ctx.moveTo(pointer.x - outer, pointer.y - outer + tick);
      ctx.lineTo(pointer.x - outer, pointer.y - outer);
      ctx.lineTo(pointer.x - outer + tick, pointer.y - outer);
      ctx.moveTo(pointer.x + outer - tick, pointer.y - outer);
      ctx.lineTo(pointer.x + outer, pointer.y - outer);
      ctx.lineTo(pointer.x + outer, pointer.y - outer + tick);
      ctx.moveTo(pointer.x + outer, pointer.y + outer - tick);
      ctx.lineTo(pointer.x + outer, pointer.y + outer);
      ctx.lineTo(pointer.x + outer - tick, pointer.y + outer);
      ctx.moveTo(pointer.x - outer + tick, pointer.y + outer);
      ctx.lineTo(pointer.x - outer, pointer.y + outer);
      ctx.lineTo(pointer.x - outer, pointer.y + outer - tick);
      ctx.stroke();
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

      drawPointerGuide();

      animationFrame = window.requestAnimationFrame(tick);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('pointermove', handlePointerMove);

    animationFrame = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointermove', handlePointerMove);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      className="cursor-trails-layer"
      ref={canvasRef}
      aria-hidden="true"
    />
  );
}
