'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
	FaChevronLeft,
	FaChevronRight,
	FaChrome,
	FaEdge,
	FaFirefox,
	FaOpera,
} from 'react-icons/fa'
import { FaBrave } from 'react-icons/fa6'
import { TypeAnimation } from 'react-type-animation'
import ContributorsSection from '../components/ContributorsSection'
import { useDocumentTitle } from '../hooks'

const CHROME_EXTENSION_URL =
	'https://chromewebstore.google.com/detail/widgetify/ajaaioiiekongmlakdbellaoglnffmoh'
const browserExtensions = [
	{
		name: 'گوگل کروم',
		icon: FaChrome,
		url: CHROME_EXTENSION_URL,
		isAvailable: true,
		comingSoon: false,
	},
	{
		name: 'فایرفاکس',
		icon: FaFirefox,
		url: 'https://addons.mozilla.org/en-US/firefox/addon/widgetify/',
		isAvailable: false,
		comingSoon: true,
	},
	{
		name: 'اج',
		icon: FaEdge,
		url: CHROME_EXTENSION_URL,
		isAvailable: true,
		comingSoon: false,
	},
	{
		name: 'Brave',
		icon: FaBrave,
		url: CHROME_EXTENSION_URL,
		isAvailable: true,
		comingSoon: false,
	},
	{
		name: 'مرورگر اپرا',
		icon: FaOpera,
		url: 'https://t.me/widgetify_help/23',
		isAvailable: true,
		comingSoon: false,
	},
].sort((a, b) => (a.isAvailable === b.isAvailable ? 0 : a.isAvailable ? -1 : 1))

const previewImages = [
	{
		src: '/preview-1.png',
		alt: 'پیش‌نمایش اول - ویجت‌های مالی و اخبار',
		title: 'ویجت‌های مالی و اخبار',
		description: '🎨 هرطور دوست داری شخصی‌سازی کن!',
	},
	{
		src: '/preview-2.png',
		alt: 'پیش‌نمایش دوم - ویجت‌های کاربردی',
		title: 'ویجت‌های کاربردی',
		description: '✨ چیدمان ویجت‌ها رو به سلیقه خودت تنظیم کن',
	},
	{
		src: '/widgets.png',
		alt: 'مجموعه کامل ویجت‌ها',
		title: 'مجموعه کامل ویجت‌ها',
		description: '🚀 همه ویجت‌ها رو یکجا ببین!',
	},
]

export function Home() {
	useDocumentTitle('اکستنشن مرورگر')
	const [currentSlide, setCurrentSlide] = useState(0)

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % previewImages.length)
	}

	const prevSlide = () => {
		setCurrentSlide(
			(prev) => (prev - 1 + previewImages.length) % previewImages.length
		)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % previewImages.length)
		}, 5000)
		return () => clearInterval(interval)
	}, [])

	const features = [
		{
			title: '💰 مدیریت مالی هوشمند',
			description: 'قیمت لحظه‌ای ارزها، رمزارزها و بازارها رو ببین',
			image: '/combo-widget_news_currencies.png',
		},
		{
			title: '✅ مدیریت وظایف',
			description: 'کارها و یادداشت‌هات رو راحت سازماندهی کن',
			image: '/todo-widget.png',
		},
		{
			title: '🛠️ ابزارهای کاربردی',
			description: 'ساعت، تقویم و آب و هوا همیشه در دسترس',
			image: '/clock-widget.png',
		},
		{
			title: '📝 یادداشت‌ها',
			description: 'یادداشت‌های سریع بنویس و مدیریت کن',
			image: '/note-widget.png',
		},
		{
			title: '🍅 پومودورو',
			description: 'زمانت رو بهتر مدیریت کن و روی کارها متمرکز باش',
			image: '/pomodoro-widget.png',
		},
		{
			title: '🌤️ آب و هوا',
			description: 'هوا چطوره؟ قبل از بیرون رفتن چک کن!',
			image: '/weather-widget.png',
		},
	]

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
			{/* Hero Section */}
			<div className="relative px-4 py-20">
				<div className="flex flex-col gap-6 mx-auto max-w-7xl">
					{/* Header */}
					<div className="flex flex-col items-center justify-center gap-4 animate-fade-in">
						<h1 className="py-1 text-4xl font-bold text-gray-900 md:text-6xl lg:text-7xl animate-slide-down">
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
								نیوتب مرورگرت رو
							</span>
							<span className="block text-center text-gray-800">
								<TypeAnimation
									sequence={[
										'کارآمد کن!',
										2000,
										'جذاب کن!',
										2000,
										'حرفه‌ای کن!',
										2000,
									]}
									wrapper="span"
									speed={50}
									style={{ display: 'inline-block' }}
									repeat={Infinity}
									cursor={true}
								/>
							</span>
						</h1>

						<p className="max-w-3xl mx-auto text-sm font-light text-center text-gray-600 md:text-xl animate-fade-in-up">
							هر بار که تب جدید بازمی‌کنی، یه داشبورد شخصی پر از ویجت‌های مفید
							داری! دیگه نیازی نیست سایت‌های مختلف رو چک کنی - همه چیز یکجا
							در دسترسه ✨
						</p>

						{/* Trust Stats */}
						<div className="flex flex-wrap justify-center gap-6 py-4 animate-fade-in-up">
							<div className="text-center">
								<div className="text-2xl font-bold text-blue-600">
									+12 هزار
								</div>
								<div className="text-xs text-gray-500">نصب فعال</div>
							</div>
							<div className="w-px h-10 bg-gray-200"></div>
							<div className="text-center">
								<div className="text-2xl font-bold text-green-600">✓</div>
								<div className="text-xs text-gray-500">تایید شده</div>
							</div>
							<div className="w-px h-10 bg-gray-200"></div>
							<div className="text-center">
								<div className="text-2xl font-bold text-purple-600">
									👥
								</div>
								<div className="text-xs text-gray-500">جامعه فعال</div>
							</div>
							<div className="w-px h-10 bg-gray-200"></div>
							<div className="text-center">
								<div className="text-2xl font-bold text-orange-600">
									🔓
								</div>
								<div className="text-xs text-gray-500">متن باز</div>
							</div>
						</div>

						{/* Download Buttons */}
						<div className="flex flex-col items-center gap-6 mb-6 animate-fade-in-up">
							{/* Primary Download Button - Chrome */}
							<a
								href={CHROME_EXTENSION_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="relative flex items-center px-12 py-5 text-xl font-bold text-white transition-all duration-300 transform group bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl hover:from-blue-700 hover:to-blue-800 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
								aria-label="دانلود برای گوگل کروم - مرورگر اصلی"
							>
								<FaChrome
									size={32}
									className="ml-4 transition-transform group-hover:scale-110"
								/>
								<div className="flex flex-col items-start">
									<span className="text-2xl">
										دانلود برای گوگل کروم
									</span>
								</div>
								<div className="absolute -top-2 -right-2">
									<span className="px-2 py-1 text-xs font-bold text-blue-700 bg-yellow-300 rounded-full animate-pulse">
										محبوب
									</span>
								</div>
							</a>

							{/* Secondary Browsers */}
							<div className="flex flex-wrap justify-center gap-3">
								{browserExtensions.slice(1).map((browser) => (
									<a
										key={browser.name}
										className={`group relative flex items-center px-6 py-3 font-medium transition-all duration-300 rounded-xl ${
											browser.isAvailable
												? 'bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-blue-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50'
												: 'opacity-50 cursor-not-allowed bg-gray-100 border-2 border-gray-100 text-gray-500'
										}`}
										target="_blank"
										rel="noopener noreferrer"
										href={
											browser.isAvailable ? browser.url : undefined
										}
									>
										<browser.icon
											size={20}
											className="ml-3 transition-transform group-hover:scale-110"
										/>
										<span className="text-base">{browser.name}</span>
										{browser.comingSoon && (
											<span className="mr-2 text-sm text-gray-400">
												(به زودی)
											</span>
										)}
										{browser.isAvailable && !browser.comingSoon && (
											<div className="absolute -top-1 -right-1">
												<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
											</div>
										)}
									</a>
								))}
							</div>

							{/* Install Help Text */}
							<div className="text-center">
								<p className="max-w-md text-sm text-gray-500">
									نصب خیلی راحته! فقط کافیه روی مرورگر مورد نظرت کلیک
									کنی و دکمه "Add to Chrome" رو بزنی
								</p>
							</div>
						</div>
					</div>

					{/* Main Preview Slider */}
					<div className="relative animate-fade-in-delayed">
						<div className="relative max-w-5xl mx-auto">
							<div className="overflow-hidden rounded-3xl aspect-video animate-slide-up-delayed bg-gradient-to-br from-blue-100 to-purple-100">
								<div className="relative w-full h-full">
									{previewImages.map((image, index) => (
										<div
											key={index}
											className={`absolute inset-0 transition-opacity duration-1000 ${
												index === currentSlide
													? 'opacity-100'
													: 'opacity-0'
											}`}
										>
											<Image
												src={image.src}
												alt={image.alt}
												className="object-contain w-full h-full"
												onError={(e) => {
													e.currentTarget.src = `https://placehold.co/1200x675?text=${encodeURIComponent(image.title)}`
												}}
												width={1000}
												height={100}
											/>
										</div>
									))}
								</div>

								{/* Navigation Buttons */}
								<button
									onClick={prevSlide}
									className="absolute p-3 text-white transition-all duration-300 transform -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/50 hover:bg-black/70 hover:scale-110"
								>
									<FaChevronLeft size={20} />
								</button>
								<button
									onClick={nextSlide}
									className="absolute p-3 text-white transition-all duration-300 transform -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/50 hover:bg-black/70 hover:scale-110"
								>
									<FaChevronRight size={20} />
								</button>

								{/* Slide Indicators */}
								<div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
									{previewImages.map((_, index) => (
										<button
											key={index}
											onClick={() => setCurrentSlide(index)}
											className={`w-3 h-3 rounded-full transition-all duration-300 ${
												index === currentSlide
													? 'bg-white scale-125'
													: 'bg-white/50 hover:bg-white/70'
											}`}
										/>
									))}
								</div>
							</div>

							{/* Slide Info */}
							<div className="absolute hidden px-6 py-3 text-white transform -translate-x-1/2 rounded-full bottom-16 left-1/2 bg-black/70 backdrop-blur-sm animate-fade-in-long-delayed sm:block">
								<span className="text-sm font-medium">
									{previewImages[currentSlide].description}
								</span>
							</div>
						</div>
					</div>

					{/* Features Grid */}
					<div className="flex flex-col gap-6">
						<div className="text-center">
							<h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
								ویجت‌های باحال ما! 🎯
							</h2>
							<p className="max-w-2xl mx-auto text-lg text-gray-600">
								هر کدوم از این ویجت‌ها کاری داره که زندگی دیجیتالت رو
								راحت‌تر کنه
							</p>
						</div>

						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
							{features.map((feature, index) => (
								<div
									key={index}
									className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-xl hover:border-blue-200 hover:scale-105"
								>
									<div className="flex items-center justify-center p-4 aspect-video bg-gradient-to-br from-blue-50 to-purple-50">
										<Image
											src={feature.image}
											alt={feature.title}
											className="object-contain max-w-full max-h-full transition-transform duration-300 rounded-lg shadow-md group-hover:scale-110"
											onError={(e) => {
												e.currentTarget.src = `https://placehold.co/400x300?text=${encodeURIComponent(feature.title)}`
											}}
											width={100}
											height={100}
										/>
									</div>
									<div className="p-6">
										<h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
											{feature.title}
										</h3>
										<p className="leading-relaxed text-gray-600">
											{feature.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* More Features Coming */}
					<div className="text-center">
						<div className="max-w-4xl p-8 mx-auto border border-purple-100 bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl">
							<h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
								🚀 و کلیییی فیچر دیگه که منتظر شماست!
							</h3>
							<p className="max-w-2xl mx-auto mb-6 text-lg text-gray-600">
								هر روز داریم فیچرهای جدید و باحال اضافه می‌کنیم. پس همیشه
								چیز جدیدی برای کشف کردن داری!
							</p>
							<div className="flex flex-wrap justify-center gap-3 text-sm">
								<span className="px-3 py-1 text-gray-700 rounded-full bg-white/70">
									👥 مدیریت دوستان
								</span>
								<span className="px-3 py-1 text-gray-700 rounded-full bg-white/70">
									🔖 بوکمارک هوشمند
								</span>
								<span className="px-3 py-1 text-gray-700 rounded-full bg-white/70">
									🎨 تم‌های مختلف
								</span>
								<span className="px-3 py-1 text-gray-700 rounded-full bg-white/70">
									✨ و خیلی بیشتر...
								</span>
							</div>
						</div>
					</div>

					<ContributorsSection />
				</div>
			</div>
		</div>
	)
}
