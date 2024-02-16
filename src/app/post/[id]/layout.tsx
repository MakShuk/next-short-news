import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'short.news',
	description: 'Короткие новости со всего мира',
};

export default function PhotoLayout(data: { children: React.ReactNode }) {
	return data.children;
}
