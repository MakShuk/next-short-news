import React from "react";
import { CircularProgress, Spinner } from "@nextui-org/react";

export default function ProgressIndicators() {
  return (
    <div className="flex align-middle justify-center h-[calc(100vh-64px)] bg-white dark:bg-black">
      <Spinner size="lg" color="danger" label="Загрузка.." />
    </div>
  );
}
