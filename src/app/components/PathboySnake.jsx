"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./PathboySnake.module.css";

const GRID_SIZE = 12;
const INITIAL_SNAKE = [
  { x: 5, y: 6 },
  { x: 4, y: 6 },
  { x: 3, y: 6 },
];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const TICK_MS = 150;

const DIRECTIONS = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

function sameCell(a, b) {
  return a.x === b.x && a.y === b.y;
}

function randomFood(snake) {
  const occupied = new Set(snake.map((segment) => `${segment.x}-${segment.y}`));
  const available = [];

  for (let y = 0; y < GRID_SIZE; y += 1) {
    for (let x = 0; x < GRID_SIZE; x += 1) {
      const key = `${x}-${y}`;
      if (!occupied.has(key)) available.push({ x, y });
    }
  }

  if (available.length === 0) {
    return { x: 0, y: 0 };
  }

  return available[Math.floor(Math.random() * available.length)];
}

export default function PathboySnake() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const directionRef = useRef(INITIAL_DIRECTION);
  const [food, setFood] = useState(() => randomFood(INITIAL_SNAKE));
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const changeDirection = useCallback((nextDirection) => {
    const current = directionRef.current;
    const isReverse =
      nextDirection.x === current.x * -1 && nextDirection.y === current.y * -1;

    if (isReverse) return;

    directionRef.current = nextDirection;
    setDirection(nextDirection);
  }, []);

  const resetGame = useCallback(() => {
    setSnake(INITIAL_SNAKE);
    setFood(randomFood(INITIAL_SNAKE));
    directionRef.current = INITIAL_DIRECTION;
    setDirection(INITIAL_DIRECTION);
    setIsGameOver(false);
    setScore(0);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      const key = event.key.toLowerCase();

      if (["arrowup", "arrowdown", "arrowleft", "arrowright", "w", "a", "s", "d"].includes(key)) {
        event.preventDefault();
      }

      if (key === "arrowup" || key === "w") changeDirection(DIRECTIONS.up);
      if (key === "arrowdown" || key === "s") changeDirection(DIRECTIONS.down);
      if (key === "arrowleft" || key === "a") changeDirection(DIRECTIONS.left);
      if (key === "arrowright" || key === "d") changeDirection(DIRECTIONS.right);
      if (key === " ") resetGame();
    };

    window.addEventListener("keydown", onKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [changeDirection, resetGame]);

  useEffect(() => {
    if (isGameOver) return undefined;

    const gameLoop = window.setInterval(() => {
      setSnake((currentSnake) => {
        const head = currentSnake[0];
        const nextHead = {
          x: head.x + directionRef.current.x,
          y: head.y + directionRef.current.y,
        };

        const outOfBounds =
          nextHead.x < 0 ||
          nextHead.x >= GRID_SIZE ||
          nextHead.y < 0 ||
          nextHead.y >= GRID_SIZE;

        const hitSelf = currentSnake.some((segment) => sameCell(segment, nextHead));

        if (outOfBounds || hitSelf) {
          setIsGameOver(true);
          return currentSnake;
        }

        const nextSnake = [nextHead, ...currentSnake];

        if (sameCell(nextHead, food)) {
          setScore((value) => value + 1);
          setFood(randomFood(nextSnake));
          return nextSnake;
        }

        nextSnake.pop();
        return nextSnake;
      });
    }, TICK_MS);

    return () => window.clearInterval(gameLoop);
  }, [food, isGameOver]);

  const cells = useMemo(() => {
    const snakeSet = new Set(snake.map((segment) => `${segment.x}-${segment.y}`));

    return Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, index) => {
      const x = index % GRID_SIZE;
      const y = Math.floor(index / GRID_SIZE);
      const key = `${x}-${y}`;

      return {
        key,
        isSnake: snakeSet.has(key),
        isHead: snake[0] && snake[0].x === x && snake[0].y === y,
        isFood: food.x === x && food.y === y,
      };
    });
  }, [food, snake]);

  return (
    <section className={styles.pathboyWrapper}>
      <div className={styles.pathboyShell}>
        <div className={styles.topBadge}>PATHBOY</div>

        <div className={styles.screenArea}>
          <div className={styles.screenFrame}>
            <div className={styles.screenHeader}>
              <span>SNAKE.EXE</span>
              <span>Score: {score}</span>
            </div>

            <div className={styles.grid}>
              {cells.map((cell) => (
                <span
                  key={cell.key}
                  className={[
                    styles.cell,
                    cell.isSnake ? styles.cellSnake : "",
                    cell.isHead ? styles.cellHead : "",
                    cell.isFood ? styles.cellFood : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                />
              ))}
            </div>

            <p className={styles.screenHint}>
              Move with WASD / arrow keys or the D-pad.
            </p>
            {isGameOver ? (
              <button type="button" className={styles.resetButton} onClick={resetGame}>
                Game Over — Restart
              </button>
            ) : null}
          </div>
        </div>

        <div className={styles.controlsRow}>
          <div className={styles.dpad}>
            <button
              type="button"
              aria-label="Move up"
              className={`${styles.arrowButton} ${styles.up}`}
              onClick={() => changeDirection(DIRECTIONS.up)}
            >
              ▲
            </button>
            <button
              type="button"
              aria-label="Move left"
              className={`${styles.arrowButton} ${styles.left}`}
              onClick={() => changeDirection(DIRECTIONS.left)}
            >
              ◀
            </button>
            <button
              type="button"
              aria-label="Move right"
              className={`${styles.arrowButton} ${styles.right}`}
              onClick={() => changeDirection(DIRECTIONS.right)}
            >
              ▶
            </button>
            <button
              type="button"
              aria-label="Move down"
              className={`${styles.arrowButton} ${styles.down}`}
              onClick={() => changeDirection(DIRECTIONS.down)}
            >
              ▼
            </button>
          </div>

          <button type="button" className={styles.restartButton} onClick={resetGame}>
            RESET
          </button>
        </div>
      </div>
    </section>
  );
}
