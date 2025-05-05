import * as React from "react";
import { Counter } from "./components/Counter";
import { ServerTime } from "./components/ServerTime";

export function App() {
  return (
    <main className="container">
      <h1 className="title">React Hydration 메커니즘 실험</h1>
      <div>
        <div className="counter-container">
          <ServerTime />
          <Counter initialCount={0} />
        </div>
        <p className="info-text">
          이 페이지는 React와 ReactDOM의 <code>hydrateRoot</code> API를 사용해
          구현되었습니다. <br />
          <br />
          <strong>Hydration 과정:</strong>
          <ol>
            <li>서버에서 React 컴포넌트를 HTML로 렌더링 (renderToString)</li>
            <li>이 HTML이 클라이언트로 전송됨</li>
            <li>
              클라이언트에서 동일한 React 컴포넌트를 사용해 hydrateRoot 호출
            </li>
            <li>
              React가 기존 HTML을 재사용하면서 이벤트 핸들러 연결 및 상태 복원
            </li>
          </ol>
        </p>
      </div>
    </main>
  );
}
