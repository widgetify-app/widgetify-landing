import type React from 'react'
import type { OtherFeature } from '../../../data/extension/otherFeatures'

interface OtherFeaturesProps {
	features: OtherFeature[]
	columns?: number
}

export const OtherFeatures: React.FC<OtherFeaturesProps> = ({
	features,
	columns = 3,
}) => {
	return (
		<div className={`grid grid-cols-1 gap-6 md:grid-cols-${columns}`}>
			{features.map((feature, index) => (
				<div
					key={index}
					className="overflow-hidden transition-all bg-white border border-gray-200 rounded-xl hover:border-blue-200 hover:shadow-md group"
				>
					<div className="flex items-center gap-2 p-6">
						<div className="flex-shrink-0">
							<div
								className={`flex items-center justify-center w-12 h-12 transition-colors rounded-xl ${feature.iconColor} ${feature.iconBgClass} ${feature.iconHoverBgClass}`}
							>
								<feature.icon size={22} />
							</div>
						</div>
						<div>
							<h3 className="mb-1 text-lg font-semibold">{feature.title}</h3>
							<p className="text-sm text-gray-600">{feature.description}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
