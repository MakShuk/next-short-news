import React from "react";
import { Spinner } from "@nextui-org/react";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

export default function ErrorLoadingPost() {
  return (
    <div className="flex align-middle justify-center h-[calc(100vh-64px)] bg-white dark:bg-black">
        <ExclamationTriangleIcon width={50} color="danger" />

    </div>
  );
}
