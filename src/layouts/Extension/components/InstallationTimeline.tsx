import type React from 'react'
import { FaPuzzlePiece } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import type { InstallationStep } from '../../../data/extension/installationSteps'

interface InstallationTimelineProps {
	title: string
	description: string
	steps: InstallationStep[]
	infoMessage?: {
		text: string
		link?: {
			url: string
			text: string
		}
		afterLinkText?: string
		icon?: React.ReactNode
	}
}

export const InstallationTimeline: React.FC<InstallationTimelineProps> = ({
	title,
	description,
	steps,
	infoMessage,
}) => {
	return (
		<div className="mb-20">
			{/* Header */}
			<h2 className="mb-6 text-3xl font-bold text-center">{title}</h2>
			<p className="max-w-2xl mx-auto mb-12 text-center text-gray-500">{description}</p>

			{/* Desktop Timeline */}
			<div className="relative hidden md:block">
				{/* Timeline Line */}
				<div className="absolute left-0 w-full h-1 top-10 bg-gradient-to-r from-indigo-300 via-blue-500 to-purple-500"></div>

				<div className="grid grid-cols-4 gap-6">
					{steps.map((step) => (
						<div key={step.id} className="relative">
							<div className="flex flex-col items-center">
								<div
									className={`z-10 flex items-center justify-center w-20 h-20 mb-6 text-white rounded-full bg-gradient-to-br ${step.gradientFrom} ${step.gradientTo}`}
								>
									<step.icon size={step.iconSize} />
								</div>
								<h3 className="mb-2 text-lg font-bold">{step.title}</h3>
								<p className="text-center text-gray-600">{step.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Mobile Timeline - Vertical */}
			<div className="md:hidden">
				<div className="relative pr-8 mr-6 space-y-10 border-r-4 border-indigo-200 rtl:border-r-0 rtl:border-l-4 rtl:pr-0 rtl:mr-0 rtl:pl-8 rtl:ml-6">
					{steps.map((step) => (
						<div key={step.id} className="relative">
							<div
								className={`absolute right-[-38px] top-0 w-16 h-16 flex items-center justify-center bg-gradient-to-br ${step.gradientFrom} ${step.gradientTo} rounded-full rtl:right-auto rtl:left-[-38px]`}
							>
								<step.icon size={step.mobileIconSize} />
							</div>
							<div className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
								<h3 className="mb-2 text-lg font-bold">{step.title}</h3>
								<p className="text-gray-600">{step.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Additional info card */}
			{infoMessage && (
				<div className="flex items-center justify-center mt-10">
					<div className="flex items-center max-w-2xl gap-2 px-5 py-3 border border-blue-200 rounded-lg bg-blue-50">
						{infoMessage.icon || (
							<div className="flex items-center justify-center p-2 text-blue-600 bg-blue-100 rounded-full">
								<FaPuzzlePiece size={20} />
							</div>
						)}
						<p className="text-blue-700">
							{infoMessage.text}
							{infoMessage.link && (
								<Link
									to={infoMessage.link.url}
									className="mx-1 font-medium text-indigo-600 underline hover:text-indigo-800"
								>
									{infoMessage.link.text}
								</Link>
							)}
							{infoMessage.afterLinkText}
						</p>
					</div>
				</div>
			)}
		</div>
	)
}
