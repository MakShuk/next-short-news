"use client";
import useSWR from "swr";

export interface INews {
  id: number;
  title: string;
  originalUrl: string;
  content: string[];
  imageUrl: string;
  resourceName: string;
}

export const getNews = async (limit: number, id?: number) => {
  const posts = (await fetch(
    `http://localhost:3001/posts/last-posts?limit=${limit}`,
    {
      next: { tags: ["news"] },
      cache: "no-store",
    }
  ).then((res) => res.json())) as INews[];
  return id ? posts.filter((post) => post.id === id) : posts;
};

const fetcher = (...args: [RequestInfo, RequestInit?]) =>
  fetch(...args).then((res) => res.json());

function myMiddleware(useSWRNext: (arg0: any, arg1: any, arg2: any) => any) {
  return (key: any, fetcher: any, config: any) => {
    // До выполнения хука...
    const swr = useSWRNext(key, fetcher, config);
    console.log("SWR запрос:", key);
    // После выполнения хука...
    return swr;
  };
}

export default function usePost(limit: number, offset: number) {
  console.log(offset);
  const { data, error, isLoading, isValidating } = useSWR(
    `http://192.168.0.8:3001/posts/last-posts?limit=${limit}&offset=${offset}`,
    fetcher,
    {
      use: [myMiddleware],
    }
  );

  return {
    posts: data,
    isLoading,
    isError: error,
    isValidating,
  };
}
