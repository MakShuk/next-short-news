import React from 'react';
import { Button } from '@nextui-org/react';

interface InfiniteLoadingPageProps {
	size: number;
	setSize: React.Dispatch<React.SetStateAction<number>>;
}

export default function InfiniteLoading({ size, setSize }: InfiniteLoadingPageProps) {
	return (
		<div className="p-2">
			<Button
				fullWidth
				size="lg"
				onClick={() => setSize(size + 1)}
				className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
			>
				Загрузить еще
			</Button>
		</div>
	);
}
