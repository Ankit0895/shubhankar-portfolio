"use client";

import { useEffect, useRef } from "react";

const REVEAL_RADIUS_PX = 150;
const EASE = 0.18;
const MAX_OPACITY = 0.4;

export function GridOverlay() {
  const patternRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pattern = patternRef.current;
    const parent = pattern?.parentElement;
    if (!pattern || !parent) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let targetOpacity = 0;
    let currentOpacity = 0;
    let rafId: number;

    function handleMove(e: MouseEvent) {
      const rect = parent!.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      targetOpacity = MAX_OPACITY;
    }

    function handleLeave() {
      targetOpacity = 0;
    }

    function tick() {
      currentX += (targetX - currentX) * EASE;
      currentY += (targetY - currentY) * EASE;
      currentOpacity += (targetOpacity - currentOpacity) * EASE;
      pattern!.style.setProperty("--grid-x", `${currentX}px`);
      pattern!.style.setProperty("--grid-y", `${currentY}px`);
      pattern!.style.opacity = String(currentOpacity);
      rafId = requestAnimationFrame(tick);
    }

    parent.addEventListener("mousemove", handleMove);
    parent.addEventListener("mouseleave", handleLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      parent.removeEventListener("mousemove", handleMove);
      parent.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={patternRef}
      aria-hidden
      className="bg-grid-mesh pointer-events-none absolute inset-0 -z-10"
      style={{
        opacity: 0,
        maskImage: `radial-gradient(${REVEAL_RADIUS_PX}px at var(--grid-x, 50%) var(--grid-y, 50%), black 0%, transparent 100%)`,
        WebkitMaskImage: `radial-gradient(${REVEAL_RADIUS_PX}px at var(--grid-x, 50%) var(--grid-y, 50%), black 0%, transparent 100%)`,
      }}
    />
  );
}
