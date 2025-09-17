'use client'
import { AlertCircle, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDocumentTitle } from '@/hooks'
import { authService } from '@/services/authService'

export default function VerifyEmail() {
	useDocumentTitle('تأیید ایمیل')

	const searchParams = useSearchParams()
	const [isVerifying, setIsVerifying] = useState(true)
	const [isSuccess, setIsSuccess] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const token = searchParams?.get('token')
	const email = searchParams?.get('email')

	useEffect(() => {
		const verifyEmail = async () => {
			if (!token || !email) {
				setError(
					'لینک تایید ایمیل نامعتبر است. لطفاً مطمئن شوید که از لینک صحیح استفاده می‌کنید.'
				)
				setIsVerifying(false)
				return
			}

			try {
				await authService.verifyEmail(token, email)
				setIsSuccess(true)
			} catch (error: any) {
				let errorMessage = 'خطا در تایید ایمیل. لطفاً مجدداً تلاش کنید.'
				if (error.isAxiosError) {
					if (error.response.data.message === 'VERIFICATION_FAILED') {
						errorMessage =
							'تایید ایمیل ناموفق بود. لینک ممکن است منقضی شده یا قبلاً استفاده شده باشد.'
					} else {
						errorMessage = error.message
					}
				}

				setError(errorMessage)
			} finally {
				setIsVerifying(false)
			}
		}

		verifyEmail()
	}, [token, email])

	return (
		<div className="min-h-screen overflow-hidden">
			<div className="relative px-4 py-10">
				<div className="flex flex-col items-center max-w-6xl mx-auto text-center animate-fade-in">
					<h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-slide-down">
							تایید ایمیل
						</span>
					</h1>

					<p className="max-w-2xl mb-6 text-lg text-gray-600 md:text-xl animate-fade-in-up">
						با تایید حساب خود، به تمامی امکانات و ویژگی‌های ویجتی‌فای دسترسی
						پیدا می‌کنید.
					</p>
				</div>
			</div>

			<div className="py-8">
				<div className="max-w-md mx-auto animate-fade-in-up">
					{isVerifying ? (
						<div className="p-6 text-center transition bg-white border border-gray-200 shadow-lg rounded-xl">
							<div className="inline-flex items-center justify-center mx-auto mb-4 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl animate-pulse">
								<div className="border-2 border-white rounded-full w-7 h-7 border-t-transparent animate-spin"></div>
							</div>
							<h2 className="mb-2 text-2xl font-bold">
								در حال تایید ایمیل
							</h2>
							<p className="mb-5 text-gray-600">
								لطفاً صبر کنید، در حال بررسی و تایید آدرس ایمیل شما
								هستیم...
							</p>
						</div>
					) : isSuccess ? (
						<div className="p-6 text-center transition bg-white border border-gray-200 shadow-lg rounded-xl animate-slide-up">
							<div className="inline-flex items-center justify-center mx-auto mb-4 w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl animate-pulse">
								<CheckCircle className="text-white w-7 h-7" />
							</div>
							<h2 className="mb-2 text-2xl font-bold">ایمیل تایید شد!</h2>
							<p className="mb-5 text-gray-600">
								آدرس ایمیل شما با موفقیت تایید شد. اکنون می‌توانید از تمامی
								امکانات حساب کاربری خود استفاده کنید.
							</p>
							<div className="flex flex-col gap-3">
								<Link
									href="/"
									className="flex items-center justify-center w-full p-3 font-medium text-gray-700 transition bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300"
								>
									بازگشت به صفحه اصلی
								</Link>
							</div>
						</div>
					) : (
						<div className="p-6 text-center transition bg-white border border-gray-200 shadow-lg rounded-xl animate-slide-up">
							<div className="inline-flex items-center justify-center mx-auto mb-4 w-14 h-14 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl">
								<AlertCircle className="text-white w-7 h-7" />
							</div>
							<h2 className="mb-2 text-2xl font-bold">
								خطا در تایید ایمیل
							</h2>
							<p className="mb-5 font-light text-red-600">{error}</p>
							<div className="flex flex-col gap-3">
								<Link
									href="/"
									className="flex items-center justify-center w-full p-3 font-medium text-gray-700 transition bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300"
								>
									بازگشت به صفحه اصلی
								</Link>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
