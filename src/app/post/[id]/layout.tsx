import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "short.news",
  description: "Коротние новости со всего мира",
};

export default function PhotoLayout(data: {
  children: React.ReactNode;
  modal: React.ReactNode;
  header: React.ReactNode;
}) {
  return data.children;
}
