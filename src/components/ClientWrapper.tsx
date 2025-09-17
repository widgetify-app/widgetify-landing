'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { AuthProvider } from '../contexts/AuthContext'
import FooterSection from './FooterSection'
import Navbar from './Navbar'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(() => new QueryClient())

	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Navbar />
				{children}
				<FooterSection />
			</AuthProvider>
		</QueryClientProvider>
	)
}
