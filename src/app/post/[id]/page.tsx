'use client';
import ProgressIndicators from '@/app/components/progress/progress-indicators';
import { usePost } from '@/lib/get-news';
import { FC } from 'react';
import Image from 'next/image';
import { getImageUrl } from '@/lib/get-image-url';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import ErrorLoadingPost from '@/app/components/errors/error-laod';

export interface PostDetailProps {
	params: {
		id: string;
	};
}

const PhotoDetail: FC<PostDetailProps> = ({ params }) => {
	const currentPostID = Number(params.id);
	const { post, isLoading, isError, isValidating } = usePost(currentPostID);
	const router = useRouter();

	if (isLoading) return <ProgressIndicators />;
	if (isError) return <ErrorLoadingPost />;

	const { id, content, title, originalUrl, imageUrl, resourceName } = post;
	const apiImageUrl = getImageUrl(id, imageUrl, resourceName);

	return (
		<div className="max-w-[524px] m-auto grid md:grid-cols-1 place-items-center gap-0 bg-white dark:bg-black text-black dark:text-neutral-300">
			<Image
				alt="Mountains"
				src={`/${apiImageUrl}`}
				sizes="100vh"
				// Make the image display full width
				width={380}
				height={190}
				style={{
					width: '100%',
					height: 'auto',
				}}
				className="m-0 rounded-b"
			/>
			<h2 className="text-center text-lg px-2 font-semibold">{title}</h2>
			<ul className="px-2">
				{content.map((el, i) => {
					return (
						<li key={i} className="mb-0.5">
							✔️ {el}
						</li>
					);
				})}
			</ul>
			<Button
				className="w-full px-2 mt-2"
				color="danger"
				variant="flat"
				onClick={() => router.back()}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
					/>
				</svg>
			</Button>
		</div>
	);
};

export default PhotoDetail;
