import { AlertCircle } from 'lucide-react'
import DateObject from 'react-date-object'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import DatePicker from 'react-multi-date-picker'

interface ProfileDatePickerProps {
	id: string
	label: string
	value: string
	onChange: (date: any) => void
	error?: string
	placeholder?: string
	className?: string
}

export default function ProfileDatePicker({
	id,
	label,
	value,
	onChange,
	error,
	placeholder = 'تاریخ تولد خود را انتخاب کنید',
	className = '',
}: ProfileDatePickerProps) {
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
			<DatePicker
				value={value}
				onChange={onChange}
				calendar={persian}
				locale={persian_fa}
				calendarPosition="bottom-right"
				placeholder={placeholder}
				maxDate={new DateObject({ calendar: persian, locale: persian_fa })}
				inputClass={baseInputClasses}
				containerClassName="w-full"
			/>
			{error && (
				<div className="flex items-start mt-1 text-sm text-red-600">
					<AlertCircle className="w-4 h-4 mt-0.5 ml-1 flex-shrink-0" />
					<span>{error}</span>
				</div>
			)}
		</div>
	)
}
