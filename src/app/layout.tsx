import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "BEKNO - Soluções Digitais para o Seu Negócio",
  description: "Transforme seu negócio com soluções digitais personalizadas da BEKNO.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={fontVariables}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
