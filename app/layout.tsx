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

          @font-face {
            font-family: TT;
            src: url(./fonts/TT.ttf);
            font-weight: normal;
            font-style: normal;
            font-display: swap
          }

          .rollship {
            width: 80px;
            height: 58px;
            background-image: url(./svg/ship.svg);
            background-repeat: no-repeat;
            transform-origin: center center;
            animation: rollship 5s linear infinite;
          }


          .lighter {
            position: absolute;
            right: -140px;
            bottom: -30px;
            z-index: 4;
            width: 600px;
            height: 400px;
            background-image: url(./svg/lighter.svg);
            background-repeat: no-repeat;
            scale:0.5;
          }
        `}</style>
        {children}
      </body>
    </html>
  );
}
