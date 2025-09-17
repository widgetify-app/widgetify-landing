'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import RequestPasswordReset from '../components/auth/RequestPasswordReset'
import ResetPassword from '../components/auth/ResetPassword'
import { useDocumentTitle } from '../hooks'

export default function ForgotPassword() {
	useDocumentTitle('بازیابی رمز عبور')

	const searchParams = useSearchParams()

	const token = searchParams?.get('token')
	const emailFromUrl = searchParams?.get('email')

	const [isSubmitted, setIsSubmitted] = useState(false)
	const [email, setEmail] = useState(emailFromUrl || '')

	const [originalToken, setOriginalToken] = useState(token || '')

	const isResetMode = Boolean(originalToken && emailFromUrl)

	useEffect(() => {
		if (token && emailFromUrl) {
			setOriginalToken(token)
		}
	}, [token, emailFromUrl])

	const handleRequestSuccess = (submittedEmail: string) => {
		setIsSubmitted(true)
		setEmail(submittedEmail)
	}

	const handleResetSuccess = () => {
		setIsSubmitted(true)
	}

	return (
		<div className="min-h-screen overflow-hidden">
			<div className="relative px-4 py-10">
				<div className="flex flex-col items-center max-w-6xl mx-auto text-center animate-fade-in">
					<h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-slide-down">
							{isResetMode ? 'تغییر رمز عبور' : 'بازیابی رمز عبور'}
						</span>
					</h1>

					<p className="max-w-2xl mb-6 text-lg text-gray-600 md:text-xl animate-fade-in-up">
						{isResetMode
							? 'لطفاً رمز عبور جدید خود را وارد کنید'
							: 'ایمیل خود را وارد کنید و ما لینک بازیابی را برایتان ارسال خواهیم کرد'}
					</p>
				</div>
			</div>

			<div className="py-8">
				<div className="max-w-md mx-auto animate-fade-in-up">
					{isResetMode ? (
						!isSubmitted ? (
							<ResetPassword
								email={emailFromUrl || ''}
								token={originalToken}
								onResetSuccess={handleResetSuccess}
							/>
						) : (
							<div className="p-6 text-center transition bg-white border border-gray-200 shadow-lg rounded-xl animate-slide-up">
								<div className="inline-flex items-center justify-center w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl animate-pulse">
									<svg
										className="w-7 h-7 text-white"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<h2 className="mb-2 text-2xl font-bold">
									رمز عبور با موفقیت تغییر کرد
								</h2>
								<p className="mb-5 text-gray-600">
									اکنون می‌توانید با رمز عبور جدید خود وارد حساب کاربری
									شوید.
								</p>
								<div className="flex flex-col gap-3">
									<a
										href="https://app.widgetify.ir"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center w-full p-3 font-medium text-white transition rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:from-blue-700 hover:to-purple-700 hover:scale-[1.03] active:scale-[0.97]"
									>
										رفتن به صفحه اصلی اپلیکیشن
									</a>

									<Link
										href="/"
										className="flex items-center justify-center w-full p-3 font-medium text-gray-700 transition bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300"
									>
										بازگشت به صفحه اصلی
									</Link>
								</div>
							</div>
						)
					) : !isSubmitted ? (
						<RequestPasswordReset
							onSubmitSuccess={handleRequestSuccess}
							emailProp={email}
						/>
					) : (
						<div className="p-6 text-center transition bg-white border border-gray-200 shadow-lg rounded-xl animate-slide-up">
							<div className="inline-flex items-center justify-center w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl animate-pulse">
								<svg
									className="w-7 h-7 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<h2 className="mb-2 text-2xl font-bold">ایمیل ارسال شد</h2>
							<p className="mb-5 text-gray-600">
								درخواست بازیابی رمز عبور با موفقیت ثبت شد. لطفاً ایمیل خود
								({email}) را بررسی کنید و دستورالعمل‌های بازیابی رمز عبور
								را دنبال کنید.
							</p>
							<div className="flex flex-col gap-3">
								<button
									onClick={() => {
										setEmail('')
										setIsSubmitted(false)
									}}
									className="w-full p-3 font-medium text-white transition rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:from-blue-700 hover:to-purple-700 hover:scale-[1.03] active:scale-[0.97]"
								>
									تلاش مجدد با ایمیل دیگر
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
