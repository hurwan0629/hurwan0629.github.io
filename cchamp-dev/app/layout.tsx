import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "./components/sidebar/sidebar";
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
          <aside className="w-64 bg-gray-800 text-white p-2">
            <Sidebar />
          </aside>

          <main className="flex flex-col flex-1 items-center p-6 bg-gray-100">
              {children}
          </main>
        </div>
      </body>
    </html>
  );
}
