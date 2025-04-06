import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaskManagerOL",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh_cn">
      <body>
        {children}
      </body>
    </html>
  );
}
