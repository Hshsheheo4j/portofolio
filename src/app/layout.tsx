import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Assaad Khalil | Full Stack Developer & AI Entrepreneur",
  description: "Premium portfolio of Assaad Khalil, specializing in modern digital experiences and AI-driven solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-brand-bg text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
