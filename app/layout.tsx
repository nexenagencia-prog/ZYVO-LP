import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZYVO — Inteligência de performance humana",
  description: "Videoconferência com inteligência de performance humana. Entenda padrões, pontos cegos e o que desenvolver para melhorar suas próximas reuniões.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
