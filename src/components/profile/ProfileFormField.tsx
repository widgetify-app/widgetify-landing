import { AlertCircle } from 'lucide-react'

interface ProfileFormFieldProps {
	id: string
	name: string
	label: string
	type?: 'text' | 'select'
	value: string
	onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
	placeholder?: string
	maxLength?: number
	minLength?: number
	error?: string
	options?: Array<{ value: string; label: string }>
	className?: string
}

export default function ProfileFormField({
	id,
	name,
	label,
	type = 'text',
	value,
	onChange,
	placeholder,
	maxLength,
	minLength,
	error,
	options,
	className = '',
}: ProfileFormFieldProps) {
	const baseInputClasses = `w-full p-3 border rounded-lg focus:outline-0 focus:ring-2 ${
		error
			? 'border-red-300 focus:ring-red-500 focus:border-red-500'
			: 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
	}`

	return (
		<div className={`space-y-2 ${className}`}>
			<label htmlFor={id} className="block text-sm font-medium text-gray-700">
				{label}
			</label>
			{type === 'select' ? (
				<select
					id={id}
					name={name}
					value={value}
					onChange={onChange}
					className={baseInputClasses}
				>
					{options?.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			) : (
				<input
					type={type}
					id={id}
					name={name}
					value={value}
					onChange={onChange}
					maxLength={maxLength}
					minLength={minLength}
					className={baseInputClasses}
					placeholder={placeholder}
				/>
			)}
			{error && (
				<div className="flex items-start mt-1 text-sm text-red-600">
					<AlertCircle className="w-4 h-4 mt-0.5 ml-1 flex-shrink-0" />
					<span>{error}</span>
				</div>
			)}
		</div>
	)
}
