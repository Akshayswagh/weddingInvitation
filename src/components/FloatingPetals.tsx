import { useEffect, useState, useCallback } from "react";

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  emoji: string;
  sway: number;
}

const EMOJIS = ["🌸", "🌺", "🌼", "🪷", "✨"];

const createPetal = (id: number): Petal => ({
  id,
  left: Math.random() * 100,
  size: 14 + Math.random() * 22,
  duration: 6 + Math.random() * 10,
  delay: Math.random() * 5,
  emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
  sway: -50 + Math.random() * 100,
});

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  // Initial batch
  useEffect(() => {
    setPetals(Array.from({ length: 10 }, (_, i) => createPetal(i)));
  }, []);

  // Continuously spawn new petals
  useEffect(() => {
    let nextId = 10;
    const interval = setInterval(() => {
      setPetals((prev) => {
        const newPetals = [...prev, createPetal(nextId++)];
        return newPetals.length > 15 ? newPetals.slice(-15) : newPetals;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="absolute animate-float-petal"
          style={{
            left: `${petal.left}%`,
            fontSize: `${petal.size}px`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            opacity: 0.8,
            // @ts-ignore
            "--sway": `${petal.sway}px`,
          } as React.CSSProperties}
        >
          {petal.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingPetals;
