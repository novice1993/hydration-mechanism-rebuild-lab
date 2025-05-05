// CSS 모듈 임포트를 위한 타입 정의
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

// 서버 측 렌더링 환경을 위한 공용 타입 정의
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
  }
}
