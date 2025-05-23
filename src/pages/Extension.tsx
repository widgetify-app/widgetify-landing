import { FaChrome, FaEdge, FaFirefox } from 'react-icons/fa'
import { FaBrave } from 'react-icons/fa6'
import { useDocumentTitle } from '../hooks'

const CHROME_EXTENSION_URL =
	'https://chromewebstore.google.com/detail/widgetify/ajaaioiiekongmlakdbellaoglnffmoh'
// Mock data for browser extensions availability
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
		isAvailable: true,
		comingSoon: false,
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
].sort((a, b) => (a.isAvailable === b.isAvailable ? 0 : a.isAvailable ? -1 : 1))

export function Extension() {
	useDocumentTitle('اکستنشن مرورگر')

	return (
		<div className="min-h-screen overflow-hidden">
			{/* Hero Section */}
			<div className="relative px-4 py-20">
				<div className="flex flex-col items-center max-w-6xl mx-auto text-center animate-fade-in">
					<h1 className="mb-3 text-2xl font-bold text-gray-900 md:text-5xl lg:text-6xl animate-slide-down">
						<span className="block p-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
							تب جدید مرورگرتو جذاب کن!
						</span>
					</h1>

					<p className="max-w-2xl mx-auto mb-10 text-lg font-light text-gray-600 md:text-xl animate-fade-in-up">
						تب‌های جدید (نیو تب) مرورگر خود را به یک داشبورد کامل از ویجت‌های کاربردی تبدیل
						کنید و اطلاعات مورد نیاز خود را در یک نگاه ببینید
					</p>

					{/* Download Buttons */}
					<div className="flex flex-col gap-4 mb-12 sm:flex-row animate-fade-in-up">
						{browserExtensions.map((browser) => (
							<div
								key={browser.name}
								className={`flex items-center justify-center px-6 py-3.5 font-medium text-gray-700 transition rounded-lg ${
									browser.isAvailable
										? 'bg-white border cursor-pointer border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:scale-105'
										: 'opacity-60 cursor-not-allowed animate-pulse'
								}`}
								onClick={() => browser.isAvailable && window.open(browser.url, '_blank')}
							>
								<browser.icon size={20} className="ml-2" />
								{browser.name} {browser.comingSoon ? '(به زودی)' : ''}
							</div>
						))}
					</div>

					{/* Preview Image */}
					<div className="relative w-full max-w-4xl mx-auto animate-fade-in-delayed">
						<div className="overflow-hidden shadow-xl rounded-2xl aspect-video animate-slide-up-delayed">
							<img
								src="/extension-land.png"
								alt="ویجتی‌فای"
								className="object-cover w-full h-full"
								onError={(e) => {
									e.currentTarget.src = 'https://placehold.co/1200x675?text=ویجتی‌فای'
								}}
							/>
						</div>
						<div className="absolute px-4 py-2 text-sm font-medium text-white transform -translate-x-1/2 rounded-full bottom-4 left-1/2 bg-black/60 backdrop-blur-sm animate-fade-in-long-delayed">
							تمام اطلاعات مورد نیاز در یک نیـو‌تب
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
