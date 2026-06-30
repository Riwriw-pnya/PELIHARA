import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pelihara",
  description: "Pelihara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        className="
          min-h-screen
          overflow-x-hidden
          antialiased
          bg-[#f7fff9]
          relative
        "
      >
        <BackgroundAnimation />
        <Navbar />
        {children}
      </body>
    </html>
  );
}