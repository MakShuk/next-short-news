import React from 'react';
import { Pagination } from '@nextui-org/react';

interface PaginationMainPageProps {
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function PaginationMainPage({
	currentPage,
	setCurrentPage,
}: PaginationMainPageProps) {
	return (
		<div className="flex justify-center">
			<Pagination showControls total={30} page={currentPage} onChange={setCurrentPage} />
		</div>
	);
}
