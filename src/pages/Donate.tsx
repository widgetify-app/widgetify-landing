import { motion } from 'framer-motion'
import { CheckCircle, Coins, Copy, CreditCard, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { RiBtcFill } from 'react-icons/ri'
import ContainerWrapper from '../components/ContainerWrapper'

// Donation platforms data
const donationPlatforms = [
	{
		name: 'دارمت',
		url: 'https://daramet.com/sajjadmrx',
		isAvailable: true,
		icon: CreditCard,
		color: 'from-blue-500 to-indigo-600',
	},
	{
		name: 'کافیته',
		url: 'https://www.coffeete.ir/widgetify',
		isAvailable: true,
		icon: CreditCard,
		color: 'from-gray-400 to-gray-500',
	},
	{
		name: 'زرین پال',
		url: 'https://zarinp.al/sajjadmrx',
		isAvailable: true,
		icon: CreditCard,
		color: 'from-amber-500 to-orange-600',
	},
]

// Crypto donation options
const cryptoOptions = [
	{
		name: 'BTC',
		address: 'bc1qfctjt6a56z8ah9vt3sfhsm9fexncnl80kna0lp',
		network: null,
		isAvailable: true,
		qr: '/btc-qr.jpg',
		color: 'from-amber-500 to-orange-600',
	},
	{
		name: 'USDT',
		network: 'TRC20',
		address: '0x4BE63320940fe4190ea34d5D855E6261395ac836',
		isAvailable: true,
		qr: '/usdt-qr.jpg',
		color: 'from-green-500 to-teal-600',
	},
]

export default function Donate() {
	const [copiedAddress, setCopiedAddress] = useState<string | null>(null)
	const [donationMethod, setDonationMethod] = useState<'traditional' | 'crypto'>(
		'traditional',
	)
	const [selectedPlatform, setSelectedPlatform] = useState<number | null>(null)
	const [selectedCrypto, setSelectedCrypto] = useState<number | null>(null)

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
		selected: {
			y: -5,
			boxShadow:
				'0 10px 25px -5px rgba(59, 130, 246, 0.25), 0 8px 10px -6px rgba(59, 130, 246, 0.25)',
			border: '2px solid #3b82f6',
		},
	}

	const handleCopyAddress = (address: string) => {
		navigator.clipboard.writeText(address)
		setCopiedAddress(address)

		setTimeout(() => {
			setCopiedAddress(null)
		}, 2000)
	}

	return (
		<div className="min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
			{/* Hero Section */}
			<div className="relative py-16 md:py-24">
				<motion.div
					className="flex flex-col items-center max-w-4xl px-4 mx-auto text-center"
					initial="hidden"
					animate="visible"
				>
					<motion.h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
						<motion.span
							className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7 }}
						>
							حمایت از ویجتی‌فای
						</motion.span>
					</motion.h1>

					<motion.p className="max-w-2xl mx-auto mb-6 text-lg font-light text-gray-600 md:text-xl">
						با حمایت مالی از ویجتی‌فای، به ما کمک کنید تا خدمات بهتری ارائه دهیم. تمامی
						مبالغ دریافتی صرف توسعه و نگهداری پروژه خواهد شد.
					</motion.p>

					<motion.div
						className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-3 mb-6"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.3 }}
					/>
				</motion.div>
			</div>

			<ContainerWrapper>
				<div className="space-y-10">
					<section>
						<motion.div
							className="mb-12 text-center"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.6 }}
						>
							<h2 className="mb-2 text-2xl font-bold text-gray-900">
								راه‌های حمایت از پروژه
							</h2>
							<p className="max-w-2xl mx-auto font-light text-gray-600">
								شما می‌توانید با روش‌های مختلف از ویجتی‌فای حمایت کنید و به بهبود عملکرد آن
								کمک نمایید
							</p>
						</motion.div>

						{/* Method Selection Tabs */}
						<div className="flex justify-center mb-8">
							<motion.div className="p-1.5 bg-gray-100 rounded-xl flex">
								<button
									onClick={() => setDonationMethod('traditional')}
									className={`flex items-center cursor-pointer px-6 py-3 rounded-lg ${
										donationMethod === 'traditional'
											? 'bg-white text-blue-600 shadow-sm font-bold'
											: 'text-gray-600 hover:text-gray-800'
									}`}
								>
									<CreditCard className="ml-2" size={20} />
									حمایت ریالی
								</button>
								<button
									onClick={() => setDonationMethod('crypto')}
									className={`flex items-center px-6 py-3 cursor-pointer rounded-lg ${
										donationMethod === 'crypto'
											? 'bg-white text-blue-600 shadow-sm font-bold'
											: 'text-gray-600 hover:text-gray-800'
									}`}
								>
									<Coins className="ml-2" size={20} />
									ارز دیجیتال
								</button>
							</motion.div>
						</div>

						{/* Traditional Payment Section */}
						{donationMethod === 'traditional' && (
							<motion.div
								className="grid grid-cols-1 gap-6 md:grid-cols-3"
								initial="hidden"
								animate="visible"
							>
								{donationPlatforms
									.filter((p) => p.isAvailable)
									.map((platform, index) => (
										<motion.div
											key={index}
											className={`overflow-hidden bg-white border-2 rounded-2xl shadow-sm cursor-pointer ${
												selectedPlatform === index
													? 'border-blue-500'
													: 'border-gray-100 hover:border-blue-200'
											}`}
											variants={cardVariants}
											whileHover="hover"
											animate={selectedPlatform === index ? 'selected' : 'visible'}
											onClick={() => setSelectedPlatform(index)}
										>
											<div className={`px-4 py-3 bg-gradient-to-r ${platform.color}`}>
												<div className="flex items-center text-white">
													<h3 className="text-xl font-bold">{platform.name}</h3>
												</div>
											</div>
											<div className="p-6 text-center">
												<p className="mb-5 font-light text-gray-600">
													پرداخت آنلاین سریع و آسان از طریق {platform.name}
												</p>
												<motion.a
													href={platform.url}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center justify-center w-full px-4 py-3 font-medium text-white transition rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
													whileHover={{ scale: 1.02 }}
													whileTap={{ scale: 0.98 }}
												>
													<ExternalLink size={18} className="ml-2" />
													پرداخت با {platform.name}
												</motion.a>
											</div>
										</motion.div>
									))}
							</motion.div>
						)}

						{/* Crypto Donation Section */}
						{donationMethod === 'crypto' && (
							<motion.div
								className="grid grid-cols-1 gap-8 md:grid-cols-2"
								initial="hidden"
								animate="visible"
							>
								{cryptoOptions.map((crypto, index) => (
									<motion.div
										key={index}
										className={`relative overflow-hidden transition-all bg-white border-2 cursor-pointer rounded-2xl ${
											selectedCrypto === index
												? 'border-blue-500 shadow-md'
												: 'border-gray-200 hover:border-blue-200'
										}`}
										variants={cardVariants}
										whileHover="hover"
										animate={selectedCrypto === index ? 'selected' : 'visible'}
										onClick={() => setSelectedCrypto(index)}
									>
										{/* Currency Header */}
										<div className={`px-6 py-4 bg-gradient-to-r ${crypto.color}`}>
											<div className="flex items-center justify-between">
												<div className="flex items-center gap-2">
													<div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
														{crypto.name === 'BTC' ? (
															<RiBtcFill size={24} className="text-amber-500" />
														) : (
															<svg
																className="w-6 h-6 text-green-500"
																viewBox="0 0 24 24"
																fill="currentColor"
															>
																<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.312 12.401l-4.48-2.243 4.48-7.865v10.108zm.624 0V2.293l4.48 7.865-4.48 2.243zm0 1.107l4.479 2.243-4.48 2.789v-5.032zm-.624 0v5.032l-4.48-2.789 4.48-2.243z" />
															</svg>
														)}
													</div>
													<div className="text-white">
														<h3 className="text-xl font-bold">{crypto.name}</h3>
														{crypto.network && (
															<span className="text-xs opacity-90">
																شبکه {crypto.network}
															</span>
														)}
													</div>
												</div>
												<div className="px-3 py-1 text-xs font-medium text-white rounded-full bg-white/20">
													قابل استفاده
												</div>
											</div>
										</div>

										{/* Address Card */}
										<div className="p-6">
											<div className="mb-4">
												<label className="block mb-2 text-sm font-medium text-gray-700">
													آدرس کیف پول:
												</label>
												<div className="relative">
													<div className="p-3 overflow-x-auto border border-gray-200 rounded-lg bg-gray-50">
														<div className="font-mono text-sm text-gray-700 break-all">
															{crypto.address}
														</div>
													</div>
													<button
														onClick={(e) => {
															e.stopPropagation()
															crypto.address && handleCopyAddress(crypto.address)
														}}
														className={`absolute top-2 left-2 p-2 transition-colors rounded-md ${
															copiedAddress === crypto.address
																? 'bg-green-100 text-green-600'
																: 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
														}`}
													>
														{copiedAddress === crypto.address ? (
															<CheckCircle size={16} />
														) : (
															<Copy size={16} />
														)}
													</button>
												</div>
											</div>

											{/* QR Code */}
											<div className="flex items-center justify-center p-4">
												<div className="flex items-center justify-center w-32 h-32 bg-gray-100 rounded-lg">
													<div className="text-center">
														<div className="text-xs text-gray-400">اسکن کنید</div>
														<div className="w-24 h-24 m-auto mt-1 overflow-hidden border border-gray-300">
															<img
																src={crypto.qr}
																alt={`${crypto.name} QR Code`}
																className="object-contain w-full h-full"
															/>
														</div>
													</div>
												</div>
											</div>

											<div className="pt-4 mt-4 border-t border-gray-100">
												<motion.button
													onClick={(e) => {
														e.stopPropagation()
														crypto.address && handleCopyAddress(crypto.address)
													}}
													className={`w-full cursor-pointer flex items-center justify-center px-4 py-3 transition rounded-lg ${
														copiedAddress === crypto.address
															? 'bg-green-500 text-white'
															: 'bg-gradient-to-r text-white from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
													}`}
													whileHover={{ scale: 1.02 }}
													whileTap={{ scale: 0.98 }}
												>
													{copiedAddress === crypto.address ? (
														<>
															<CheckCircle size={18} className="ml-2" />
															آدرس کپی شد
														</>
													) : (
														<>
															<Copy size={18} className="ml-2" />
															کپی آدرس {crypto.name}
														</>
													)}
												</motion.button>
											</div>
										</div>
									</motion.div>
								))}
							</motion.div>
						)}
					</section>

					<motion.div
						className="p-8 text-center bg-white border border-blue-100 shadow-md rounded-xl"
						transition={{ duration: 0.6 }}
					>
						<div className="inline-flex items-center justify-center w-20 h-20 mb-6 text-4xl text-white rounded-full shadow-lg bg-gradient-to-br from-blue-600 to-purple-600">
							🙏
						</div>
						<h2 className="mb-4 text-2xl font-bold text-gray-900">
							از حمایت شما سپاسگزاریم
						</h2>
						<p className="max-w-2xl mx-auto mb-5 font-light text-gray-600">
							حمایت‌های شما به ما انگیزه می‌دهد تا ویجتی‌فای را روز به روز بهتر کنیم. با تشکر
							از اعتماد شما.
						</p>

						<motion.div
							className="w-24 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
							initial={{ opacity: 0, scale: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						/>
					</motion.div>
				</div>
			</ContainerWrapper>
		</div>
	)
}
