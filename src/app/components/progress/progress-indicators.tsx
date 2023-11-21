import React from "react";
import { CircularProgress } from "@nextui-org/react";

export default function ProgressIndicators() {
  return (
    <div className="flex align-middle justify-center 	h-96">
      <CircularProgress size="lg" color="default" aria-label="Загрузка.." />
    </div>
  );
}
