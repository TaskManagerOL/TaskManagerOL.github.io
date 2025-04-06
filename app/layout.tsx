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
        <style>{`
          @font-face {
            font-family: Backso;
            src: url(./fonts/Backso.otf);
            font-weight: normal;
            font-style: normal;
            font-display: swap
          }

          @font-face {
            font-family: SuperLobster;
            src: url(./fonts/SuperLobster.otf);
            font-weight: normal;
            font-style: normal;
            font-display: swap
          }

          @font-face {
            font-family: KGPerfectPenmanship;
            src: url(./fonts/KGPerfectPenmanship.otf);
            font-weight: normal;
            font-style: normal;
            font-display: swap
          }
        `}</style>
        {children}
      </body>
    </html>
  );
}
