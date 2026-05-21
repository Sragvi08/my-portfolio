import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-var",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Sragvi · cybersecurity",
  description: "A public learning journal and portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${jetbrainsMono.variable} flex flex-col min-h-screen`}
      >
        <Nav />
        <div className="flex-1 max-w-5xl mx-auto w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
