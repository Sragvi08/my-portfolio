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
  title: "Sragvi · Cybersecurity",
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
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          backgroundColor: "#0a0a0b",
          color: "#e4e4e7",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
        className={`${syne.variable} ${jetbrainsMono.variable}`}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            width: "100%",
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Nav />
          <div style={{ flex: 1 }}>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
