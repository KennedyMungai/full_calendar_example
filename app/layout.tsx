import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ReduxProvider from '@/Providers/ReduxProvider'
import NavBar from '@/components/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Full Calendar Example',
	description: 'A Simple Full Calendar App'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<ReduxProvider>
				<body className={inter.className}>
					<NavBar />
					{children}
				</body>
			</ReduxProvider>
		</html>
	)
}
