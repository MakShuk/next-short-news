"use client";
import { usePathname } from "next/navigation";

export default function Error() {
  const pathname = usePathname();
  if (pathname.includes("/photo/")) return <p>Ошибака данных</p>;
  return <p>Ошибака данных main</p>;
}
