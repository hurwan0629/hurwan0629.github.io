import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SidebarButton from "./components/button";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cchamppang develop blog",
  description: "cchamppang's fullstack blog website place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <div className="flex h-screen">
          <aside className="w-64 bg-gray-800 text-white p-4">
            <SidebarButton buttonContent="홈페이지" buttonLinkTo="/" />
            <SidebarButton buttonContent="개념공부" buttonLinkTo="/concept" />
          </aside>

          <main className="flex flex-col flex-1 items-center p-6 bg-gray-100">
            메인 콘텐츠 영역
            <div className="flex flex-col items-center border border-2 w-full h-full">
              {children}
              <h6>1</h6>
              <h6>2</h6>
              <h6>3</h6>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
