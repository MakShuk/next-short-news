import { Link, Image } from "@nextui-org/react";
import React from "react";

const GitHubLink = () => {
  return (
    <Link href="https://github.com/MakShuk/next-short-news">
      <Image
        alt="git"
        src="/github.svg"
        width={30}
        height={30}
        className="dark:invert"
      />
    </Link>
  );
};

export default GitHubLink;
