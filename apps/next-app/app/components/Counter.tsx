"use client";

import { useState, useEffect } from "react";

interface CounterProps {
  initialCount: number;
}

export function Counter({ initialCount }: CounterProps) {
  const [count, setCount] = useState(initialCount);
  const [isMounted, setIsMounted] = useState(false);

  // hydration이 완료된 후에만 true가 됩니다.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      <p>클라이언트 컴포넌트 카운터</p>
      <p className="counter-value">{count}</p>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button
          className="counter-button"
          onClick={() => setCount((prev) => prev - 1)}
        >
          감소
        </button>
        <button
          className="counter-button"
          onClick={() => setCount((prev) => prev + 1)}
        >
          증가
        </button>
      </div>
      {isMounted ? (
        <p style={{ marginTop: "1rem", color: "green" }}>
          ✓ Hydration 완료 (클라이언트 측 렌더링)
        </p>
      ) : (
        <p style={{ marginTop: "1rem", color: "gray" }}>
          Hydration 전 (서버 측 렌더링)
        </p>
      )}
    </div>
  );
}
