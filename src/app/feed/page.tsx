'use client';
import { INews, useInfinitePost } from '@/lib/get-news';
import React, { useEffect, useRef, useState } from 'react';
import { getImageUrl } from '@/lib/get-image-url';
import Link from 'next/link';
import ProgressIndicators from '../components/progress/progress-indicators';
import NewsCard from '../components/card/news';
import ErrorLoadingPost from '../components/errors/error-laod';

export default function Home() {
	const { posts, isLoading, isError, setSize, size, isValidating } = useInfinitePost(6, 6);
	const [shouldSendRequest, setShouldSendRequest] = useState(true);

	const ref = useRef<null | HTMLDivElement>(null);

	useEffect(() => {
		const onScroll = () => {
			if (ref && ref.current) {
				const documentHeight = document.documentElement.scrollHeight;
				const scrollTop =
					window.scrollY || document.body.scrollTop + (document.documentElement.scrollTop || 0);
				const windowHeight =
					window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
				if (scrollTop + windowHeight + 180 >= documentHeight) {
					if (!isLoading && !isValidating && shouldSendRequest) {
						setSize(size + 1);
					} else {
						setShouldSendRequest(true);
					}
				}
			}
		};
		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, [size, setSize, isLoading, isValidating, shouldSendRequest]);

	if (isLoading) return <ProgressIndicators />;
	if (isError) return <ErrorLoadingPost />;

	return (
		<main className="">
			<div
				ref={ref}
				className="gap-3 grid grid-cols-1 sm:grid-cols-2 bg-white dark:bg-black justify-center p-3"
			>
				{posts.flat().map((news: INews) => {
					const { id, content, title, originalUrl, imageUrl, resourceName } = news;
					const apiImageUrl = getImageUrl(id, imageUrl, resourceName);
					if (content.length <= 1) return null;
					return (
						<Link
							key={id}
							href={`/post/${id}`}
							onClick={() => {
								setShouldSendRequest(false);
							}}
						>
							{
								<NewsCard
									data={{
										id,
										title,
										content,
										originalUrl,
										imageUrl: apiImageUrl,
									}}
								/>
							}
						</Link>
					);
				})}
			</div>
			{/*  <InfiniteLoading size={size} setSize={setSize} /> */}
			{/*      <PaginationMainPage
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      /> */}
		</main>
	);
}
