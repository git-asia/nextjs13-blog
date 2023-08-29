import Navigation from '@/components/navigation/navigation';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/navigation/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Next 13 blog',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navigation/>
				{children}
				<Footer />
			</body>
		</html>
	);
}
