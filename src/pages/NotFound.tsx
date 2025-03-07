import { ArrowLeft, Home, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import ContainerWrapper from '../components/ContainerWrapper'

export default function NotFound() {
	return (
		<>
			{/* Gradient background */}
			<div className="relative py-16 text-white md:py-20 bg-gradient-to-br from-blue-600 to-purple-700">
				<div className="absolute inset-0 bg-[url('/images/dots-pattern.svg')] bg-repeat opacity-10"></div>
				<div className="flex flex-col items-center text-center">
					<div className="flex items-center justify-center w-20 h-20 mb-6 bg-white bg-opacity-20 rounded-full">
						<Search size={40} className="text-white" />
					</div>
					<h1 className="mb-2 text-5xl font-bold md:text-7xl">404</h1>
					<p className="max-w-2xl mx-auto text-xl text-blue-100 md:text-2xl">
						صفحه مورد نظر یافت نشد!
					</p>
				</div>
			</div>

			<ContainerWrapper>
				<div className="py-16 text-center">
					<div className="max-w-2xl mx-auto mb-12">
						<h2 className="mb-6 text-2xl font-bold">
							متاسفیم، صفحه‌ای که به دنبال آن بودید وجود ندارد
						</h2>
						<p className="mb-8 text-gray-600">
							ممکن است آدرس اشتباه وارد کرده باشید یا این صفحه منتقل یا حذف شده باشد.
							می‌توانید به صفحه اصلی بازگردید یا از لینک‌های زیر استفاده کنید.
						</p>

						<div className="flex flex-wrap justify-center gap-4">
							<Link
								to="/"
								className="inline-flex items-center px-6 py-3 font-medium text-white transition rounded-lg bg-gradient-to-br from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800"
							>
								<Home className="ml-2" size={20} />
								صفحه اصلی
							</Link>

							<button
								onClick={() => window.history.back()}
								className="inline-flex items-center px-6 py-3 font-medium transition bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
							>
								<ArrowLeft className="ml-2" size={20} />
								بازگشت به صفحه قبل
							</button>
						</div>
					</div>

					{/* Quick links */}
					<div className="max-w-2xl mx-auto">
						<h3 className="mb-4 text-lg font-medium text-gray-600">
							یا شاید به دنبال یکی از این صفحات هستید:
						</h3>
						<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
							<Link
								to="/extension"
								className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-200 hover:shadow-sm"
							>
								<h4 className="font-medium">اکستنشن مرورگر</h4>
								<p className="text-sm text-gray-500">افزونه ویجتی‌فای برای مرورگرها</p>
							</Link>

							<Link
								to="/donate"
								className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-200 hover:shadow-sm"
							>
								<h4 className="font-medium">حمایت مالی</h4>
								<p className="text-sm text-gray-500">کمک به توسعه ویجتی‌فای</p>
							</Link>

							<a
								href="https://github.com/widgetify-app"
								target="_blank"
								rel="noopener noreferrer"
								className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-200 hover:shadow-sm"
							>
								<h4 className="font-medium">مخزن گیت‌هاب</h4>
								<p className="text-sm text-gray-500">مشارکت در کد پروژه</p>
							</a>
						</div>
					</div>
				</div>
			</ContainerWrapper>
		</>
	)
}
