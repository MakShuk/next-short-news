import Image from "next/image";
import GitHubLink from "./components/link/git-hub";
import NewsCard from "./components/card/news";
import { getNews } from "@/lib/get-news";
import Link from "next/link";
import { getImageUrl } from "@/lib/get-image-url";
import PaginationMainPage from "./components/pagination/pagination";
import { useRouter } from "next/router";
import React from "react";

export default async function Home() {
   //const data = await getNews(10); 
//  const [currentPage, setCurrentPage] = React.useState(1);
   //const router = useRouter();
 //  const { hello, page } = router.query; 

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
      <PaginationMainPage></PaginationMainPage>
    </main>
  );
}
