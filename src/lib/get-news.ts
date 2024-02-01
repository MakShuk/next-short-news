/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';

export interface INews {
	id: number;
	title: string;
	originalUrl: string;
	content: string[];
	imageUrl: string;
	resourceName: string;
}

const fetcher = (...args: [RequestInfo, RequestInit?]) => fetch(...args).then(res => res.json());

function myMiddleware(useSWRNext: (arg0: any, arg1: any, arg2: any) => any) {
	return (key: any, fetcher: any, config: any) => {
		const swr = useSWRNext(key, fetcher, config);
		return swr;
	};
}

export function usePost(id: number) {
	const { data, error, isLoading, isValidating } = useSWR(
		`http://192.168.0.8:3001/posts?id=${id}`,
		fetcher,
	);
	const post: INews = data;

	return {
		post,
		isLoading,
		isError: error,
		isValidating,
	};
}

export function useInfinitePost(limit: number, offset: number) {
	const getKey = (pageIndex: number, previousPageData: []) => {
		if (previousPageData && !previousPageData.length) return null;
		return `http://192.168.0.8:3001/posts/last-posts?limit=${limit}&offset=${offset * pageIndex}`;
	};

	const { data, size, setSize, isLoading, error, isValidating } = useSWRInfinite(getKey, fetcher, {
		initialSize: 2,
		use: [myMiddleware],
		dedupingInterval: 2000,
		focusThrottleInterval: 3000,
		revalidateFirstPage: false,
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
