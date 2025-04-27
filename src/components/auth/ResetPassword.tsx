import { AlertCircle, Check, Lock, Mail } from 'lucide-react'
import { useState } from 'react'

interface ResetPasswordProps {
	email: string
	token: string
	onResetSuccess: () => void
}

export default function ResetPassword({
	email,
	token,
	onResetSuccess,
}: ResetPasswordProps) {
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const [validationErrors, setValidationErrors] = useState<{
		password?: string
		confirmPassword?: string
	}>({})

	const validatePassword = (password: string): string | undefined => {
		if (!password) {
			return 'رمز عبور الزامی است'
		}

		const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/
		if (!passwordRegex.test(password)) {
			return 'رمز عبور باید حداقل ۸ کاراکتر و شامل حداقل یک حرف و یک عدد باشد'
		}

		return undefined
	}

	const validateConfirmPassword = (confirmPassword: string): string | undefined => {
		if (confirmPassword !== password) {
			return 'تکرار رمز عبور با رمز عبور مطابقت ندارد'
		}

		return undefined
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		const passwordError = validatePassword(password)
		const confirmPasswordError = validateConfirmPassword(confirmPassword)

		const errors = {
			password: passwordError,
			confirmPassword: confirmPasswordError,
		}

		setValidationErrors(errors)

		if (passwordError || confirmPasswordError) {
			return
		}

		setIsSubmitting(true)
		setErrorMessage('')

		try {
			const response = await fetch(
				'https://api.widgetify.ir/auth/forgot-password/verify',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						email,
						token,
						password,
					}),
				},
			)

			const data = await response.json()

			if (!response.ok) {
				if (data.formValidation?.length > 0) {
					const errors: { [key: string]: string } = {}
					for (const error of data.formValidation) {
						if (error.property === 'password') {
							errors.password =
								'رمز عبور باید حداقل ۸ کاراکتر و شامل حداقل یک حرف و یک عدد باشد'
						}
					}
					setValidationErrors(errors)
					throw new Error('لطفاً خطاهای فرم را برطرف کنید')
				}

				throw new Error('خطا در تغییر رمز عبور. لطفاً مجدداً تلاش کنید.')
			}

			onResetSuccess()
		} catch (error) {
			setErrorMessage(error instanceof Error ? error.message : 'خطا در تغییر رمز عبور')
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className="p-6 transition bg-white border border-gray-200 shadow-lg rounded-xl animate-fade-in">
			<div className="mb-4 text-center">
				<div className="flex items-center justify-center mx-auto mb-3 text-white transition-transform w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl hover:rotate-3 hover:scale-105">
					<Lock size={28} />
				</div>
				<p className="text-gray-600">لطفاً رمز عبور جدید خود را وارد کنید.</p>
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
							value={email || ''}
							readOnly
							className="w-full p-3 pr-10 text-gray-500 bg-gray-100 border border-gray-300 rounded-lg cursor-not-allowed"
						/>
						<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
							<Mail size={18} className="text-gray-400" />
						</div>
					</div>
				</div>

				<div>
					<label
						htmlFor="password"
						className="block mb-1.5 text-sm font-medium text-gray-700"
					>
						رمز عبور جدید
					</label>
					<div className="relative">
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className={`w-full p-3 pr-10 text-gray-900 border ${
								validationErrors.password
									? 'border-red-300 focus:ring-red-500 focus:border-red-500'
									: 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
							} rounded-lg focus:outline-none focus:ring-2`}
							placeholder="رمز عبور جدید"
							required
						/>
						<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
							<Lock
								size={18}
								className={validationErrors.password ? 'text-red-400' : 'text-gray-400'}
							/>
						</div>
					</div>
					{validationErrors.password && (
						<p className="mt-1 text-sm text-red-600">
							<AlertCircle className="inline w-4 h-4 mr-1" />
							{validationErrors.password}
						</p>
					)}
					<p className="mt-1 text-xs text-gray-500">
						رمز عبور باید حداقل ۸ کاراکتر و شامل حداقل یک حرف و یک عدد باشد
					</p>
				</div>

				<div>
					<label
						htmlFor="confirmPassword"
						className="block mb-1.5 text-sm font-medium text-gray-700"
					>
						تکرار رمز عبور جدید
					</label>
					<div className="relative">
						<input
							type="password"
							id="confirmPassword"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							className={`w-full p-3 pr-10 text-gray-900 border ${
								validationErrors.confirmPassword
									? 'border-red-300 focus:ring-red-500 focus:border-red-500'
									: 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
							} rounded-lg focus:outline-none focus:ring-2`}
							placeholder="تکرار رمز عبور جدید"
							required
						/>
						<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
							<Lock
								size={18}
								className={
									validationErrors.confirmPassword ? 'text-red-400' : 'text-gray-400'
								}
							/>
						</div>
					</div>
					{validationErrors.confirmPassword && (
						<p className="mt-1 text-sm text-red-600">
							<AlertCircle className="inline w-4 h-4 mr-1" />
							{validationErrors.confirmPassword}
						</p>
					)}
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
							<Check className="ml-2" size={18} />
						)}
						ذخیره رمز عبور جدید
					</button>
				</div>
			</form>
		</div>
	)
}
