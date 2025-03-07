import { BsController } from 'react-icons/bs'
import {
	FaCheckCircle,
	FaChrome,
	FaClock,
	FaCloud,
	FaDollarSign,
	FaDownload,
	FaEdge,
	FaFirefox,
	FaFolder,
	FaPlus,
	FaPuzzlePiece,
	FaSearch,
} from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'
import { Link } from 'react-router-dom'
import ContainerWrapper from '../components/ContainerWrapper'
import FooterSection from '../components/FooterSection'

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
			'تمام امکانات ویجتیفای مستقیماً در مرورگر شما و بدون نیاز به نرم‌افزار اضافی',
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
						<span className="block">تب‌های جدید هوشمند با ویجتیفای</span>
					</h1>
					<p className="max-w-2xl mx-auto mb-10 text-lg text-blue-100 md:text-xl">
						تب‌های جدید مرورگر خود را به یک داشبورد کامل از ویجت‌های کاربردی تبدیل کنید و
						اطلاعات مورد نیاز خود را در یک نگاه ببینید
					</p>

					{/* Download Buttons */}
					<div className="flex flex-col gap-3 mb-6 sm:flex-row sm:gap-4">
						{browserExtensions.map((browser) => (
							<div
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
								با نصب اکستنشن ویجتیفای، هر تب جدیدی که باز می‌کنید به یک داشبورد کامل از
								ویجت‌های کاربردی تبدیل می‌شود. دیگر نیازی به باز کردن چندین سایت مختلف برای
								دسترسی به اطلاعات مورد نیاز خود ندارید.
							</p>
							<ul className="space-y-4">
								{extensionFeatures.map((feature, index) => (
									<li key={index} className="flex items-start">
										<div className="flex-shrink-0 w-5 h-5 mt-1 mr-3 bg-indigo-500 rounded-full"></div>
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
												داشبورد ویجتیفای
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
							ویژگی‌های برتر ویجتیفای
						</h2>
						<p className="max-w-2xl mx-auto mb-12 text-center text-gray-500">
							با ویجتیفای، تب‌های جدید شما به یک مرکز مدیریت هوشمند تبدیل می‌شوند
						</p>

						{/* Main Features - Tab Style */}
						<div className="overflow-hidden bg-white border shadow-sm rounded-2xl mb-14">
							<div className="grid grid-cols-1 lg:grid-cols-2">
								{/* Left Side - Feature Navigation */}
								<div className="p-2 bg-gray-50 lg:p-6">
									<div className="space-y-2">
										{/* Financial Management Tab */}
										<div className="flex items-center p-4 transition-colors bg-white rounded-lg shadow-sm">
											<div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600">
												<FaDollarSign size={24} />
											</div>
											<div>
												<h3 className="text-lg font-semibold">مدیریت مالی</h3>
												<p className="text-sm text-gray-500">
													قیمت لحظه‌ای ارزها، رمزارزها و بازارها
												</p>
											</div>
										</div>

										{/* Productivity Tab */}
										<div className="flex items-center p-4 transition-colors rounded-lg hover:bg-white hover:shadow-sm">
											<div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600">
												<FaCheckCircle size={24} />
											</div>
											<div>
												<h3 className="text-lg font-semibold">افزایش بهره‌وری</h3>
												<p className="text-sm text-gray-500">
													مدیریت وظایف، یادداشت‌ها و عملکرد
												</p>
											</div>
										</div>

										{/* Organization Tab */}
										<div className="flex items-center p-4 transition-colors rounded-lg hover:bg-white hover:shadow-sm">
											<div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
												<FaFolder size={24} />
											</div>
											<div>
												<h3 className="text-lg font-semibold">سازماندهی</h3>
												<p className="text-sm text-gray-500">
													بوکمارک‌های پیشرفته با پوشه‌بندی
												</p>
											</div>
										</div>

										{/* Tools Tab */}
										<div className="flex items-center p-4 transition-colors rounded-lg hover:bg-white hover:shadow-sm">
											<div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-lg bg-gradient-to-r from-amber-500 to-orange-500">
												<FaClock size={24} />
											</div>
											<div>
												<h3 className="text-lg font-semibold">ابزارهای کاربردی</h3>
												<p className="text-sm text-gray-500">
													ساعت، تقویم و زمان‌بندی یکپارچه
												</p>
											</div>
										</div>
									</div>
								</div>

								{/* Right Side - Feature Detail */}
								<div className="p-6 bg-white">
									<h3 className="mb-4 text-2xl font-bold">مدیریت مالی هوشمند</h3>

									<div className="mb-6">
										<p className="mb-4 text-gray-600">
											با ویجت‌های مالی ویجتیفای، اطلاعات بازارهای مالی در یک نگاه در اختیار
											شماست. قیمت لحظه‌ای ارزها، رمزارزها، طلا، سکه و دلار را بدون نیاز به
											مراجعه به سایت‌های مختلف مشاهده کنید.
										</p>

										<div className="flex flex-wrap gap-3">
											<span className="px-3 py-1 text-sm font-medium text-blue-700 rounded-full bg-blue-50">
												بیت‌کوین
											</span>
											<span className="px-3 py-1 text-sm font-medium text-blue-700 rounded-full bg-blue-50">
												دلار
											</span>
											<span className="px-3 py-1 text-sm font-medium text-blue-700 rounded-full bg-blue-50">
												یورو
											</span>
											<span className="px-3 py-1 text-sm font-medium text-blue-700 rounded-full bg-blue-50">
												طلا
											</span>
											<span className="px-3 py-1 text-sm font-medium text-blue-700 rounded-full bg-blue-50">
												بورس
											</span>
										</div>
									</div>

									{/* Feature Screenshot */}
									<div className="relative">
										<div className="flex items-center justify-center h-48 overflow-hidden bg-blue-50 rounded-xl">
											<div className="grid w-full max-w-xs grid-cols-2 gap-3 p-4">
												<div className="p-3 bg-white rounded-lg shadow-sm">
													<div className="flex items-center mb-1">
														<FaDollarSign size={14} className="mr-1 text-blue-600" />
														<span className="text-sm font-medium">دلار آمریکا</span>
													</div>
													<div className="text-lg font-bold text-blue-700">
														۷۲,۴۳۰ <span className="text-xs text-green-600">↑۲.۴٪</span>
													</div>
												</div>
												<div className="p-3 bg-white rounded-lg shadow-sm">
													<div className="flex items-center mb-1">
														<span className="flex-shrink-0 w-4 h-4 mr-1 bg-yellow-400 rounded-full"></span>
														<span className="text-sm font-medium">قیمت طلا</span>
													</div>
													<div className="text-lg font-bold text-blue-700">۳,۶۵۰,۰۰۰</div>
												</div>
												<div className="col-span-2 p-3 bg-white rounded-lg shadow-sm">
													<div className="flex items-center mb-1">
														<span className="flex-shrink-0 w-4 h-4 mr-1 bg-orange-500 rounded-full"></span>
														<span className="text-sm font-medium">بیت‌کوین</span>
													</div>
													<div className="text-lg font-bold text-blue-700">
														۶۵,۲۸۴ <span className="text-xs text-red-600">↓۱.۲٪</span>
													</div>
												</div>
											</div>
										</div>
										<div className="absolute top-3 left-3">
											<div className="px-2 py-1 text-xs font-medium text-white bg-blue-600 rounded-md">
												زنده
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Other Features */}
						<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
							{/* Quick Access */}
							<div className="overflow-hidden transition-all bg-white border border-gray-200 rounded-xl hover:border-blue-200 hover:shadow-md group">
								<div className="flex items-center p-6">
									<div className="flex-shrink-0 mr-4">
										<div className="flex items-center justify-center w-12 h-12 text-pink-600 transition-colors rounded-xl bg-pink-50 group-hover:bg-pink-100">
											<FaSearch size={22} />
										</div>
									</div>
									<div>
										<h3 className="mb-1 text-lg font-semibold">دسترسی سریع</h3>
										<p className="text-sm text-gray-600">
											جستجوی هوشمند و میانبرهای سفارشی برای سایت‌های محبوب
										</p>
									</div>
								</div>
							</div>

							{/* Weather */}
							<div className="overflow-hidden transition-all bg-white border border-gray-200 rounded-xl hover:border-blue-200 hover:shadow-md group">
								<div className="flex items-center p-6">
									<div className="flex-shrink-0 mr-4">
										<div className="flex items-center justify-center w-12 h-12 text-blue-600 transition-colors rounded-xl bg-blue-50 group-hover:bg-blue-100">
											<FaCloud size={22} />
										</div>
									</div>
									<div>
										<h3 className="mb-1 text-lg font-semibold">پیش‌بینی آب‌وهوا</h3>
										<p className="text-sm text-gray-600">
											گزارش دقیق آب و هوا با پشتیبانی هوش مصنوعی و نمایش جزئیات
										</p>
									</div>
								</div>
							</div>

							{/* Virtual Pet */}
							<div className="overflow-hidden transition-all bg-white border border-gray-200 rounded-xl hover:border-blue-200 hover:shadow-md group">
								<div className="flex items-center p-6">
									<div className="flex-shrink-0 mr-4">
										<div className="flex items-center justify-center w-12 h-12 transition-colors rounded-xl text-violet-600 bg-violet-50 group-hover:bg-violet-100">
											<BsController size={22} />
										</div>
									</div>
									<div>
										<h3 className="mb-1 text-lg font-semibold">حیوان خانگی مجازی</h3>
										<p className="text-sm text-gray-600">
											یک حیوان خانگی دوست‌داشتنی که با شماست و رشد می‌کند
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Customization Feature */}
						<div className="p-6 mt-10 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl">
							<div className="flex flex-col items-center md:flex-row">
								<div className="w-full mb-6 md:w-1/2 md:mb-0">
									<h3 className="mb-4 text-2xl font-bold">کاملاً قابل سفارشی‌سازی</h3>
									<p className="mb-4 text-gray-700">
										تمام ویجت‌ها را مطابق سلیقه و نیاز خود سفارشی کنید. چیدمان، رنگ‌ها،
										اندازه‌ها و اطلاعات نمایش داده شده را به دلخواه تغییر دهید.
									</p>
									<div className="flex flex-wrap gap-3">
										<div className="flex items-center px-3 py-2 bg-white rounded-lg">
											<div className="w-3 h-3 mr-2 bg-indigo-500 rounded-full"></div>
											<span className="text-sm">تغییر چیدمان</span>
										</div>
										<div className="flex items-center px-3 py-2 bg-white rounded-lg">
											<div className="w-3 h-3 mr-2 bg-pink-500 rounded-full"></div>
											<span className="text-sm">تم رنگی</span>
										</div>
										<div className="flex items-center px-3 py-2 bg-white rounded-lg">
											<div className="w-3 h-3 mr-2 rounded-full bg-amber-500"></div>
											<span className="text-sm">انتخاب ویجت</span>
										</div>
									</div>
								</div>
								<div className="w-full md:w-1/2 md:pl-8">
									<div className="p-4 bg-white shadow-sm rounded-xl">
										<div className="flex items-center justify-between mb-4">
											<div className="flex">
												<div className="w-3 h-3 mr-1 bg-red-400 rounded-full"></div>
												<div className="w-3 h-3 mr-1 bg-yellow-400 rounded-full"></div>
												<div className="w-3 h-3 bg-green-400 rounded-full"></div>
											</div>
											<div className="flex items-center px-2 py-1 text-xs bg-gray-100 rounded">
												<FaPlus size={8} className="mr-1" />
												تب جدید
											</div>
										</div>
										<div className="grid grid-cols-3 gap-3">
											<div className="flex items-center justify-center h-24 col-span-2 border-2 border-blue-200 border-dashed rounded-lg bg-blue-50">
												<div className="text-sm text-blue-400">ویجت بزرگ</div>
											</div>
											<div className="flex items-center justify-center h-24 border-2 border-indigo-200 border-dashed rounded-lg bg-indigo-50">
												<div className="text-sm text-indigo-400">ویجت</div>
											</div>
											<div className="flex items-center justify-center h-24 border-2 border-pink-200 border-dashed rounded-lg bg-pink-50">
												<div className="text-sm text-pink-400">ویجت</div>
											</div>
											<div className="flex items-center justify-center h-24 col-span-2 border-2 border-dashed rounded-lg bg-amber-50 border-amber-200">
												<div className="text-sm text-amber-400">ویجت متوسط</div>
											</div>
										</div>
										<div className="flex justify-end mt-3">
											<div className="px-3 py-1 text-xs text-white bg-blue-600 rounded">
												ذخیره چیدمان
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Extension Installation - New Timeline Design */}
					<div className="mb-20">
						<h2 className="mb-6 text-3xl font-bold text-center">
							نصب و راه‌اندازی اکستنشن ویجتیفای
						</h2>
						<p className="max-w-2xl mx-auto mb-12 text-center text-gray-500">
							در چهار مرحله ساده، اکستنشن ویجتیفای را نصب کنید و از داشبورد هوشمند در
							تب‌های جدید خود لذت ببرید
						</p>

						{/* Desktop Timeline */}
						<div className="relative hidden md:block">
							{/* Timeline Line */}
							<div className="absolute left-0 w-full h-1 top-10 bg-gradient-to-r from-indigo-300 via-blue-500 to-purple-500"></div>

							<div className="grid grid-cols-4 gap-6">
								{/* Step 1 */}
								<div className="relative">
									<div className="flex flex-col items-center">
										<div className="z-10 flex items-center justify-center w-20 h-20 mb-6 text-white rounded-full bg-gradient-to-br from-indigo-500 to-blue-600">
											<FaChrome size={32} />
										</div>
										<h3 className="mb-2 text-lg font-bold">انتخاب مرورگر</h3>
										<p className="text-center text-gray-600">
											مرورگر خود را از بین کروم، فایرفاکس یا اج انتخاب کنید
										</p>
									</div>
								</div>

								{/* Step 2 */}
								<div className="relative">
									<div className="flex flex-col items-center">
										<div className="z-10 flex items-center justify-center w-20 h-20 mb-6 text-white rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
											<FaDownload size={32} />
										</div>
										<h3 className="mb-2 text-lg font-bold">نصب افزونه</h3>
										<p className="text-center text-gray-600">
											افزونه را نصب کرده و مجوزهای لازم را تایید کنید
										</p>
									</div>
								</div>

								{/* Step 3 */}
								<div className="relative">
									<div className="flex flex-col items-center">
										<div className="z-10 flex items-center justify-center w-20 h-20 mb-6 text-white rounded-full bg-gradient-to-br from-purple-500 to-pink-600">
											<FaPlus size={32} />
										</div>
										<h3 className="mb-2 text-lg font-bold">باز کردن تب جدید</h3>
										<p className="text-center text-gray-600">
											یک تب جدید باز کنید تا داشبورد ویجتیفای ظاهر شود
										</p>
									</div>
								</div>

								{/* Step 4 */}
								<div className="relative">
									<div className="flex flex-col items-center">
										<div className="z-10 flex items-center justify-center w-20 h-20 mb-6 text-white rounded-full bg-gradient-to-br from-pink-500 to-rose-600">
											<MdDashboard size={32} />
										</div>
										<h3 className="mb-2 text-lg font-bold">شخصی‌سازی</h3>
										<p className="text-center text-gray-600">
											ویجت‌ها را مطابق نیاز خود تنظیم و سفارشی‌سازی کنید
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Mobile Timeline - Vertical */}
						<div className="md:hidden">
							<div className="relative pr-8 mr-6 space-y-10 border-r-4 border-indigo-200 rtl:border-r-0 rtl:border-l-4 rtl:pr-0 rtl:mr-0 rtl:pl-8 rtl:ml-6">
								{/* Step 1 */}
								<div className="relative">
									<div className="absolute right-[-38px] top-0 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full rtl:right-auto rtl:left-[-38px]">
										<FaChrome size={24} />
									</div>
									<div className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
										<h3 className="mb-2 text-lg font-bold">انتخاب مرورگر</h3>
										<p className="text-gray-600">
											مرورگر خود را از بین کروم، فایرفاکس یا اج انتخاب کنید
										</p>
									</div>
								</div>

								{/* Step 2 */}
								<div className="relative">
									<div className="absolute right-[-38px] top-0 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-full rtl:right-auto rtl:left-[-38px]">
										<FaDownload size={24} />
									</div>
									<div className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
										<h3 className="mb-2 text-lg font-bold">نصب افزونه</h3>
										<p className="text-gray-600">
											افزونه را نصب کرده و مجوزهای لازم را تایید کنید
										</p>
									</div>
								</div>

								{/* Step 3 */}
								<div className="relative">
									<div className="absolute right-[-38px] top-0 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600 rounded-full rtl:right-auto rtl:left-[-38px]">
										<FaPlus size={24} />
									</div>
									<div className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
										<h3 className="mb-2 text-lg font-bold">باز کردن تب جدید</h3>
										<p className="text-gray-600">
											یک تب جدید باز کنید تا داشبورد ویجتیفای ظاهر شود
										</p>
									</div>
								</div>

								{/* Step 4 */}
								<div className="relative">
									<div className="absolute right-[-38px] top-0 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-pink-500 to-rose-600 rounded-full rtl:right-auto rtl:left-[-38px]">
										<MdDashboard size={24} />
									</div>
									<div className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
										<h3 className="mb-2 text-lg font-bold">شخصی‌سازی</h3>
										<p className="text-gray-600">
											ویجت‌ها را مطابق نیاز خود تنظیم و سفارشی‌سازی کنید
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Additional info card */}
						<div className="flex items-center justify-center mt-10">
							<div className="flex items-center max-w-2xl gap-2 px-5 py-3 border border-blue-200 rounded-lg bg-blue-50">
								<div className="flex items-center justify-center p-2 text-blue-600 bg-blue-100 rounded-full">
									<FaPuzzlePiece size={20} />
								</div>
								<p className="text-blue-700">
									اکستنشن ویجتیفای به زودی برای مرورگرهای محبوب در دسترس قرار خواهد گرفت.
									<Link
										to="/"
										className="mx-1 font-medium text-indigo-600 underline hover:text-indigo-800"
									>
										با ما همراه باشید
									</Link>
									تا از انتشار آن مطلع شوید!
								</p>
							</div>
						</div>
					</div>

					{/* CTA */}
					<div className="p-5 text-center text-white bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl md:p-6">
						<h2 className="mb-4 text-2xl font-bold">
							تب‌های جدید خود را با ویجت‌های کاربردی زیبا کنید!
						</h2>
						<p className="mb-5 text-blue-100">
							با نصب اکستنشن ویجتیفای، هر تب جدید به یک صفحه جذاب و کاربردی با امکان شخصی
							ساز تبدیل می‌شود
						</p>
					</div>
				</div>
			</ContainerWrapper>
		</>
	)
}
