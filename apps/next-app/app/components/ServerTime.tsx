export function ServerTime() {
  // 서버 컴포넌트에서는 'use client' 지시문이 없으므로 서버에서만 실행됩니다.
  const currentTime = new Date().toLocaleString("ko-KR", {
    dateStyle: "medium",
    timeStyle: "medium",
  });

  return (
    <div>
      <p>서버에서 생성된 시간 (서버 컴포넌트)</p>
      <p style={{ fontWeight: "bold" }}>{currentTime}</p>
    </div>
  );
}
