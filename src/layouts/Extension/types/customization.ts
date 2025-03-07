export interface CustomizationOption {
	color: string
	label: string
}

export interface CustomizationFeatureProps {
	title: string
	description: string
	options: CustomizationOption[]
	showPreview?: boolean
}
