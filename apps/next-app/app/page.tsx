import { Counter } from "./components/Counter";
import { ServerTime } from "./components/ServerTime";

export default function Home() {
  return (
    <div>
      <div className="counter-container">
        <ServerTime />
        <Counter initialCount={0} />
      </div>
      <p className="info-text">
        이 페이지는 Next.js App Router를 사용해 구현되었으며, 서버
        컴포넌트(ServerTime)와 클라이언트 컴포넌트(Counter)가 함께 렌더링됩니다.
        Counter 컴포넌트는 클라이언트에서 hydration 되어 상호작용이 가능합니다.
      </p>
    </div>
  );
}
