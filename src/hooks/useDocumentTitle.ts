import { useEffect } from 'react'

export function useDocumentTitle(title: string, suffix = 'ویجتی‌فای | ') {
	useEffect(() => {
		const previousTitle = document.title
		document.title = `${suffix} ${title}`

		return () => {
			document.title = previousTitle
		}
	}, [title, suffix])
}
