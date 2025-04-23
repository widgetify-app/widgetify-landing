import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import ContainerWrapper from '../components/ContainerWrapper'
import RequestPasswordReset from '../components/auth/RequestPasswordReset'
import ResetPassword from '../components/auth/ResetPassword'

export default function ForgotPassword() {
	const [searchParams, setSearchParams] = useSearchParams()

	const token = searchParams.get('token')
	const emailFromUrl = searchParams.get('email')

	const [isSubmitted, setIsSubmitted] = useState(false)
	const [email, setEmail] = useState(emailFromUrl || '')

	const [originalToken, setOriginalToken] = useState(token || '')

	const isResetMode = Boolean(originalToken && emailFromUrl)

	useEffect(() => {
		if (token && emailFromUrl) {
			setOriginalToken(token)
			const newSearchParams = new URLSearchParams()
			newSearchParams.set('email', emailFromUrl)
			setSearchParams(newSearchParams)
		}
	}, [token, emailFromUrl, setSearchParams])

	// Animation variants
	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
	}

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	}

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 100,
				duration: 0.5,
			},
		},
	}

	const handleRequestSuccess = (submittedEmail: string) => {
		setIsSubmitted(true)
		setEmail(submittedEmail)
	}

	const handleResetSuccess = () => {
		setIsSubmitted(true)
	}

	return (
		<div className="min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
			<div className="relative px-4 py-20">
				<motion.div
					className="flex flex-col items-center max-w-6xl mx-auto text-center"
					initial="hidden"
					animate="visible"
					variants={staggerContainer}
				>
					<motion.h1
						className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl"
						variants={fadeIn}
					>
						<motion.span
							className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
							variants={fadeIn}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7 }}
						>
							{isResetMode ? 'تغییر رمز عبور' : 'بازیابی رمز عبور'}
						</motion.span>
					</motion.h1>

					<motion.p
						className="max-w-2xl mb-10 text-lg text-gray-600 md:text-xl"
						variants={fadeIn}
					>
						{isResetMode
							? 'لطفاً رمز عبور جدید خود را وارد کنید'
							: 'ایمیل خود را وارد کنید و ما لینک بازیابی را برایتان ارسال خواهیم کرد'}
					</motion.p>
				</motion.div>
			</div>

			<ContainerWrapper>
				<div className="py-16">
					<motion.div
						className="max-w-md mx-auto"
						initial="hidden"
						animate="visible"
						variants={staggerContainer}
					>
						{isResetMode ? (
							!isSubmitted ? (
								<ResetPassword
									email={emailFromUrl || ''}
									token={originalToken}
									onResetSuccess={handleResetSuccess}
								/>
							) : (
								<motion.div
									className="p-8 text-center transition bg-white border border-gray-200 shadow-lg rounded-xl"
									variants={cardVariants}
									initial="hidden"
									animate="visible"
								>
									<motion.div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl">
										<svg
											className="w-8 h-8 text-white"
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
									</motion.div>
									<h2 className="mb-2 text-2xl font-bold">
										رمز عبور با موفقیت تغییر کرد
									</h2>
									<p className="mb-6 text-gray-600">
										اکنون می‌توانید با رمز عبور جدید خود وارد حساب کاربری شوید.
									</p>
									<div className="flex flex-col gap-3">
										<motion.a
											href="https://app.widgetify.ir"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center justify-center w-full p-3 font-medium text-white transition rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:from-blue-700 hover:to-purple-700"
											whileHover={{ scale: 1.03 }}
											whileTap={{ scale: 0.97 }}
										>
											رفتن به صفحه اصلی اپلیکیشن
										</motion.a>

										<Link
											to="/"
											className="flex items-center justify-center w-full p-3 font-medium text-gray-700 transition bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300"
										>
											بازگشت به صفحه اصلی
										</Link>
									</div>
								</motion.div>
							)
						) : !isSubmitted ? (
							<RequestPasswordReset
								onSubmitSuccess={handleRequestSuccess}
								emailProp={email}
							/>
						) : (
							<motion.div
								className="p-8 text-center transition bg-white border border-gray-200 shadow-lg rounded-xl"
								variants={cardVariants}
								initial="hidden"
								animate="visible"
							>
								<motion.div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl">
									<svg
										className="w-8 h-8 text-white"
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
								</motion.div>
								<h2 className="mb-2 text-2xl font-bold">ایمیل ارسال شد</h2>
								<p className="mb-6 text-gray-600">
									درخواست بازیابی رمز عبور با موفقیت ثبت شد. لطفاً ایمیل خود ({email}) را
									بررسی کنید و دستورالعمل‌های بازیابی رمز عبور را دنبال کنید.
								</p>
								<div className="flex flex-col gap-3">
									<motion.button
										onClick={() => {
											setEmail('')
											setIsSubmitted(false)
										}}
										className="w-full p-3 font-medium text-white transition rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:from-blue-700 hover:to-purple-700"
										whileHover={{ scale: 1.03 }}
										whileTap={{ scale: 0.97 }}
									>
										تلاش مجدد با ایمیل دیگر
									</motion.button>
								</div>
							</motion.div>
						)}
					</motion.div>
				</div>
			</ContainerWrapper>
		</div>
	)
}
