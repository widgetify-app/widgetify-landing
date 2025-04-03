import { motion } from 'framer-motion'
import { ChevronDown, Download, Globe, Laptop, Puzzle } from 'lucide-react'
import { Link } from 'react-router-dom'
import ContainerWrapper from '../components/ContainerWrapper'
import ContributorsSection from '../components/ContributorsSection'
import FeaturesSection from '../components/FeaturesSection'

export default function Home() {
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

	const imageReveal = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 100,
				delay: 0.3,
				duration: 0.6,
			},
		},
	}

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 100,
				duration: 0.5,
			},
		},
		hover: {
			y: -5,
			boxShadow:
				'0 10px 25px -5px rgba(59, 130, 246, 0.15), 0 8px 10px -6px rgba(59, 130, 246, 0.15)',
			transition: { duration: 0.2 },
		},
	}

	return (
		<div className="min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
			{/* Hero Section */}
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
							ویجتی‌فای
						</motion.span>
						<motion.span
							className="block mt-2 text-3xl font-medium text-gray-700 md:text-4xl"
							variants={fadeIn}
						>
							ویجت‌های هوشمند برای همه پلتفرم‌ها
						</motion.span>
					</motion.h1>

					<motion.p
						className="max-w-2xl mb-10 text-lg text-gray-600 md:text-xl"
						variants={fadeIn}
					>
						با ویجتی‌فای، اطلاعات مورد نیاز خود را در قالب ویجت‌های زیبا و کاربردی در
						دسکتاپ، وب و مرورگر خود داشته باشید
					</motion.p>

					{/* Download Buttons */}
					<motion.div
						className="flex flex-col gap-4 mb-12 sm:flex-row"
						variants={staggerContainer}
					>
						{/* Extension button with primary styling */}
						<motion.div
							variants={fadeIn}
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.97 }}
						>
							<Link
								to="/extension"
								className="flex items-center justify-center px-6 py-3.5 font-medium text-white transition bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-purple-700"
							>
								<Puzzle className="ml-2" size={20} />
								اکستنشن مرورگر
							</Link>
						</motion.div>

						<motion.a
							href="https://github.com/widgetify-app/widgetify-desktop/releases"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center px-6 py-3.5 font-medium text-gray-700 transition bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300"
							variants={fadeIn}
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.97 }}
						>
							<Laptop className="ml-2" size={20} />
							دانلود نسخه دسکتاپ
						</motion.a>

						<motion.a
							href="https://app.widgetify.ir"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center px-6 py-3.5 font-medium text-gray-700 transition bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300"
							variants={fadeIn}
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.97 }}
						>
							<Globe className="ml-2" size={20} />
							نسخه وب (PWA)
						</motion.a>
					</motion.div>

					{/* Preview Image */}
					<motion.div
						className="relative w-full max-w-4xl mx-auto"
						variants={imageReveal}
					>
						<motion.div
							className="overflow-hidden shadow-xl rounded-2xl aspect-video"
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.6 }}
						>
							<img
								src="/banner.png"
								alt="ویجتی‌فای"
								className="object-cover w-full h-full"
								onError={(e) => {
									e.currentTarget.src = 'https://placehold.co/1200x675?text=widgetify.ir'
								}}
							/>
						</motion.div>

						<motion.div
							className="absolute px-4 py-2 text-sm font-medium text-white transform -translate-x-1/2 rounded-full bottom-4 left-1/2 bg-black/60 backdrop-blur-sm"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.9, duration: 0.5 }}
						>
							مشاهده قیمت ارزها، آب و هوا و تقویم در یک نگاه
						</motion.div>
					</motion.div>

					{/* Scroll indicator */}
					<motion.div
						className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.2, duration: 0.5 }}
					>
						<motion.div
							animate={{ y: [0, 10, 0] }}
							transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
						>
							<ChevronDown className="text-blue-500" size={32} />
						</motion.div>
					</motion.div>
				</motion.div>
			</div>

			<ContainerWrapper>
				{/* Platforms Section */}
				<div className="py-16">
					<motion.h2
						className="mb-12 text-3xl font-bold text-center text-gray-900"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.6 }}
					>
						در هر پلتفرمی که هستید، ویجتی‌فای همراه شماست
					</motion.h2>

					<motion.div
						className="grid grid-cols-1 gap-8 md:grid-cols-3"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}
						variants={staggerContainer}
					>
						{/* Browser Extension Card - Highlighted as preferred option */}
						<motion.div
							className="relative p-8 overflow-hidden transition bg-white border-2 border-blue-200 shadow-lg rounded-xl"
							variants={cardVariants}
							whileHover="hover"
						>
							<div className="absolute top-0 right-0 px-3 py-1 text-xs text-white bg-blue-600 rounded-bl-lg">
								پیشنهاد ما
							</div>
							<motion.div
								className="flex items-center justify-center w-16 h-16 mx-auto mb-5 text-white bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl"
								whileHover={{ rotate: 10, scale: 1.05 }}
								transition={{ type: 'spring', stiffness: 400 }}
							>
								<Puzzle size={32} />
							</motion.div>
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
						</motion.div>

						<motion.div
							className="p-8 transition bg-white border border-gray-100 shadow-md rounded-xl"
							variants={cardVariants}
							whileHover="hover"
						>
							<motion.div
								className="flex items-center justify-center w-16 h-16 mx-auto mb-5 text-white bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl"
								whileHover={{ rotate: 10, scale: 1.05 }}
								transition={{ type: 'spring', stiffness: 400 }}
							>
								<Laptop size={32} />
							</motion.div>
							<h3 className="mb-3 text-xl font-bold text-center text-gray-900">
								نسخه دسکتاپ
							</h3>
							<p className="mb-5 font-light text-center text-gray-600">
								اجرا بر روی ویندوز، مک و لینوکس با رابط کاربری اختصاصی و عملکرد بهینه
							</p>
							<div className="text-center">
								<motion.a
									href="https://github.com/widgetify-app/widgetify-desktop/releases"
									className="inline-flex items-center justify-center w-full px-4 py-2 font-medium text-gray-700 transition bg-gray-100 rounded-lg hover:bg-gray-200"
									whileHover={{ scale: 1.02 }}
									transition={{ type: 'spring', stiffness: 400 }}
								>
									دانلود <Download size={16} className="mr-2" />
								</motion.a>
							</div>
						</motion.div>

						<motion.div
							className="p-8 transition bg-white border border-gray-100 shadow-md rounded-xl"
							variants={cardVariants}
							whileHover="hover"
						>
							<motion.div
								className="flex items-center justify-center w-16 h-16 mx-auto mb-5 text-white bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl"
								whileHover={{ rotate: 10, scale: 1.05 }}
								transition={{ type: 'spring', stiffness: 400 }}
							>
								<Globe size={32} />
							</motion.div>
							<h3 className="mb-3 text-xl font-bold text-center text-gray-900">
								نسخه وب (PWA)
							</h3>
							<p className="mb-5 font-light text-center text-gray-600">
								دسترسی در هر دستگاهی با مرورگر، قابل نصب به عنوان اپلیکیشن
							</p>
							<div className="text-center">
								<motion.a
									href="https://app.widgetify.ir"
									className="inline-flex items-center justify-center w-full px-4 py-2 font-medium text-gray-700 transition bg-gray-100 rounded-lg hover:bg-gray-200"
									whileHover={{ scale: 1.02 }}
									transition={{ type: 'spring', stiffness: 400 }}
								>
									مشاهده نسخه وب <Globe size={16} className="mr-2" />
								</motion.a>
							</div>
						</motion.div>
					</motion.div>
				</div>

				<FeaturesSection />

				<ContributorsSection />
			</ContainerWrapper>
		</div>
	)
}
