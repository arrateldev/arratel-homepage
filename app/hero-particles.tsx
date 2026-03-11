"use client";

import { motion, useReducedMotion } from "framer-motion";

const particles = [
  { id: 1, size: 220, x: "8%", y: "10%", duration: 12, delay: 0 },
  { id: 2, size: 140, x: "62%", y: "18%", duration: 10, delay: 1.5 },
  { id: 3, size: 180, x: "48%", y: "58%", duration: 14, delay: 0.8 },
  { id: 4, size: 100, x: "78%", y: "70%", duration: 9, delay: 2.2 },
  { id: 5, size: 130, x: "22%", y: "72%", duration: 11, delay: 1.2 },
];

export function HeroParticles() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[32px]">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-primary/10 blur-3xl"
            style={{
              width: p.size,
              height: p.size,
              left: p.x,
              top: p.y,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[32px]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/15 blur-3xl"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            x: [0, 18, -12, 0],
            y: [0, -16, 14, 0],
            scale: [1, 1.08, 0.96, 1],
            opacity: [0.45, 0.7, 0.5, 0.45],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}