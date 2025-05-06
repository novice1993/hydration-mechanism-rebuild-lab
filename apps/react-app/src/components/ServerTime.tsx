import * as React from "react";

// 실제 서버에서 렌더링될 때의 시간
const SERVER_RENDER_TIME = new Date().toLocaleString("ko-KR", {
  dateStyle: "medium",
  timeStyle: "medium",
});

export function ServerTime() {
  return (
    <div>
      <p>서버에서 생성된 시간 (서버 컴포넌트)</p>
      <p style={{ fontWeight: "bold" }}>{SERVER_RENDER_TIME}</p>
      <p style={{ fontSize: "0.8rem", color: "#666" }}>
        서버 렌더링이 발생한 시간이 고정되어 표시됩니다. 이 시간은
        클라이언트에서 새로고침해도 변경되지 않습니다.
      </p>
    </div>
  );
}
