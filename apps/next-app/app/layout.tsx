import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Hydration 실험",
  description: "Next.js의 Hydration 메커니즘을 탐구하는 앱입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <main className="container">
          <h1 className="title">Next.js Hydration 메커니즘 실험</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
