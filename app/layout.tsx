'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import '../src/styles/global.css'
import FooterSection from '../src/components/FooterSection'
import Navbar from '../src/components/Navbar'
import { AuthProvider } from '../src/contexts/AuthContext'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(() => new QueryClient())

	return (
		<html lang="en">
			<body>
				<QueryClientProvider client={queryClient}>
					<AuthProvider>
						<Navbar />
						{children}
						<FooterSection />
					</AuthProvider>
				</QueryClientProvider>
			</body>
		</html>
	)
}
