import { ChevronDown, Download, Globe, Laptop, Puzzle } from 'lucide-react'
import { Link } from 'react-router-dom'
import ContributorsSection from '../components/ContributorsSection'
import FeaturesSection from '../components/FeaturesSection'
import { useDocumentTitle } from '../hooks'

export default function Home() {
	useDocumentTitle('صفحه اصلی')

	return (
		<div className="min-h-screen overflow-hidden">
			{/* Hero Section */}
			<div className="relative px-4 py-20">
				<div className="flex flex-col items-center max-w-6xl mx-auto text-center animate-fade-in">
					{' '}
					<h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl animate-slide-down">
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
							ویجتی‌فای
						</span>
						<span className="block mt-2 text-3xl font-medium text-gray-700 md:text-4xl">
							ویجت‌های کاربردی برای همه جا
						</span>
					</h1>
					<p className="max-w-2xl mb-10 text-lg font-light text-gray-600 md:text-xl animate-fade-in-up">
						با ویجتی‌فای، همه اطلاعات مهمت رو یکجا ببین! ابزارهای کاربردی و مفید - همه تو
						یه جا و خیلی زیبا
					</p>{' '}
					{/* Download Buttons */}
					<div className="flex flex-col gap-4 mb-12 sm:flex-row animate-fade-in-up">
						<div className="transition duration-200 hover:scale-[1.03] active:scale-[0.97]">
							<Link
								to="/extension"
								className="flex items-center justify-center px-6 py-3 font-semibold text-white transition rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-lg hover:from-blue-700 hover:to-blue-800"
							>
								<Puzzle className="ml-2" size={20} />
								<div className="text-right">
									<span className="block text-base">اکستنشن مرورگر</span>
									<span className="text-sm opacity-90">پیشنهاد ویژه</span>
								</div>
							</Link>
						</div>

						<a
							href="https://github.com/widgetify-app/widgetify-desktop/releases"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center px-6 py-3 font-semibold text-gray-700 transition bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-50 hover:border-blue-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-lg"
						>
							<Laptop className="ml-2" size={20} />
							<div className="text-right">
								<span className="block text-base">نسخه دسکتاپ</span>
								<span className="text-sm text-gray-500">ویندوز، مک، لینوکس</span>
							</div>
						</a>

						<a
							href="https://app.widgetify.ir"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center px-6 py-3 font-semibold text-gray-700 transition bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-50 hover:border-blue-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-lg"
						>
							<Globe className="ml-2" size={20} />
							<div className="text-right">
								<span className="block text-base">نسخه وب</span>
								<span className="text-sm text-gray-500">همه جا کار می‌کنه</span>
							</div>
						</a>
					</div>
					{/* Preview Image */}
					<div className="relative w-full max-w-4xl mx-auto animate-fade-in-delayed animate-scale-in">
						<div className="overflow-hidden shadow-xl rounded-2xl aspect-video animate-slide-up-delayed">
							<img
								src="/banner.png"
								alt="ویجتی‌فای"
								className="object-cover w-full h-full"
								onError={(e) => {
									e.currentTarget.src = 'https://placehold.co/1200x675?text=widgetify.ir'
								}}
							/>
						</div>{' '}
						<div className="absolute px-6 py-3 text-sm font-medium text-white transform -translate-x-1/2 rounded-full bottom-4 left-1/2 bg-black/70 backdrop-blur-sm animate-fade-in-long-delayed">
							همه ابزارهای کاربردی در یک جا
						</div>
					</div>
					{/* Scroll indicator */}
					<div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-fade-in-long-delayed">
						<div className="animate-bounce">
							<ChevronDown className="text-blue-500" size={32} />
						</div>
					</div>
				</div>
			</div>

			{/* Platforms Section */}
			<div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
				<div className="px-4 mx-auto max-w-7xl">
					<h2 className="mb-4 text-3xl font-bold text-center text-gray-900 animate-on-scroll">
						هر جا باشی، ویجتی‌فای همراهته
					</h2>
					<p className="max-w-2xl mx-auto mb-12 text-center text-gray-600 animate-on-scroll">
						دسکتاپ، موبایل، مرورگر - هر کدوم رو که دوست داری انتخاب کن
					</p>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-3 animate-on-scroll-delayed">
						<div className="relative p-6 overflow-hidden transition bg-white border-2 border-blue-200 shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-2 group">
							<div className="absolute top-0 right-0 px-3 py-1 text-sm font-bold text-white bg-blue-600 rounded-bl-xl">
								پیشنهاد ما
							</div>
							<div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white transition-transform bg-blue-600 rounded-2xl group-hover:rotate-6 group-hover:scale-110">
								<Puzzle size={32} />
							</div>
							<h3 className="mb-3 text-xl font-bold text-center text-gray-900">
								اکستنشن مرورگر
							</h3>
							<p className="mb-4 leading-relaxed text-center text-gray-600">
								همیشه که تب جدید باز می‌کنی، ویجت‌های کاربردی منتظرتن! هیچ برنامه‌ای نمی‌خواد،
								فقط نصب کن و لذت ببر
							</p>
							<div className="text-center">
								<Link
									to="/extension"
									className="inline-flex items-center justify-center w-full px-4 py-2 font-bold text-white transition-all duration-300 bg-blue-600 rounded-lg hover:shadow-lg hover:bg-blue-700"
								>
									بریم نصب کنیم <Download size={16} className="mr-2" />
								</Link>
							</div>
						</div>

						<div className="p-6 transition bg-white border border-gray-200 shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-2 group">
							<div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white transition-transform bg-gray-600 rounded-2xl group-hover:rotate-6 group-hover:scale-110">
								<Laptop size={32} />
							</div>
							<h3 className="mb-3 text-xl font-bold text-center text-gray-900">
								نسخه دسکتاپ
							</h3>
							<p className="mb-4 leading-relaxed text-center text-gray-600">
								ویندوز، مک، لینوکس - هر کدوم که داری! سریع، قدرتمند و با رابط کاربری
								فوق‌العاده
							</p>
							<div className="text-center">
								<a
									href="https://github.com/widgetify-app/widgetify-desktop/releases"
									className="inline-flex items-center justify-center w-full px-4 py-2 font-bold text-gray-700 transition-all duration-300 bg-gray-100 rounded-lg hover:bg-gray-200 hover:scale-105"
								>
									دانلود کن <Download size={16} className="mr-2" />
								</a>
							</div>
						</div>

						<div className="p-6 transition bg-white border border-gray-200 shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-2 group">
							<div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white transition-transform bg-gray-600 rounded-2xl group-hover:rotate-6 group-hover:scale-110">
								<Globe size={32} />
							</div>
							<h3 className="mb-3 text-xl font-bold text-center text-gray-900">
								نسخه وب
							</h3>
							<p className="mb-4 leading-relaxed text-center text-gray-600">
								هر جا که اینترنت داری، ویجتی‌فای هم هست! حتی می‌تونی مثل اپ نصبش کنی
							</p>
							<div className="text-center">
								<a
									href="https://app.widgetify.ir"
									className="inline-flex items-center justify-center w-full px-4 py-2 font-bold text-gray-700 transition-all duration-300 bg-gray-100 rounded-lg hover:bg-gray-200 hover:scale-105"
								>
									بریم امتحان کنیم <Globe size={16} className="mr-2" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<FeaturesSection />

			<ContributorsSection />
		</div>
	)
}
