import { motion } from 'framer-motion'
import { Download, Globe, Laptop, Puzzle } from 'lucide-react'
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

	const imageReveal = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 100,
				delay: 0.4,
				duration: 0.8,
			},
		},
	}

	const cardVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 100,
				duration: 0.6,
			},
		},
		hover: {
			y: -5,
			boxShadow:
				'0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)',
			transition: { duration: 0.2 },
		},
	}

	return (
		<>
			<div className="relative py-20 text-white bg-gradient-to-br from-blue-600 to-purple-700">
				<motion.div
					className="flex flex-col items-center text-center"
					initial="hidden"
					animate="visible"
					variants={staggerContainer}
				>
					<motion.h1
						className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
						variants={fadeIn}
					>
						<motion.span
							className="block"
							variants={fadeIn}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7 }}
						>
							ویجتی‌فای
						</motion.span>
						<motion.span
							className="block mt-2 text-3xl font-medium text-blue-100 md:text-4xl"
							variants={fadeIn}
						>
							ویجت‌های هوشمند برای همه پلتفرم‌ها
						</motion.span>
					</motion.h1>

					<motion.p
						className="max-w-2xl mb-12 text-lg text-blue-100 md:text-xl"
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
						{/* Extension button - Now first and with more prominence */}
						<motion.div variants={fadeIn} whileHover="hover" whileTap={{ scale: 0.95 }}>
							<Link
								to="/extension"
								className="flex items-center justify-center px-6 py-3 font-medium text-blue-600 transition bg-white rounded-lg hover:bg-blue-50"
							>
								<Puzzle className="ml-2" size={20} />
								اکستنشن مرورگر
							</Link>
						</motion.div>

						<motion.a
							href="https://github.com/widgetify-app/widgetify-desktop/releases"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center px-6 py-3 font-medium transition border rounded-lg border-white/30 hover:bg-white/10"
							variants={fadeIn}
							whileHover="hover"
							whileTap={{ scale: 0.95 }}
						>
							<Laptop className="ml-2" size={20} />
							دانلود نسخه دسکتاپ
						</motion.a>

						<motion.a
							href="https://app.widgetify.ir"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center px-6 py-3 font-medium transition border rounded-lg border-white/30 hover:bg-white/10"
							variants={fadeIn}
							whileHover="hover"
							whileTap={{ scale: 0.95 }}
						>
							<Globe className="ml-2" size={20} />
							نسخه وب (PWA)
						</motion.a>
					</motion.div>

					{/* Preview Image */}
					<motion.div
						className="relative w-full max-w-4xl mx-auto mt-8"
						variants={imageReveal}
					>
						<motion.div
							className="overflow-hidden shadow-2xl rounded-2xl aspect-video"
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5, duration: 0.8 }}
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
							className="absolute px-4 py-2 text-xs text-white transform -translate-x-1/2 rounded-full bottom-4 left-1/2 bg-black/50 backdrop-blur-sm"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.2, duration: 0.5 }}
						>
							مشاهده قیمت ارزها، آب و هوا و تقویم در یک نگاه
						</motion.div>
					</motion.div>
				</motion.div>
			</div>

			<ContainerWrapper>
				{/* Platforms Section */}
				<div className="py-8">
					<motion.h2
						className="mb-12 text-3xl font-bold text-center"
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
						<motion.div
							className="p-6 transition bg-white shadow rounded-xl"
							variants={cardVariants}
							whileHover="hover"
						>
							<motion.div
								className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl"
								whileHover={{ rotate: 10, scale: 1.05 }}
								transition={{ type: 'spring', stiffness: 400 }}
							>
								<Laptop size={32} />
							</motion.div>
							<h3 className="mb-3 text-xl font-bold text-center">نسخه دسکتاپ</h3>
							<p className="mb-4 text-center text-gray-600">
								اجرا بر روی ویندوز، مک و لینوکس با رابط کاربری اختصاصی و عملکرد بهینه
							</p>
							<div className="text-center">
								<motion.a
									href="https://github.com/widgetify-app/widgetify-desktop/releases"
									className="inline-flex items-center text-blue-600 hover:underline"
									whileHover={{ x: 5 }}
									transition={{ type: 'spring', stiffness: 400 }}
								>
									دانلود <Download size={16} className="mr-1" />
								</motion.a>
							</div>
						</motion.div>

						<motion.div
							className="p-6 transition bg-white shadow rounded-xl"
							variants={cardVariants}
							whileHover="hover"
						>
							<motion.div
								className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl"
								whileHover={{ rotate: 10, scale: 1.05 }}
								transition={{ type: 'spring', stiffness: 400 }}
							>
								<Globe size={32} />
							</motion.div>
							<h3 className="mb-3 text-xl font-bold text-center">نسخه وب (PWA)</h3>
							<p className="mb-4 text-center text-gray-600">
								دسترسی در هر دستگاهی با مرورگر، قابل نصب به عنوان اپلیکیشن
							</p>
							<div className="text-center">
								<motion.a
									href="https://app.widgetify.ir"
									className="inline-flex items-center text-blue-600 hover:underline"
									whileHover={{ x: 5 }}
									transition={{ type: 'spring', stiffness: 400 }}
								>
									مشاهده <Globe size={16} className="mr-1" />
								</motion.a>
							</div>
						</motion.div>

						<motion.div
							className="p-6 transition bg-white shadow rounded-xl"
							variants={cardVariants}
							whileHover="hover"
						>
							<motion.div
								className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl"
								whileHover={{ rotate: 10, scale: 1.05 }}
								transition={{ type: 'spring', stiffness: 400 }}
							>
								<Puzzle size={32} />
							</motion.div>
							<h3 className="mb-3 text-xl font-bold text-center">اکستنشن مرورگر</h3>
							<p className="mb-4 text-center text-gray-600">
								دسترسی سریع به ویجت‌ها در مرورگرهای محبوب
							</p>
							<div className="text-center">
								<Link
									to="/extension"
									className="inline-flex items-center text-blue-600 hover:underline"
									style={{ display: 'inline-flex' }}
								>
									نصب <Download size={16} className="mr-1" />
								</Link>
							</div>
						</motion.div>
					</motion.div>
				</div>

				<FeaturesSection />

				<motion.div
					className="p-8 text-center text-white bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.7 }}
				>
					<motion.h2
						className="mb-4 text-2xl font-bold"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2, duration: 0.6 }}
					>
						با ویجتی‌فای، همه چیز را در یک نگاه ببینید
					</motion.h2>

					<motion.p
						className="mb-6 text-blue-100"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.4, duration: 0.6 }}
					>
						همین حالا نسخه مورد نظر خود را انتخاب کرده و از ویجتی‌فای استفاده کنید
					</motion.p>

					<motion.div
						className="flex flex-wrap justify-center gap-4"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={staggerContainer}
					>
						{/* Extension button prioritized and highlighted */}
						<Link
							to="/extension"
							className="flex items-center px-6 py-3 text-indigo-600 transition duration-200 bg-white rounded-lg hover:bg-indigo-50"
							style={{ display: 'flex' }}
						>
							<Puzzle className="ml-2" size={20} />
							نصب اکستنشن مرورگر
						</Link>

						<motion.a
							href="https://github.com/widgetify-app/widgetify-desktop/releases"
							className="flex items-center px-6 py-3 text-white transition duration-200 bg-transparent border rounded-lg border-white/30 hover:bg-white/10"
							target="_blank"
							rel="noopener noreferrer"
							variants={fadeIn}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Download className="ml-2" size={20} />
							دانلود نسخه دسکتاپ
						</motion.a>

						<motion.a
							href="https://app.widgetify.ir"
							className="flex items-center px-6 py-3 text-white transition duration-200 bg-transparent border rounded-lg border-white/30 hover:bg-white/10"
							target="_blank"
							rel="noopener noreferrer"
							variants={fadeIn}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Globe className="ml-2" size={20} />
							نسخه وب
						</motion.a>
					</motion.div>
				</motion.div>

				<ContributorsSection />
			</ContainerWrapper>
		</>
	)
}
