'use client'

import { useEffect } from 'react'

export function useDocumentTitle(title: string, suffix = '- ویجتی‌فای') {
	useEffect(() => {
		const previousTitle = document.title
		document.title = `${title} ${suffix}`

		return () => {
			document.title = previousTitle
		}
	}, [title, suffix])
}
