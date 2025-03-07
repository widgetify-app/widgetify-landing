import type React from 'react'
import { useState } from 'react'
import { FaDollarSign } from 'react-icons/fa'
import type { FeatureTab } from '../../../data/extension/featuresTabs'

interface FeaturesTabProps {
	features: FeatureTab[]
	defaultActiveTab?: string
}

export const FeaturesTab: React.FC<FeaturesTabProps> = ({
	features,
	defaultActiveTab,
}) => {
	const [activeTabId, setActiveTabId] = useState(defaultActiveTab || features[0]?.id)

	const activeFeature =
		features.find((feature) => feature.id === activeTabId) || features[0]

	return (
		<div className="overflow-hidden bg-white border shadow-sm rounded-2xl mb-14">
			<div className="grid grid-cols-1 lg:grid-cols-2">
				{/* Left Side - Feature Navigation */}
				<div className="p-2 bg-gray-50 lg:p-6">
					<div className="space-y-2">
						{features.map((feature) => (
							<div
								key={feature.id}
								className={`flex items-center gap-2 p-4 transition-colors rounded-lg cursor-pointer ${
									activeTabId === feature.id
										? 'bg-white shadow-sm'
										: 'hover:bg-white hover:shadow-sm'
								}`}
								onClick={() => setActiveTabId(feature.id)}
							>
								<div
									className={`flex items-center justify-center w-12 h-12 mr-4 text-white rounded-lg ${feature.iconBgClass}`}
								>
									<feature.icon size={24} />
								</div>
								<div>
									<h3 className="text-lg font-semibold">{feature.title}</h3>
									<p className="text-sm text-gray-500">{feature.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Right Side - Feature Detail */}
				<div className="p-6 bg-white">
					<h3 className="mb-4 text-2xl font-bold">{activeFeature.detailTitle}</h3>

					<div className="mb-6">
						<p className="mb-4 text-gray-600">{activeFeature.detailDescription}</p>

						<div className="flex flex-wrap gap-3">
							{activeFeature.tags.map((tag, index) => (
								<span
									key={index}
									className="px-3 py-1 text-sm font-medium text-blue-700 rounded-full bg-blue-50"
								>
									{tag}
								</span>
							))}
						</div>
					</div>

					{activeFeature.previewComponent}
				</div>
			</div>
		</div>
	)
}
