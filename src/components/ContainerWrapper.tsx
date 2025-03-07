import type { ReactNode } from 'react'

interface ContainerWrapperProps {
	children: ReactNode
	className?: string
}

export default function ContainerWrapper({
	children,
	className = '',
}: ContainerWrapperProps) {
	return (
		<div className={`container max-w-6xl px-10 mx-auto ${className}`}>{children}</div>
	)
}
