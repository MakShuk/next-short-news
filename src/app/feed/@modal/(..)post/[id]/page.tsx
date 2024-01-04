'use client';

import CardModal from '@/app/components/modal/card-modal';
import { INews } from '@/lib/get-news';

import { FC } from 'react';
import { useSWRConfig } from 'swr';

const ModalPage: FC<any> = ({ params }) => {
	const { cache } = useSWRConfig();
	console.log(cache);

	const posts = cache
		.get('$inf$http://192.168.0.5:3001/posts/last-posts?limit=6&offset=0')
		?.data.flat() as INews[];

	const post = posts.find(obj => obj.id === +params.id);

	if (!post) return null;

	return (
		<CardModal
			title={post.title}
			isOpen={true}
			originalUrl={post.originalUrl}
			content={post.content}
		/>
	);
};

export default ModalPage;
