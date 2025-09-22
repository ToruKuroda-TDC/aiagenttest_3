import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ToDoアプリ",
  description: "シンプルなタスク管理アプリケーション",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}
