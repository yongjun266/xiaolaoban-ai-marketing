import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "小老板 AI 营销助手",
  description: "帮助中小商家快速生成商品介绍、宣传文案和客户回复。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
