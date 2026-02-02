import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wszystkiego Najlepszego Siostrzyczko!",
  description: "Specjalna kartka urodzinowa dla siostrzyczki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
