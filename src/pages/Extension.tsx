import { motion } from 'framer-motion'
import { FaChrome, FaEdge, FaFirefox } from 'react-icons/fa'

// Animation variants
const fadeIn = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5 },
	},
}

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
		},
	},
}

const browserButtonAnimation = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 100,
		},
	},
	hover: {
		scale: 1.05,
		transition: { duration: 0.2 },
	},
	disabled: {
		scale: [1, 0.98, 1],
		opacity: [0.7, 0.75, 0.7],
		transition: { repeat: Number.POSITIVE_INFINITY, duration: 3, ease: 'easeInOut' },
	},
}

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
			{/* Hero Section with Pattern Background */}
			<div className="relative px-4 py-20">
				<motion.div
					className="flex flex-col items-center max-w-6xl mx-auto text-center"
					initial="hidden"
					animate="visible"
					variants={staggerContainer}
				>
					<motion.h1
						className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl"
						variants={fadeIn}
					>
						<motion.span
							className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
							variants={fadeIn}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7 }}
						>
							تب‌های جدید هوشمند با ویجتی‌فای
						</motion.span>
					</motion.h1>

					<motion.p
						className="max-w-2xl mx-auto mb-10 text-lg font-light text-gray-600 md:text-xl"
						variants={fadeIn}
					>
						تب‌های جدید (نیو تب) مرورگر خود را به یک داشبورد کامل از ویجت‌های کاربردی تبدیل
						کنید و اطلاعات مورد نیاز خود را در یک نگاه ببینید
					</motion.p>

					{/* Download Buttons */}
					<motion.div
						className="flex flex-col gap-4 mb-12 sm:flex-row"
						variants={staggerContainer}
					>
						{browserExtensions.map((browser) => (
							<motion.div
								key={browser.name}
								className={`flex items-center justify-center px-6 py-3.5 font-medium text-gray-700 transition rounded-lg ${
									browser.isAvailable
										? 'bg-white border cursor-pointer border-gray-200 hover:bg-gray-50 hover:border-gray-300'
										: 'opacity-60 cursor-not-allowed'
								}`}
								variants={browserButtonAnimation}
								whileHover={browser.isAvailable ? 'hover' : 'disabled'}
								animate={browser.comingSoon ? 'disabled' : 'visible'}
								onClick={() => browser.isAvailable && window.open(browser.url, '_blank')}
							>
								<browser.icon size={20} className="ml-2" />
								{browser.name} {browser.comingSoon ? '(به زودی)' : ''}
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</div>
	)
}
