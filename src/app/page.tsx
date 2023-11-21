"use client";
import usePost from "@/lib/get-news";
import PaginationMainPage from "./components/pagination/pagination";
import React, { useState } from "react";
import { getImageUrl } from "@/lib/get-image-url";
import NewsCard from "./components/card/news";
import ProgressIndicators from "./components/progress/progress-indicators";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { posts, isLoading, isError } = usePost(4, (currentPage - 1) * 4);
  console.log(posts);
  if (isLoading) return <ProgressIndicators />;
  if (isError) return <div>failed to load</div>;

  return (
    <main className="">
      <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 bg-white dark:bg-black justify-center p-3">
        {posts.map((news: any) => {
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
        })}
      </div>
      <PaginationMainPage
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
}
function useSWR(arg0: string, fetcher: any): { data: any } {
  throw new Error("Function not implemented.");
}
