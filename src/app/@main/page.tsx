"use client";

import React from "react";
import { getNews } from "@/lib/get-news";
import { getImageUrl } from "@/lib/get-image-url";
import NewsCard from "../components/card/news";
import PaginationMainPage from "../components/pagination/pagination";


import { useRouter } from 'next/router';



export default function MainArea() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const router = useRouter();
  const { hello, page } = router.query;

  return (
    <main className="gap-3 grid grid-cols-1 sm:grid-cols-2 bg-white dark:bg-black justify-center p-3">
      {/*    {data.map((news) => {
        const { id, content, title, originalUrl, imageUrl, resourceName } =
          news;
        const apiImageUrl = getImageUrl(id, imageUrl, resourceName);
        if (content.length <= 1) return null;
        return (
          <NewsCard
            key={id}
            data={{
              title,
              content,
              originalUrl,
              imageUrl: apiImageUrl,
            }}
          />
        );
      })} */}
      <p>Query string: {hello}</p>;<PaginationMainPage></PaginationMainPage>
    </main>
  );
}
