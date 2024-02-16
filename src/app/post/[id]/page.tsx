'use client';
import ProgressIndicators from '@/app/components/progress/progress-indicators';
import { usePost } from '@/lib/get-news';
import { FC } from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import ErrorLoadingPost from '@/app/components/errors/error-load';

export interface PostDetailProps {
	params: {
		id: string;
	};
}

const PhotoDetail: FC<PostDetailProps> = ({ params }) => {
	const currentPostID = Number(params.id);
	const { post, isLoading, isError } = usePost(currentPostID);
	const router = useRouter();

	if (isLoading) return <ProgressIndicators />;
	if (isError) return <ErrorLoadingPost />;

	const { content, title, imagePath } = post;
	const fileName = imagePath.split('/').pop() || 'default.jpg';
	const imageLoader = () => {
		return `http://192.168.0.8:3001/file/img?path=${imagePath}`;
	};

	return (
		<div className="max-w-[524px] m-auto grid md:grid-cols-1 place-items-center gap-0 bg-white dark:bg-black text-black dark:text-neutral-300">
			<div className="relative h-40 w-full">
				<Image
					src={fileName}
					loader={imageLoader}
					alt={title}
					quality={50}
					placeholder="blur" // "empty" | "blur" | "data:image/..."
					fill={true}
					className="m-0 rounded-b"
					style={{
						objectFit: 'cover',
					}}
				/>
			</div>

			<h2 className="text-center text-lg px-2 font-semibold">{title}</h2>
			<ul className="px-4">
				{content.map((el, i) => {
					return (
						<li key={i} className="mb-0.5">
							{el}
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
