import { FaChrome, FaEdge, FaFirefox } from 'react-icons/fa'

// Mock data for browser extensions availability
const browserExtensions = [
	{
		name: 'گوگل کروم',
		icon: FaChrome,
		url: 'https://chromewebstore.google.com/detail/widgetify/ajaaioiiekongmlakdbellaoglnffmoh',
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
		name: 'ادج',
		icon: FaEdge,
		url: 'https://chromewebstore.google.com/detail/widgetify/ajaaioiiekongmlakdbellaoglnffmoh',
		isAvailable: true,
		comingSoon: false,
	},
].sort((a, b) => (a.isAvailable === b.isAvailable ? 0 : a.isAvailable ? -1 : 1))

export function Extension() {
	return (
		<div className="min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
			<div className="relative px-4 py-20">
				<div className="flex flex-col items-center max-w-6xl mx-auto text-center animate-fade-in">
					<h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl animate-slide-down">
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
							تب‌های جدید هوشمند با ویجتی‌فای
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
				</div>
			</div>
		</div>
	)
}
