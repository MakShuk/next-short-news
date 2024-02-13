import type { Metadata } from 'next';

import './globals.css';
import { NextUIProviders, ThemesProviders } from './providers';



export const metadata: Metadata = {
	title: 'short.news',
	description: 'Короткие новости со всего мира',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru" className="dark" style={{ colorScheme: 'dark' }}>
			<body className={' max-w-[1024px] m-auto bg-white dark:bg-black'}>
				<ThemesProviders>
					<NextUIProviders>
						{children}
					</NextUIProviders>
				</ThemesProviders>
			</body>
		</html>
	);
}
