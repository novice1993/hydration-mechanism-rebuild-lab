import express from "express";
import path from "path";
import { renderToString } from "react-dom/server";
import { App } from "../src/App";
import * as React from "react";

const app = express();
const PORT = 3000;

app.use("/dist", express.static(path.resolve(__dirname, "../dist")));

// SSR 수행
app.get("/", (req, res) => {
  try {
    const element = React.createElement(App, null); // ReactElement 생성
    const appHtml = renderToString(element); // renderToString 으로 컴포넌트 텍스트 생성

    const html = `
      <!DOCTYPE html>
      <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="server-rendered" content="true" data-server-rendered-time="${new Date().toISOString()}" />
        <title>React SSR 애플리케이션</title>
        <link rel="stylesheet" href="/dist/assets/main.css">
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script src="/dist/assets/main.js"></script>
      </body>
      </html>
    `;

    // 클라이언트에 전송
    res.contentType("text/html");
    res.send(html);
  } catch (error) {
    console.error("렌더링 오류:", error);
    res.status(500).send("서버 오류가 발생했습니다.");
  }
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
