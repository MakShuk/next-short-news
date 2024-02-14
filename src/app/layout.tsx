import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { NextUIProviders, ThemesProviders } from './providers';

const manrope = Manrope({ subsets: ['cyrillic'] });

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
				<body className={manrope.className + ' max-w-[1024px] m-auto bg-white dark:bg-black'}>
				<ThemesProviders>
					<NextUIProviders>
						{children}
					</NextUIProviders>
				</ThemesProviders>
			</body>
		</html>
	);
}
