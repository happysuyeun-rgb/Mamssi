import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "마음, 씨 (Mamssi)",
  description: "100일 후, 당신의 감정은 꽃이 됩니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

