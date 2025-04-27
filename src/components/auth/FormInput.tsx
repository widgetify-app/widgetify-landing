import type { LucideIcon } from 'lucide-react'
import type React from 'react'

interface FormInputProps {
	id: string
	name?: string
	label: string
	type: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	error?: string
	icon?: LucideIcon
	required?: boolean
	autoComplete?: string
}

export default function FormInput({
	id,
	name,
	label,
	type,
	value,
	onChange,
	placeholder,
	error,
	icon: Icon,
	required = false,
	autoComplete,
}: FormInputProps) {
	return (
		<div className="mb-4">
			<label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-700">
				{label}
				{required && <span className="mr-1 text-red-500">*</span>}
			</label>
			<div className="relative">
				<input
					type={type}
					id={id}
					name={name || id} // Use name if provided, otherwise fallback to id
					value={value}
					onChange={onChange}
					autoComplete={autoComplete}
					className={`w-full p-3 pr-10 text-gray-900 border ${
						error
							? 'border-red-300 focus:ring-red-500 focus:border-red-500'
							: 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
					} rounded-lg focus:outline-none focus:ring-2`}
					placeholder={placeholder}
					required={required}
				/>
				{Icon && (
					<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
						<Icon size={18} className={error ? 'text-red-400' : 'text-gray-400'} />
					</div>
				)}
			</div>
			{error && <p className="mt-2 text-sm text-red-600">{error}</p>}
		</div>
	)
}
