import { Suspense } from 'react'
import PageWrapper from '../../src/components/PageWrapper'
import ForgotPassword from '../../src/components/pages/ForgotPassword'

function LoadingSpinner() {
	return (
		<div className="min-h-screen overflow-hidden">
			<div className="relative px-4 py-10">
				<div className="flex flex-col items-center max-w-6xl mx-auto text-center animate-fade-in">
					<h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-slide-down">
							بازیابی رمز عبور
						</span>
					</h1>

					<p className="max-w-2xl mb-6 text-lg text-gray-600 md:text-xl animate-fade-in-up">
						ایمیل خود را وارد کنید و ما لینک بازیابی را برایتان ارسال خواهیم
						کرد
					</p>
				</div>
			</div>

			<div className="py-8">
				<div className="max-w-md mx-auto animate-fade-in-up">
					<div className="p-6 text-center transition bg-white border border-gray-200 shadow-lg rounded-xl">
						<div className="inline-flex items-center justify-center mx-auto mb-4 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl animate-pulse">
							<div className="border-2 border-white rounded-full w-7 h-7 border-t-transparent animate-spin"></div>
						</div>
						<h2 className="mb-2 text-2xl font-bold">در حال بارگذاری</h2>
						<p className="mb-5 text-gray-600">لطفاً صبر کنید...</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default function ForgotPasswordPage() {
	return (
		<PageWrapper>
			<Suspense fallback={<LoadingSpinner />}>
				<ForgotPassword />
			</Suspense>
		</PageWrapper>
	)
}
