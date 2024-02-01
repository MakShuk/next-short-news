'use client';

import CardModal from '@/app/components/modal/card-modal';
import { INews } from '@/lib/get-news';

import { FC } from 'react';
import { useSWRConfig } from 'swr';

interface ModalPageProps {
	params: {
		id: string;
	};
}

const ModalPage: FC<ModalPageProps> = ({ params }) => {
	const { cache } = useSWRConfig();

	const url = '$inf$http://192.168.0.8:3001/posts/last-posts?limit=6&offset=0';
	const posts = cache.get(url)?.data.flat() as INews[];

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
