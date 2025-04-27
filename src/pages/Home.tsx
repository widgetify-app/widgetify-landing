import { ChevronDown, Download, Globe, Laptop, Puzzle } from 'lucide-react'
import { Link } from 'react-router-dom'
import ContributorsSection from '../components/ContributorsSection'
import FeaturesSection from '../components/FeaturesSection'

export default function Home() {
	return (
		<div className="min-h-screen overflow-hidden">
			{/* Hero Section */}
			<div className="relative px-4 py-20">
				<div className="flex flex-col items-center max-w-6xl mx-auto text-center animate-fade-in">
					<h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl animate-slide-down">
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
							ویجتی‌فای
						</span>
						<span className="block mt-2 text-3xl font-medium text-gray-700 md:text-4xl">
							ویجت‌های هوشمند برای همه پلتفرم‌ها
						</span>
					</h1>

					<p className="max-w-2xl mb-10 text-lg font-light text-gray-600 md:text-xl animate-fade-in-up">
						با ویجتی‌فای، اطلاعات مهم خود را در قالب ویجت‌های زیبا و کاربردی، همیشه در دسترس
						داشته باشید — بر روی دسکتاپ، وب و مرورگر، بدون نیاز به جستجوی مکرر.
					</p>

					{/* Download Buttons */}
					<div className="flex flex-col gap-4 mb-12 sm:flex-row animate-fade-in-up">
						<div className="transition duration-200 hover:scale-[1.03] active:scale-[0.97]">
							<Link
								to="/extension"
								className="flex items-center justify-center px-6 py-3.5 font-medium text-white transition bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-purple-700"
							>
								<Puzzle className="ml-2" size={20} />
								اکستنشن مرورگر
							</Link>
						</div>

						<a
							href="https://github.com/widgetify-app/widgetify-desktop/releases"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center px-6 py-3.5 font-medium text-gray-700 transition bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 hover:scale-[1.03] active:scale-[0.97]"
						>
							<Laptop className="ml-2" size={20} />
							دانلود نسخه دسکتاپ
						</a>

						<a
							href="https://app.widgetify.ir"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center px-6 py-3.5 font-medium text-gray-700 transition bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 hover:scale-[1.03] active:scale-[0.97]"
						>
							<Globe className="ml-2" size={20} />
							نسخه وب (PWA)
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
						</div>

						<div className="absolute px-4 py-2 text-sm font-medium text-white transform -translate-x-1/2 rounded-full bottom-4 left-1/2 bg-black/60 backdrop-blur-sm animate-fade-in-long-delayed">
							مشاهده قیمت ارزها، آب و هوا و تقویم در یک نگاه
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
			<div className="py-16">
				<h2 className="mb-12 text-3xl font-bold text-center text-gray-900 animate-on-scroll">
					در هر پلتفرمی که هستید، ویجتی‌فای همراه شماست
				</h2>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-3 animate-on-scroll-delayed">
					<div className="relative p-8 overflow-hidden transition bg-white border-2 border-blue-200 shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-1">
						<div className="absolute top-0 right-0 px-3 py-1 text-xs text-white bg-blue-600 rounded-bl-lg">
							پیشنهاد ما
						</div>
						<div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 text-white transition-transform bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl hover:rotate-3 hover:scale-105">
							<Puzzle size={32} />
						</div>
						<h3 className="mb-3 text-xl font-bold text-center text-gray-900">
							اکستنشن مرورگر
						</h3>
						<p className="mb-5 font-light text-center text-gray-600">
							دسترسی سریع به ویجت‌ها در مرورگرهای محبوب بدون نیاز به نصب برنامه جداگانه
						</p>
						<div className="text-center">
							<Link
								to="/extension"
								className="inline-flex items-center justify-center w-full px-4 py-2 font-medium text-white rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-md"
							>
								نصب اکستنشن <Download size={16} className="mr-2" />
							</Link>
						</div>
					</div>

					<div className="p-8 transition bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-xl hover:-translate-y-1">
						<div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 text-white transition-transform bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl hover:rotate-3 hover:scale-105">
							<Laptop size={32} />
						</div>
						<h3 className="mb-3 text-xl font-bold text-center text-gray-900">
							نسخه دسکتاپ
						</h3>
						<p className="mb-5 font-light text-center text-gray-600">
							اجرا بر روی ویندوز، مک و لینوکس با رابط کاربری اختصاصی و عملکرد بهینه
						</p>
						<div className="text-center">
							<a
								href="https://github.com/widgetify-app/widgetify-desktop/releases"
								className="inline-flex items-center justify-center w-full px-4 py-2 font-medium text-gray-700 transition bg-gray-100 rounded-lg hover:bg-gray-200 hover:scale-[1.02]"
							>
								دانلود <Download size={16} className="mr-2" />
							</a>
						</div>
					</div>

					<div className="p-8 transition bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-xl hover:-translate-y-1">
						<div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 text-white transition-transform bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl hover:rotate-3 hover:scale-105">
							<Globe size={32} />
						</div>
						<h3 className="mb-3 text-xl font-bold text-center text-gray-900">
							نسخه وب (PWA)
						</h3>
						<p className="mb-5 font-light text-center text-gray-600">
							دسترسی در هر دستگاهی با مرورگر، قابل نصب به عنوان اپلیکیشن
						</p>
						<div className="text-center">
							<a
								href="https://app.widgetify.ir"
								className="inline-flex items-center justify-center w-full px-4 py-2 font-medium text-gray-700 transition bg-gray-100 rounded-lg hover:bg-gray-200 hover:scale-[1.02]"
							>
								مشاهده نسخه وب <Globe size={16} className="mr-2" />
							</a>
						</div>
					</div>
				</div>
			</div>

			<FeaturesSection />

			<ContributorsSection />
		</div>
	)
}
