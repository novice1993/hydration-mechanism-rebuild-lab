import * as React from "react";
import { hydrateRoot } from "react-dom/client";
import { App } from "./App";
import "./styles/globals.css";

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
document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");

  if (!rootElement) {
    console.error("루트 요소를 찾을 수 없습니다.");
    return;
  }

  console.log("Hydration 시작");

  // hydrateRoot 사용하여 서버 렌더링된 HTML에 이벤트 핸들러 연결
  const root = hydrateRoot(rootElement, <App />);

  console.log("Hydration 완료");

  // 개발자 도구 콘솔에서 접근할 수 있도록 전역 변수로 할당
  (window as any).__hydrationRoot = root;
});
