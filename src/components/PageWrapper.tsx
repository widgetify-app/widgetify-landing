import type { ReactNode } from 'react'
import ContainerWrapper from './ContainerWrapper'

interface PageWrapperProps {
	children: ReactNode
	fullWidth?: boolean
	className?: string
}

export default function PageWrapper({
	children,
	fullWidth = false,
	className = '',
}: PageWrapperProps) {
	return fullWidth ? (
		<div className={className}>{children}</div>
	) : (
		<ContainerWrapper
			className={`bg-gradient-to-br from-blue-50 via-white to-indigo-50 ${className}`}
		>
			{children}
		</ContainerWrapper>
	)
}
