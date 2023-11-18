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
/*   main, */
  header,
}: {
  children: React.ReactNode;
 /*  main: React.ReactNode; */
  header: React.ReactNode;
}) {
  return (
    <html lang="ru" className="light" style={{ colorScheme: "light" }}>
      <body className={inter.className + " max-w-[1024px] m-auto"}>
        <ThemesProviders>
          <NextUIProviders>
            {header}
            {/*    {main} */}
            {children}
          </NextUIProviders>
        </ThemesProviders>
      </body>
    </html>
  );
}
