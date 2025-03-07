import { Download, Globe, Laptop, Puzzle } from 'lucide-react'
import ContainerWrapper from '../components/ContainerWrapper'
import ContributorsSection from '../components/ContributorsSection'
import FeaturesSection from '../components/FeaturesSection'

export default function Home() {
	return (
		<>
			<div className="relative py-20 text-white bg-gradient-to-br from-blue-600 to-purple-700">
				<div className="absolute inset-0 bg-[url('/images/dots-pattern.svg')] bg-repeat opacity-10"></div>

				<div className="flex flex-col items-center text-center">
					<h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
						<span className="block">ویجتی‌فای</span>
						<span className="block mt-2 text-3xl font-medium text-blue-100 md:text-4xl">
							ویجت‌های هوشمند برای همه پلتفرم‌ها
						</span>
					</h1>
					<p className="max-w-2xl mb-12 text-lg text-blue-100 md:text-xl">
						با ویجتی‌فای، اطلاعات مورد نیاز خود را در قالب ویجت‌های زیبا و کاربردی در
						دسکتاپ، وب و مرورگر خود داشته باشید
					</p>

					{/* Download Buttons */}
					<div className="flex flex-col gap-4 mb-12 sm:flex-row">
						<a
							href="https://github.com/widgetify-app/widgetify-desktop/releases"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center px-6 py-3 font-medium text-blue-600 transition bg-white rounded-lg hover:bg-blue-50"
						>
							<Laptop className="ml-2" size={20} />
							دانلود نسخه دسکتاپ
						</a>

						<a
							href="https://app.widgetify.ir"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center px-6 py-3 font-medium transition border rounded-lg border-white/30 hover:bg-white/10"
						>
							<Globe className="ml-2" size={20} />
							نسخه وب (PWA)
						</a>

						<a
							href="#extension"
							className="flex items-center justify-center px-6 py-3 font-medium transition border rounded-lg border-white/30 hover:bg-white/10"
						>
							<Puzzle className="ml-2" size={20} />
							اکستنشن مرورگر (به زودی)
						</a>
					</div>

					{/* Preview Image */}
					<div className="relative w-full max-w-4xl mx-auto mt-8">
						<div className="overflow-hidden bg-white rounded-lg shadow-2xl aspect-video">
							<img
								src="/images/widgetify-preview.png"
								alt="ویجتی‌فای"
								className="object-cover w-full h-full"
								onError={(e) => {
									e.currentTarget.src = 'https://placehold.co/1200x675?text=ویجتی‌فای'
								}}
							/>
						</div>

						<div className="absolute px-4 py-2 text-xs text-white transform -translate-x-1/2 rounded-full bottom-4 left-1/2 bg-black/50 backdrop-blur-sm">
							مشاهده قیمت ارزها، آب و هوا و تقویم در یک نگاه
						</div>
					</div>
				</div>
			</div>

			<ContainerWrapper>
				{/* Platforms Section */}
				<div className="py-8">
					<h2 className="mb-12 text-3xl font-bold text-center">
						در هر پلتفرمی که هستید، ویجتی‌فای همراه شماست
					</h2>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						<div className="p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
							<div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl">
								<Laptop size={32} />
							</div>
							<h3 className="mb-3 text-xl font-bold text-center">نسخه دسکتاپ</h3>
							<p className="mb-4 text-center text-gray-600">
								اجرا بر روی ویندوز، مک و لینوکس با رابط کاربری اختصاصی و عملکرد بهینه
							</p>
							<div className="text-center">
								<a
									href="https://github.com/widgetify-app/widgetify-desktop/releases"
									className="inline-flex items-center text-blue-600 hover:underline"
								>
									دانلود <Download size={16} className="mr-1" />
								</a>
							</div>
						</div>

						<div className="p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
							<div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
								<Globe size={32} />
							</div>
							<h3 className="mb-3 text-xl font-bold text-center">نسخه وب (PWA)</h3>
							<p className="mb-4 text-center text-gray-600">
								دسترسی در هر دستگاهی با مرورگر، قابل نصب به عنوان اپلیکیشن
							</p>
							<div className="text-center">
								<a
									href="https://app.widgetify.ir"
									className="inline-flex items-center text-blue-600 hover:underline"
								>
									مشاهده <Globe size={16} className="mr-1" />
								</a>
							</div>
						</div>

						<div className="p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
							<div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
								<Puzzle size={32} />
							</div>
							<h3 className="mb-3 text-xl font-bold text-center">اکستنشن مرورگر</h3>
							<p className="mb-4 text-center text-gray-600">
								دسترسی سریع به ویجت‌ها در مرورگرهای محبوب
							</p>
							<div className="text-center text-gray-500">
								<span className="inline-flex items-center">
									به زودی{' '}
									<span className="inline-block w-4 h-4 mx-1 bg-gray-300 rounded-full animate-pulse"></span>
								</span>
							</div>
						</div>
					</div>
				</div>

				<FeaturesSection />

				<div className="p-8 text-center text-white bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl">
					<h2 className="mb-4 text-2xl font-bold">
						با ویجتی‌فای، همه چیز را در یک نگاه ببینید
					</h2>
					<p className="mb-6 text-blue-100">
						همین حالا نسخه مورد نظر خود را انتخاب کرده و از ویجتی‌فای استفاده کنید
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<a
							href="https://github.com/widgetify-app/widgetify-desktop/releases"
							className="flex items-center px-6 py-3 text-indigo-600 transition duration-200 bg-white rounded-lg hover:bg-indigo-50"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Download className="ml-2" size={20} />
							دانلود نسخه دسکتاپ
						</a>
						<a
							href="https://app.widgetify.ir"
							className="flex items-center px-6 py-3 text-white transition duration-200 bg-transparent border rounded-lg border-white/30 hover:bg-white/10"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Globe className="ml-2" size={20} />
							نسخه وب
						</a>
					</div>
				</div>

				<ContributorsSection />
			</ContainerWrapper>
		</>
	)
}
