import express from "express";
import path from "path";
import fs from "fs";
import { renderToString } from "react-dom/server";
import cors from "cors";
import { App } from "../src/App";
import * as React from "react";
import { env, logEnvInfo } from "./env";

const app = express();
const PORT = env.PORT;

// 서버 환경 정보 출력
logEnvInfo();

// 미들웨어
app.use(cors()); // CORS 설정

// 정적 파일 제공 (클라이언트 빌드 결과물)
app.use(express.static(path.resolve(__dirname, "../dist")));

// 모든 요청에 대해 Server-Side Rendering 수행
app.get("*", (req, res) => {
  try {
    // App 컴포넌트를 HTML 문자열로 렌더링
    // createElement를 명시적으로 사용
    const element = React.createElement(App, null);
    const appHtml = renderToString(element);

    // 서버 렌더링 시간을 로깅
    console.log("서버 렌더링 완료:", new Date().toISOString());

    // HTML 템플릿 읽기 - 경로 수정
    // ts-node에서 직접 실행할 때는 상대 경로가 다름
    const indexHtmlPath = path.resolve(__dirname, "../dist/index.html");
    console.log("HTML 템플릿 경로:", indexHtmlPath);

    let indexHtml = fs.readFileSync(indexHtmlPath, "utf8");

    // 템플릿에 렌더링된 앱 HTML 삽입
    indexHtml = indexHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // 서버 렌더링 증명을 위한 메타 태그 추가
    indexHtml = indexHtml.replace(
      "<head>",
      `<head>
      <meta name="server-rendered" content="true" data-server-rendered-time="${new Date().toISOString()}" />`
    );

    // 클라이언트에 전송
    res.contentType("text/html");
    res.send(indexHtml);
  } catch (error) {
    console.error("렌더링 오류:", error);
    res.status(500).send("서버 오류가 발생했습니다.");
  }
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
