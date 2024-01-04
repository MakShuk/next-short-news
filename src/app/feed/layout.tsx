import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'short.news',
	description: 'Коротние новости со всего мира',
};

export default function RootLayout({
	children,
	modal,
	header,
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
	header: React.ReactNode;
}) {
	return (
		<>
			{modal}
			{header}
			{children}
		</>
	);
}
