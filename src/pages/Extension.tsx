import { FaChrome, FaEdge, FaFirefox, FaPlus, FaPuzzlePiece } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'

import ContainerWrapper from '../components/ContainerWrapper'

import { customizationOptions } from '../data/extension/customizationOptions'
import { featuresTabs } from '../data/extension/featuresTabs'
import { installationSteps } from '../data/extension/installationSteps'
import { otherFeatures } from '../data/extension/otherFeatures'
import { CustomizationFeature } from '../layouts/Extension/components/CustomizationFeature'
import { FeaturesTab } from '../layouts/Extension/components/FeaturesTab'
import { InstallationTimeline } from '../layouts/Extension/components/InstallationTimeline'
import { OtherFeatures } from '../layouts/Extension/components/OtherFeatures'

// Mock data for browser extensions availability
const browserExtensions = [
	{
		name: 'Chrome',
		icon: FaChrome,
		url: 'https://chrome.google.com/webstore/detail/widgetify/coming-soon',
		isAvailable: false,
		comingSoon: true,
	},
	{
		name: 'فایرفاکس',
		icon: FaFirefox,
		url: 'https://addons.mozilla.org/en-US/firefox/addon/widgetify/',
		isAvailable: false,
		comingSoon: true,
	},
	{
		name: 'ادج',
		icon: FaEdge,
		url: 'https://microsoftedge.microsoft.com/addons/detail/widgetify/coming-soon',
		isAvailable: false,
		comingSoon: true,
	},
]

// Features for the extension
const extensionFeatures = [
	{
		title: 'تب‌های جدید هوشمند',
		description:
			'تب‌های جدید مرورگر شما به یک داشبورد کامل از ویجت‌های کاربردی تبدیل می‌شوند',
	},
	{
		title: 'شروع سریع روز خود',
		description: 'با باز کردن هر تب جدید، تمام اطلاعات مورد نیاز را در یک نگاه ببینید',
	},
	{
		title: 'سفارشی‌سازی کامل',
		description: 'چینش و نوع ویجت‌های نمایش داده شده در تب جدید را به دلخواه تغییر دهید',
	},
	{
		title: 'بدون نیاز به نصب برنامه جداگانه',
		description:
			'تمام امکانات ویجتی‌فای مستقیماً در مرورگر شما و بدون نیاز به نرم‌افزار اضافی',
	},
]

export function Extension() {
	return (
		<>
			{/* Hero Section with Gradient Background */}
			<div className="relative py-16 text-white md:py-24 bg-gradient-to-br from-blue-600 to-purple-700">
				<div className="absolute inset-0 bg-[url('/images/dots-pattern.svg')] bg-repeat opacity-10"></div>

				<div className="flex flex-col items-center text-center">
					<h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
						<span className="block">تب‌های جدید هوشمند با ویجتی‌فای</span>
					</h1>
					<p className="max-w-2xl mx-auto mb-10 text-lg text-blue-100 md:text-xl">
						تب‌های جدید مرورگر خود را به یک داشبورد کامل از ویجت‌های کاربردی تبدیل کنید و
						اطلاعات مورد نیاز خود را در یک نگاه ببینید
					</p>

					{/* Download Buttons */}
					<div className="flex flex-col gap-3 mb-6 sm:flex-row sm:gap-4">
						{browserExtensions.map((browser) => (
							<div
								aria-busy
								key={browser.name}
								className={` px-5 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition ${
									!browser.isAvailable ? 'cursor-not-allowed opacity-75' : ''
								}`}
							>
								<div className="flex items-center justify-center gap-1">
									<browser.icon size={20} />
									<p>
										{browser.name} {browser.comingSoon ? '(به زودی)' : ''}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<ContainerWrapper>
				{/* Extension Preview */}
				<div className="py-16 md:py-24">
					<div className="flex flex-col items-center gap-8 mb-16 md:mb-20 md:flex-row">
						<div className="w-full md:w-1/2">
							<h2 className="mb-6 text-3xl font-bold">داشبورد اختصاصی در هر تب جدید</h2>
							<p className="mb-6 text-gray-600">
								با نصب اکستنشن ویجتی‌فای، هر تب جدیدی که باز می‌کنید به یک داشبورد کامل از
								ویجت‌های کاربردی تبدیل می‌شود. دیگر نیازی به باز کردن چندین سایت مختلف برای
								دسترسی به اطلاعات مورد نیاز خود ندارید.
							</p>
							<ul className="space-y-4">
								{extensionFeatures.map((feature, index) => (
									<li key={index} className="flex items-start gap-2">
										<div className="flex-shrink-0 w-5 h-5 mt-1 bg-indigo-500 rounded-full"></div>
										<div>
											<h3 className="font-medium">{feature.title}</h3>
											<p className="text-sm text-gray-500">{feature.description}</p>
										</div>
									</li>
								))}
							</ul>
						</div>
						<div className="flex justify-center w-full md:w-1/2">
							<div className="relative">
								<div className="overflow-hidden bg-white border border-gray-200 shadow-xl w-72 h-96 rounded-xl">
									<div className="flex items-center justify-between h-8 px-3 bg-gray-100 border-b border-gray-200">
										<div className="flex space-x-1.5 rtl:space-x-reverse">
											<div className="w-3 h-3 bg-red-400 rounded-full"></div>
											<div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
											<div className="w-3 h-3 bg-green-400 rounded-full"></div>
										</div>
										<div className="flex items-center px-2 py-1 text-xs bg-gray-200 rounded">
											<FaPlus className="ml-1" size={10} />
											تب جدید
										</div>
									</div>
									<div className="p-4">
										<div className="flex items-center justify-center h-16 mb-3 bg-blue-100 rounded-lg">
											<MdDashboard className="text-blue-500" size={24} />
											<span className="mr-2 font-medium text-blue-700">
												داشبورد ویجتی‌فای
											</span>
										</div>
										<div className="grid grid-cols-2 gap-2 mb-3">
											<div className="h-24 p-2 bg-gray-100 rounded-lg">
												<div className="w-full h-4 mb-1 bg-gray-200 rounded"></div>
												<div className="w-3/4 h-3 mb-2 bg-gray-200 rounded"></div>
												<div className="w-full h-12 bg-gray-200 rounded animate-pulse"></div>
											</div>
											<div className="h-24 p-2 bg-gray-100 rounded-lg">
												<div className="w-full h-4 mb-1 bg-gray-200 rounded"></div>
												<div className="w-3/4 h-3 mb-2 bg-gray-200 rounded"></div>
												<div className="w-full h-12 bg-gray-200 rounded"></div>
											</div>
										</div>
										<div className="h-20 bg-gray-100 rounded-lg">
											<div className="w-full h-4 pt-2 mx-2 mt-2 bg-gray-200 rounded"></div>
											<div className="w-3/4 h-3 mx-2 mt-1 bg-gray-200 rounded"></div>
											<div className="flex justify-between px-2 mt-2">
												<div className="w-10 h-8 bg-gray-200 rounded"></div>
												<div className="w-10 h-8 bg-gray-200 rounded animate-pulse"></div>
											</div>
										</div>
									</div>
								</div>
								<div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-full shadow-lg -top-4 -right-4">
									<FaPuzzlePiece size={22} />
								</div>
							</div>
						</div>
					</div>

					{/* Features Showcase - New Design */}
					<div className="mb-20">
						<h2 className="mb-4 text-3xl font-bold text-center">
							ویژگی‌های برتر ویجتی‌فای
						</h2>
						<p className="max-w-2xl mx-auto mb-12 text-center text-gray-500">
							با ویجتی‌فای، تب‌های جدید شما به یک مرکز مدیریت هوشمند تبدیل می‌شوند
						</p>

						{/* Main Features - Tab Style */}
						<FeaturesTab features={featuresTabs} />

						{/* Other Features */}
						<OtherFeatures features={otherFeatures} />

						{/* Customization Feature */}
						<CustomizationFeature
							title="کاملاً قابل سفارشی‌سازی"
							description="تمام ویجت‌ها را مطابق سلیقه و نیاز خود سفارشی کنید. چیدمان، رنگ‌ها، اندازه‌ها و اطلاعات نمایش داده شده را به دلخواه تغییر دهید."
							options={customizationOptions}
						/>
					</div>

					{/* Extension Installation - New Timeline Design */}
					<InstallationTimeline
						title="نصب و راه‌اندازی اکستنشن ویجتی‌فای"
						description="در چهار مرحله ساده، اکستنشن ویجتی‌فای را نصب کنید و از داشبورد هوشمند در تب‌های جدید خود لذت ببرید"
						steps={installationSteps}
						infoMessage={{
							text: 'اکستنشن ویجتی‌فای به زودی برای مرورگرهای محبوب در دسترس قرار خواهد گرفت.',
							link: {
								url: '/',
								text: 'با ما همراه باشید',
							},
							afterLinkText: 'تا از انتشار آن مطلع شوید!',
						}}
					/>

					{/* CTA */}
					<div className="p-5 text-center text-white bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl md:p-6">
						<h2 className="mb-4 text-2xl font-bold">
							تب‌های جدید خود را با ویجت‌های کاربردی زیبا کنید!
						</h2>
						<p className="mb-5 text-blue-100">
							با نصب اکستنشن ویجتی‌فای، هر تب جدید به یک صفحه جذاب و کاربردی با امکان شخصی
							ساز تبدیل می‌شود
						</p>
					</div>
				</div>
			</ContainerWrapper>
		</>
	)
}
