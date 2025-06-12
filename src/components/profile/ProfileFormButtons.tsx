import { Check, X } from 'lucide-react'

interface ProfileFormButtonsProps {
	isSubmitting: boolean
	avatarError: string | null
	onCancel: () => void
}

export default function ProfileFormButtons({
	isSubmitting,
	avatarError,
	onCancel,
}: ProfileFormButtonsProps) {
	return (
		<div className="flex justify-end gap-3 pt-2">
			<button
				type="button"
				onClick={onCancel}
				className="flex items-center px-4 py-2 text-gray-700 transition-colors bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
				disabled={isSubmitting}
			>
				<X size={16} className="ml-1" />
				انصراف
			</button>
			<button
				type="submit"
				className={`flex items-center px-4 py-2 text-white transition-colors rounded-lg ${
					avatarError
						? 'bg-gray-400 cursor-not-allowed'
						: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
				}`}
				disabled={isSubmitting || !!avatarError}
			>
				{isSubmitting ? (
					<div className="w-4 h-4 ml-2 border-2 border-white rounded-full border-t-transparent animate-spin" />
				) : (
					<Check size={16} className="ml-1" />
				)}
				ذخیره تغییرات
			</button>
		</div>
	)
}
