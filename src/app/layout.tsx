import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProviders, ThemesProviders } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "short.news",
  description: "Коротние новости со всего мира",
};

export default function RootLayout({
  children,
  header,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
}) {
  return (
    <html lang="ru" className="dark" style={{ colorScheme: "dark" }}>
      <body className={inter.className}>
        <ThemesProviders>
          <NextUIProviders>
            {header}
            {children}
          </NextUIProviders>
        </ThemesProviders>
      </body>
    </html>
  );
}
