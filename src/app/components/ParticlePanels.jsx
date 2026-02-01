"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const PARTICLE_COUNT = 320;
const MAGNET_DISTANCE = 18;

const isWithinMagnetRange = (left, top, magnetLeft, magnetTop) => {
  const dx = left - magnetLeft;
  const dy = top - magnetTop;
  return Math.hypot(dx, dy) <= MAGNET_DISTANCE;
};

const createParticles = (count, seedOffset = 0, magnets = []) => {
  const resolvedMagnets =
    magnets.length > 0
      ? magnets
      : Array.from({ length: count }, () => ({
          magnetLeft: Math.random() * 100,
          magnetTop: Math.random() * 100,
        }));

  return Array.from({ length: count }, (_, index) => {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const magnetTarget = resolvedMagnets[index % resolvedMagnets.length];
    const withinRange = isWithinMagnetRange(
      left,
      top,
      magnetTarget.magnetLeft,
      magnetTarget.magnetTop
    );
    return {
      id: `${seedOffset}-${index}`,
      left,
      top,
      delay: Math.random() * 2,
      duration: 6 + Math.random() * 6,
      hue: Math.floor(Math.random() * 360),
      driftX: (Math.random() * 2 - 1) * 8,
      driftY: (Math.random() * 2 - 1) * 8,
      magnetLeft: withinRange ? magnetTarget.magnetLeft : left,
      magnetTop: withinRange ? magnetTarget.magnetTop : top,
    };
  });
};

const useParticleField = (seedOffset = 0, magnets = []) => {
  const particles = useMemo(
    () => createParticles(PARTICLE_COUNT, seedOffset, magnets),
    [magnets, seedOffset]
  );
  const [shrinkStates, setShrinkStates] = useState(
    Array.from({ length: PARTICLE_COUNT }, () => false)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setShrinkStates((prev) => prev.map(() => Math.random() < 0.01));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { particles, shrinkStates };
};

const buildTrianglePath = (centerX, centerY, width, height, rotationDeg = 0) => {
  const halfWidth = width / 2;
  const halfHeight = height / 2;
  const points = [
    { x: centerX, y: centerY - halfHeight },
    { x: centerX - halfWidth, y: centerY + halfHeight },
    { x: centerX + halfWidth, y: centerY + halfHeight },
  ];

  if (rotationDeg !== 0) {
    const angle = (rotationDeg * Math.PI) / 180;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    points.forEach((point) => {
      const dx = point.x - centerX;
      const dy = point.y - centerY;
      point.x = centerX + dx * cos - dy * sin;
      point.y = centerY + dx * sin + dy * cos;
    });
  }

  return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y} L ${points[2].x} ${points[2].y} Z`;
};

const buildBracePath = (centerX, centerY, width, height, flip = false) => {
  const halfWidth = width / 2;
  const halfHeight = height / 2;
  const left = centerX - halfWidth;
  const top = centerY - halfHeight;

  const point = (x, y) => {
    const mappedX = flip ? width - x : x;
    return [left + mappedX, top + y];
  };

  const [p1x, p1y] = point(width, 0);
  const [c1x, c1y] = point(width * 0.3, 0);
  const [c2x, c2y] = point(width * 0.3, height * 0.25);
  const [p2x, p2y] = point(width * 0.6, height * 0.25);
  const [c3x, c3y] = point(width * 0.9, height * 0.25);
  const [c4x, c4y] = point(width * 0.9, height * 0.5);
  const [p3x, p3y] = point(width * 0.4, height * 0.5);
  const [c5x, c5y] = point(width * 0.9, height * 0.5);
  const [c6x, c6y] = point(width * 0.9, height * 0.75);
  const [p4x, p4y] = point(width * 0.6, height * 0.75);
  const [c7x, c7y] = point(width * 0.3, height * 0.75);
  const [c8x, c8y] = point(width * 0.3, height);
  const [p5x, p5y] = point(width, height);

  return [
    `M ${p1x} ${p1y}`,
    `C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2x} ${p2y}`,
    `C ${c3x} ${c3y}, ${c4x} ${c4y}, ${p3x} ${p3y}`,
    `C ${c5x} ${c5y}, ${c6x} ${c6y}, ${p4x} ${p4y}`,
    `C ${c7x} ${c7y}, ${c8x} ${c8y}, ${p5x} ${p5y}`,
  ].join(" ");
};

const buildMagnetTargetsFromShapes = (shapes, count) => {
  if (!shapes.length) {
    return [];
  }

  const lengths = shapes.map((shape) => shape.getTotalLength());
  const totalLength = lengths.reduce((sum, length) => sum + length, 0);
  const targets = [];

  shapes.forEach((shape, index) => {
    const shapeLength = lengths[index];
    const shapeCount = Math.max(
      1,
      Math.round((shapeLength / totalLength) * count)
    );
    const step = shapeCount > 1 ? shapeLength / (shapeCount - 1) : 0;
    for (let i = 0; i < shapeCount; i += 1) {
      const point = shape.getPointAtLength(step * i);
      targets.push({ magnetLeft: point.x, magnetTop: point.y });
    }
  });

  if (targets.length < count) {
    const remainder = count - targets.length;
    for (let i = 0; i < remainder; i += 1) {
      targets.push(targets[i % targets.length]);
    }
  }

  return targets.slice(0, count);
};

const useShapeMagnets = (shapeRefs, count) => {
  const [magnets, setMagnets] = useState([]);

  useEffect(() => {
    let animationFrame;
    const calculateMagnets = () => {
      const shapes = shapeRefs
        .map((ref) => ref.current)
        .filter(Boolean);
      if (!shapes.length) {
        return;
      }
      setMagnets(buildMagnetTargetsFromShapes(shapes, count));
    };

    animationFrame = window.requestAnimationFrame(calculateMagnets);
    window.addEventListener("resize", calculateMagnets);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", calculateMagnets);
    };
  }, [count, shapeRefs]);

  return magnets;
};

export default function ParticlePanels() {
  const triangleTopRef = useRef(null);
  const triangleLeftRef = useRef(null);
  const triangleRightRef = useRef(null);
  const braceLeftRef = useRef(null);
  const braceRightRef = useRef(null);

  const trianglePaths = useMemo(
    () => ({
      top: buildTrianglePath(50, 24, 12, 10, 0),
      left: buildTrianglePath(18, 50, 12, 10, -90),
      right: buildTrianglePath(82, 50, 12, 10, 90),
    }),
    []
  );
  const bracePaths = useMemo(
    () => ({
      left: buildBracePath(24, 50, 8, 36, false),
      right: buildBracePath(76, 50, 8, 36, true),
    }),
    []
  );
  const triangleShapeRefs = useMemo(
    () => [triangleTopRef, triangleLeftRef, triangleRightRef],
    []
  );
  const braceShapeRefs = useMemo(() => [braceLeftRef, braceRightRef], []);
  const triangleMagnets = useShapeMagnets(triangleShapeRefs, PARTICLE_COUNT);
  const braceMagnets = useShapeMagnets(braceShapeRefs, PARTICLE_COUNT);
  const { particles: leftParticles, shrinkStates: leftShrink } =
    useParticleField(0, triangleMagnets);
  const { particles: rightParticles, shrinkStates: rightShrink } =
    useParticleField(1, braceMagnets);
  const [activePanel, setActivePanel] = useState(null);

  const renderParticleDots = (particles, shrinkStates) =>
    particles.map((particle, index) => (
      <span
        key={particle.id}
        className={`particle-dot ${shrinkStates[index] ? "particle-dot--tiny" : ""}`}
        style={{
          "--particle-left": `${particle.left}%`,
          "--particle-top": `${particle.top}%`,
          "--particle-magnet-left": `${particle.magnetLeft}%`,
          "--particle-magnet-top": `${particle.magnetTop}%`,
          "--particle-delay": `${particle.delay}s`,
          "--particle-duration": `${particle.duration}s`,
          "--particle-hue": particle.hue,
          "--particle-drift-x": `${particle.driftX}px`,
          "--particle-drift-y": `${particle.driftY}px`,
        }}
      />
    ));

  return (
    <section className="particle-panels">
      <div
        className={`particle-panel particle-panel--left ${
          activePanel === "left" ? "particle-panel--active" : ""
        }`}
      >
        <div className="particle-field">
          <div className="particle-field__layer particle-field__layer--base">
            {renderParticleDots(leftParticles, leftShrink)}
            <svg
              className="particle-shapes particle-shapes--triangles"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <path
                ref={triangleTopRef}
                className="particle-shape particle-shape--fill"
                d={trianglePaths.top}
              />
              <path
                ref={triangleLeftRef}
                className="particle-shape particle-shape--fill"
                d={trianglePaths.left}
              />
              <path
                ref={triangleRightRef}
                className="particle-shape particle-shape--fill"
                d={trianglePaths.right}
              />
            </svg>
          </div>
          <div className="particle-field__layer particle-field__layer--pulse">
            {renderParticleDots(leftParticles, leftShrink)}
            <svg
              className="particle-shapes particle-shapes--triangles"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <path
                className="particle-shape particle-shape--fill"
                d={trianglePaths.top}
              />
              <path
                className="particle-shape particle-shape--fill"
                d={trianglePaths.left}
              />
              <path
                className="particle-shape particle-shape--fill"
                d={trianglePaths.right}
              />
            </svg>
          </div>
        </div>
        <div className="particle-panel__content">
          <p className="particle-copy">
            Placeholder copy for the left column that invites collaboration and
            experimentation with atmospheric visuals.
          </p>
          <button
            className="particle-link"
            type="button"
            onMouseEnter={() => setActivePanel("left")}
            onFocus={() => setActivePanel("left")}
            onMouseLeave={() => setActivePanel(null)}
            onBlur={() => setActivePanel(null)}
          >
            Hover to gather triangles
          </button>
        </div>
      </div>
      <div
        className={`particle-panel particle-panel--right ${
          activePanel === "right" ? "particle-panel--active" : ""
        }`}
      >
        <div className="particle-field">
          <div className="particle-field__layer particle-field__layer--base">
            {renderParticleDots(rightParticles, rightShrink)}
            <svg
              className="particle-shapes particle-shapes--braces"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <path
                ref={braceLeftRef}
                className="particle-shape particle-shape--stroke"
                d={bracePaths.left}
              />
              <path
                ref={braceRightRef}
                className="particle-shape particle-shape--stroke"
                d={bracePaths.right}
              />
            </svg>
          </div>
          <div className="particle-field__layer particle-field__layer--pulse">
            {renderParticleDots(rightParticles, rightShrink)}
            <svg
              className="particle-shapes particle-shapes--braces"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <path
                className="particle-shape particle-shape--stroke"
                d={bracePaths.left}
              />
              <path
                className="particle-shape particle-shape--stroke"
                d={bracePaths.right}
              />
            </svg>
          </div>
        </div>
        <div className="particle-panel__content">
          <p className="particle-copy">
            Placeholder copy for the right column highlighting measured, guided
            progress through evolving systems.
          </p>
          <button
            className="particle-link"
            type="button"
            onMouseEnter={() => setActivePanel("right")}
            onFocus={() => setActivePanel("right")}
            onMouseLeave={() => setActivePanel(null)}
            onBlur={() => setActivePanel(null)}
          >
            Hover to reveal braces
          </button>
        </div>
      </div>
    </section>
  );
}
