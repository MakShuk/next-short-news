"use client";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";

export interface INews {
  id: number;
  title: string;
  originalUrl: string;
  content: string[];
  imageUrl: string;
  resourceName: string;
}

const fetcher = (...args: [RequestInfo, RequestInit?]) =>
  fetch(...args).then((res) => res.json());

function myMiddleware(useSWRNext: (arg0: any, arg1: any, arg2: any) => any) {
  return (key: any, fetcher: any, config: any) => {
    // До выполнения хука...
    const swr = useSWRNext(key, fetcher, config);
    console.log("SWR запрос:", key());
    // После выполнения хука...
    return swr;
  };
}

export function usePost(limit: number, offset: number) {
  const { data, error, isLoading, isValidating } = useSWR(
    `http://192.168.0.8:3001/posts/last-posts?limit=${limit}&offset=${offset}`,
    fetcher,
    {
      use: [myMiddleware],
    }
  );
  const posts: INews[] = data;

  return {
    posts,
    isLoading,
    isError: error,
    isValidating,
  };
}

export function useInfinitePost(limit: number, offset: number) {
  const getKey = (pageIndex: any, previousPageData: any) => {
    if (previousPageData && !previousPageData.length) return null;
    return `http://192.168.0.8:3001/posts/last-posts?limit=${limit}&offset=${
      offset * pageIndex
    }`;
  };

  const { data, size, setSize, isLoading, error, isValidating } =
    useSWRInfinite(getKey, fetcher, {
      initialSize: 1,
      use: [myMiddleware],
    });
  const posts: INews[] = data || [];
  return {
    posts,
    size,
    isLoading,
    isError: error,
    isValidating,
    setSize,
  };
}
