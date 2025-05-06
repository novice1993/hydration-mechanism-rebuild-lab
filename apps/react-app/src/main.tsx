import * as React from "react";
import { hydrateRoot } from "react-dom/client";
import { Counter } from "./components/Counter";
import "./styles/globals.css";

const hydrationDelay = 3000;

// 클라이언트에서 서버 렌더링 여부 확인
const isServerRendered = document.querySelector('meta[name="server-rendered"]');
const serverRenderTime = isServerRendered?.getAttribute(
  "data-server-rendered-time"
);

if (isServerRendered) {
  console.log("서버 렌더링 HTML 감지됨");
  console.log("서버 렌더링 시간:", serverRenderTime);
}

// 페이지가 로드되면 hydration 수행
document.addEventListener("DOMContentLoaded", async () => {
  const counterElement = document.getElementById("ssr-counter");

  if (!counterElement) {
    console.error("요소를 찾을 수 없습니다.");
    return;
  }

  // hydrateRoot 사용하여 서버 렌더링된 HTML에 이벤트 핸들러 연결
  console.log("Hydration 시작");

  await new Promise((reslove) => {
    setTimeout(() => {
      hydrateRoot(counterElement, <Counter initialCount={0} />);
      reslove(null);
    }, hydrationDelay);
  });
  console.log("Hydration 완료");
});
