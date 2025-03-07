import type React from 'react'
import { FaPlus } from 'react-icons/fa'
import type { CustomizationFeatureProps } from '../types/customization'

export const CustomizationFeature: React.FC<CustomizationFeatureProps> = ({
	title,
	description,
	options,
	showPreview = true,
}) => {
	return (
		<div className="p-6 mt-10 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl">
			<div className="flex flex-col items-center md:flex-row">
				<div className="w-full mb-6 md:w-1/2 md:mb-0">
					<h3 className="mb-4 text-2xl font-bold">{title}</h3>
					<p className="mb-4 text-gray-700">{description}</p>
					<div className="flex flex-wrap gap-3">
						{options.map((option, index) => (
							<div
								key={index}
								className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg"
							>
								<div className={`w-3 h-3 rounded-full ${option.color}`}></div>
								<span className="text-sm">{option.label}</span>
							</div>
						))}
					</div>
				</div>

				{showPreview && (
					<div className="w-full md:w-1/2 md:pl-8">
						<div className="p-4 bg-white shadow-sm rounded-xl">
							<div className="flex items-center justify-between mb-4">
								<div className="flex">
									<div className="w-3 h-3 mr-1 bg-red-400 rounded-full"></div>
									<div className="w-3 h-3 mr-1 bg-yellow-400 rounded-full"></div>
									<div className="w-3 h-3 bg-green-400 rounded-full"></div>
								</div>
								<div className="flex items-center px-2 py-1 text-xs bg-gray-100 rounded">
									<FaPlus size={8} className="mr-1" />
									تب جدید
								</div>
							</div>
							<div className="grid grid-cols-3 gap-3">
								<div className="flex items-center justify-center h-24 col-span-2 border-2 border-blue-200 border-dashed rounded-lg bg-blue-50">
									<div className="text-sm text-blue-400">ویجت بزرگ</div>
								</div>
								<div className="flex items-center justify-center h-24 border-2 border-indigo-200 border-dashed rounded-lg bg-indigo-50">
									<div className="text-sm text-indigo-400">ویجت</div>
								</div>
								<div className="flex items-center justify-center h-24 border-2 border-pink-200 border-dashed rounded-lg bg-pink-50">
									<div className="text-sm text-pink-400">ویجت</div>
								</div>
								<div className="flex items-center justify-center h-24 col-span-2 border-2 border-dashed rounded-lg bg-amber-50 border-amber-200">
									<div className="text-sm text-amber-400">ویجت متوسط</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
