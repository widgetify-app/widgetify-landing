import { motion } from 'framer-motion'
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

// Animation variants
const fadeIn = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6 },
	},
}

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
}

const featureItem = {
	hidden: { opacity: 0, x: -20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			stiffness: 100,
			duration: 0.5,
		},
	},
	hover: {
		scale: 1.02,
		backgroundColor: 'rgba(79, 70, 229, 0.05)',
		transition: { duration: 0.2 },
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

const mockupAnimation = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 50,
			duration: 0.8,
			delay: 0.3,
		},
	},
}

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
				<motion.div
					className="flex flex-col items-center text-center"
					variants={staggerContainer}
				>
					<motion.h1
						className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
						variants={fadeIn}
					>
						<span className="block">تب‌های جدید هوشمند با ویجتی‌فای</span>
					</motion.h1>
					<motion.p
						className="max-w-2xl mx-auto mb-10 text-lg text-blue-100 md:text-xl"
						variants={fadeIn}
					>
						تب‌های جدید مرورگر خود را به یک داشبورد کامل از ویجت‌های کاربردی تبدیل کنید و
						اطلاعات مورد نیاز خود را در یک نگاه ببینید
					</motion.p>

					{/* Download Buttons */}
					<motion.div
						className="flex flex-col gap-3 mb-6 sm:flex-row sm:gap-4"
						variants={staggerContainer}
					>
						{browserExtensions.map((browser) => (
							<motion.div
								key={browser.name}
								className={`px-5 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition ${
									!browser.isAvailable ? 'cursor-not-allowed opacity-75' : ''
								}`}
								variants={browserButtonAnimation}
								whileHover={browser.isAvailable ? 'hover' : 'disabled'}
								animate={browser.comingSoon ? 'disabled' : 'visible'}
							>
								<div className="flex items-center justify-center gap-1">
									<browser.icon size={20} />
									<p>
										{browser.name} {browser.comingSoon ? '(به زودی)' : ''}
									</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>

			<ContainerWrapper>
				{/* Extension Preview */}
				<div className="py-16 md:py-24">
					<motion.div
						className="flex flex-col items-center gap-8 mb-16 md:mb-20 md:flex-row"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
					>
						<motion.div className="w-full md:w-1/2" variants={fadeIn}>
							<motion.h2
								className="mb-6 text-3xl font-bold"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								داشبورد اختصاصی در هر تب جدید
							</motion.h2>
							<motion.p className="mb-6 text-gray-600" variants={fadeIn}>
								با نصب اکستنشن ویجتی‌فای، هر تب جدیدی که باز می‌کنید به یک داشبورد کامل از
								ویجت‌های کاربردی تبدیل می‌شود. دیگر نیازی به باز کردن چندین سایت مختلف برای
								دسترسی به اطلاعات مورد نیاز خود ندارید.
							</motion.p>
							<motion.ul className="space-y-4" variants={staggerContainer}>
								{extensionFeatures.map((feature, index) => (
									<motion.li
										key={index}
										className="flex items-start gap-2 p-2 rounded-lg"
										variants={featureItem}
										whileHover="hover"
									>
										<motion.div
											className="flex-shrink-0 w-5 h-5 mt-1 bg-indigo-500 rounded-full"
											whileHover={{ scale: 1.2 }}
											transition={{ type: 'spring', stiffness: 400 }}
										></motion.div>
										<div>
											<h3 className="font-medium">{feature.title}</h3>
											<p className="text-sm text-gray-500">{feature.description}</p>
										</div>
									</motion.li>
								))}
							</motion.ul>
						</motion.div>

						<motion.div
							className="flex justify-center w-full md:w-1/2"
							variants={mockupAnimation}
						>
							<motion.div
								className="relative"
								initial={{ rotate: -2 }}
								whileHover={{ rotate: 0, scale: 1.05 }}
								transition={{ duration: 0.3 }}
							>
								<motion.div
									className="overflow-hidden bg-white border border-gray-200 shadow-xl w-72 h-96 rounded-xl"
									whileHover={{ boxShadow: '0 20px 30px -10px rgba(59, 130, 246, 0.2)' }}
								>
									<div className="flex items-center justify-between h-8 px-3 bg-gray-100 border-b border-gray-200">
										<div className="flex space-x-1.5 rtl:space-x-reverse">
											<motion.div
												className="w-3 h-3 bg-red-400 rounded-full"
												whileHover={{ scale: 1.2 }}
											></motion.div>
											<motion.div
												className="w-3 h-3 bg-yellow-400 rounded-full"
												whileHover={{ scale: 1.2 }}
											></motion.div>
											<motion.div
												className="w-3 h-3 bg-green-400 rounded-full"
												whileHover={{ scale: 1.2 }}
											></motion.div>
										</div>
										<motion.div
											className="flex items-center px-2 py-1 text-xs bg-gray-200 rounded"
											whileHover={{ backgroundColor: '#e5e7eb' }}
										>
											<FaPlus className="ml-1" size={10} />
											تب جدید
										</motion.div>
									</div>
									<div className="p-4">
										<motion.div
											className="flex items-center justify-center h-16 mb-3 bg-blue-100 rounded-lg"
											whileHover={{ backgroundColor: '#dbeafe' }}
											transition={{ duration: 0.2 }}
										>
											<motion.div
												animate={{
													rotate: [0, 10, 0, -10, 0],
												}}
												transition={{
													duration: 5,
													repeat: Number.POSITIVE_INFINITY,
													repeatType: 'loop',
													ease: 'easeInOut',
												}}
											>
												<MdDashboard className="text-blue-500" size={24} />
											</motion.div>
											<span className="mr-2 font-medium text-blue-700">
												داشبورد ویجتی‌فای
											</span>
										</motion.div>

										<div className="grid grid-cols-2 gap-2 mb-3">
											<motion.div
												className="h-24 p-2 bg-gray-100 rounded-lg"
												whileHover={{ scale: 1.03, backgroundColor: '#f3f4f6' }}
												transition={{ duration: 0.2 }}
											>
												<div className="w-full h-4 mb-1 bg-gray-200 rounded"></div>
												<div className="w-3/4 h-3 mb-2 bg-gray-200 rounded"></div>
												<motion.div
													className="w-full h-12 bg-gray-200 rounded"
													animate={{ opacity: [0.5, 0.8, 0.5] }}
													transition={{
														repeat: Number.POSITIVE_INFINITY,
														duration: 1.5,
														ease: 'easeInOut',
													}}
												></motion.div>
											</motion.div>
											<motion.div
												className="h-24 p-2 bg-gray-100 rounded-lg"
												whileHover={{ scale: 1.03, backgroundColor: '#f3f4f6' }}
												transition={{ duration: 0.2 }}
											>
												<div className="w-full h-4 mb-1 bg-gray-200 rounded"></div>
												<div className="w-3/4 h-3 mb-2 bg-gray-200 rounded"></div>
												<div className="w-full h-12 bg-gray-200 rounded"></div>
											</motion.div>
										</div>

										<motion.div
											className="h-20 bg-gray-100 rounded-lg"
											whileHover={{ scale: 1.02, backgroundColor: '#f3f4f6' }}
											transition={{ duration: 0.2 }}
										>
											<div className="w-full h-4 pt-2 mx-2 mt-2 bg-gray-200 rounded"></div>
											<div className="w-3/4 h-3 mx-2 mt-1 bg-gray-200 rounded"></div>
											<div className="flex justify-between px-2 mt-2">
												<div className="w-10 h-8 bg-gray-200 rounded"></div>
												<motion.div
													className="w-10 h-8 bg-gray-200 rounded"
													animate={{ opacity: [0.5, 0.8, 0.5] }}
													transition={{
														repeat: Number.POSITIVE_INFINITY,
														duration: 2,
														ease: 'easeInOut',
													}}
												></motion.div>
											</div>
										</motion.div>
									</div>
								</motion.div>

								<motion.div
									className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-full shadow-lg -top-4 -right-4"
									whileHover={{ scale: 1.2, rotate: 90 }}
									// @ts-ignore
									transition={{ type: 'spring', stiffness: 200 }}
									animate={{
										boxShadow: [
											'0px 4px 12px rgba(79, 70, 229, 0.3)',
											'0px 8px 20px rgba(79, 70, 229, 0.5)',
											'0px 4px 12px rgba(79, 70, 229, 0.3)',
										],
									}}
									//@ts-ignore
									transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
								>
									<FaPuzzlePiece size={22} />
								</motion.div>
							</motion.div>
						</motion.div>
					</motion.div>

					{/* Features Showcase - New Design */}
					<motion.div
						className="mb-20"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<motion.h2
							className="mb-4 text-3xl font-bold text-center"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							ویژگی‌های برتر ویجتی‌فای
						</motion.h2>
						<motion.p
							className="max-w-2xl mx-auto mb-12 text-center text-gray-500"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							با ویجتی‌فای، تب‌های جدید شما به یک مرکز مدیریت هوشمند تبدیل می‌شوند
						</motion.p>

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
					</motion.div>

					{/* Extension Installation - New Timeline Design */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.7 }}
					>
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
					</motion.div>

					{/* CTA */}
					<motion.div
						className="p-5 text-center text-white bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl md:p-6"
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						whileHover={{ scale: 1.02 }}
					>
						<motion.h2
							className="mb-4 text-2xl font-bold"
							initial={{ opacity: 0, y: -10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2, duration: 0.4 }}
						>
							تب‌های جدید خود را با ویجت‌های کاربردی زیبا کنید!
						</motion.h2>
						<motion.p
							className="mb-5 text-blue-100"
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.3, duration: 0.4 }}
						>
							با نصب اکستنشن ویجتی‌فای، هر تب جدید به یک صفحه جذاب و کاربردی با امکان شخصی
							ساز تبدیل می‌شود
						</motion.p>
					</motion.div>
				</div>
			</ContainerWrapper>
		</>
	)
}
