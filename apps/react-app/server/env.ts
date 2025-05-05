// 서버에서 사용할 환경 변수 정의
export const env = {
  PORT: process.env.PORT || 3001,
  NODE_ENV: process.env.NODE_ENV || "development",
  isProduction: process.env.NODE_ENV === "production",
};

// 환경 변수 정보 출력
export function logEnvInfo() {
  console.log("===== 서버 환경 정보 =====");
  console.log(`NODE_ENV: ${env.NODE_ENV}`);
  console.log(`PORT: ${env.PORT}`);
  console.log(`isProduction: ${env.isProduction}`);
  console.log("=========================");
}
