import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

interface RequestPasswordResetProps {
	onSubmitSuccess: (email: string) => void
	emailProp?: string
}

export default function RequestPasswordReset({
	onSubmitSuccess,
	emailProp = '',
}: RequestPasswordResetProps) {
	const [email, setEmail] = useState(emailProp)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		setErrorMessage('')

		try {
			const response = await fetch('https://api.widgetify.ir/auth/forgot-password', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email }),
			})

			const data = await response.json()

			if (!response.ok) {
				if (data.message === 'FORGOT_PASSWORD_REQUEST_LIMIT') {
					throw new Error(
						'تعداد درخواست‌های بازیابی رمز عبور به حد مجاز رسیده است. لطفاً بعداً تلاش کنید.',
					)
				}

				throw new Error(data.message || 'خطا در ارسال درخواست بازیابی رمز عبور')
			}

			onSubmitSuccess(email)
		} catch (error) {
			setErrorMessage(
				error instanceof Error ? error.message : 'خطا در ارسال ایمیل بازیابی رمز عبور',
			)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className="p-6 transition bg-white border border-gray-200 shadow-lg rounded-xl animate-fade-in">
			<div className="mb-4 text-center">
				<div className="flex items-center justify-center mx-auto mb-3 text-white transition-transform w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl hover:rotate-3 hover:scale-105">
					<Mail size={28} />
				</div>
				<p className="text-gray-600">
					ایمیل خود را وارد کنید. ما لینک بازیابی رمز عبور را برای شما ارسال خواهیم کرد.
				</p>
			</div>

			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label
						htmlFor="email"
						className="block mb-1.5 text-sm font-medium text-gray-700"
					>
						آدرس ایمیل
					</label>
					<div className="relative">
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full p-3 pr-10 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							placeholder="example@email.com"
							required
						/>
						<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
							<Mail size={18} className="text-gray-400" />
						</div>
					</div>
				</div>

				{errorMessage && (
					<div className="p-2.5 text-sm text-red-700 bg-red-100 rounded-lg">
						{errorMessage}
					</div>
				)}

				<div className="flex flex-col gap-3 mt-2">
					<button
						type="submit"
						disabled={isSubmitting}
						className={`w-full p-3 font-medium text-white transition rounded-lg flex items-center justify-center hover:scale-[1.03] active:scale-[0.97] ${
							isSubmitting
								? 'bg-gray-400 cursor-not-allowed'
								: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:from-blue-700 hover:to-purple-700'
						}`}
					>
						{isSubmitting ? (
							<div className="w-5 h-5 ml-2 border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin" />
						) : (
							<Send className="ml-2" size={18} />
						)}
						ارسال لینک بازیابی
					</button>
				</div>
			</form>
		</div>
	)
}
