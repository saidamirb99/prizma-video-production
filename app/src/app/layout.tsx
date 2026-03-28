import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PRIZMA — Профессиональная фото и видеосъемка",
  description:
    "Яркие моменты, запечатленные в каждом кадре. Профессиональная фото и видеосъемка для любых событий и проектов в Узбекистане.",
  openGraph: {
    title: "PRIZMA — Photo & Video Production",
    description: "Профессиональная фото и видеосъемка для любых событий и проектов",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${syne.variable}`}>
      <body className="min-h-screen bg-bg text-text antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
