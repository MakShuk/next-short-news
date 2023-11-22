"use client";
import { useInfinitePost, usePost } from "@/lib/get-news";
import PaginationMainPage from "./components/pagination/pagination";
import React, { useState } from "react";
import { getImageUrl } from "@/lib/get-image-url";
import NewsCard from "./components/card/news";
import ProgressIndicators from "./components/progress/progress-indicators";
import InfiniteLoading from "./components/buttons/infinite-loading";

export default function Home() {
  const { posts, isLoading, isError, setSize, size } = useInfinitePost(4, 4);
  console.log(posts);

  if (isLoading) return <ProgressIndicators />;
  if (isError) return <div>failed to load</div>;

  return (
    <main className="">
      <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 bg-white dark:bg-black justify-center p-3">
        {posts.flat().map((news) => {
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
      <InfiniteLoading size={size} setSize={setSize} />
      {/*      <PaginationMainPage
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      /> */}
    </main>
  );
}
