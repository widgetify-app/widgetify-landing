'use client'

import { CheckCircle, Coins, Copy, CreditCard, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { RiBtcFill } from 'react-icons/ri'
import ContainerWrapper from '../components/ContainerWrapper'
import { useDocumentTitle } from '../hooks'

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
	useDocumentTitle('حمایت مالی')

	const [copiedAddress, setCopiedAddress] = useState<string | null>(null)
	const [donationMethod, setDonationMethod] = useState<'traditional' | 'crypto'>(
		'traditional'
	)
	const [selectedPlatform, setSelectedPlatform] = useState<number | null>(null)
	const [selectedCrypto, setSelectedCrypto] = useState<number | null>(null)

	const handleCopyAddress = (address: string) => {
		navigator.clipboard.writeText(address)
		setCopiedAddress(address)

		setTimeout(() => {
			setCopiedAddress(null)
		}, 2000)
	}

	return (
		<div className="min-h-screen overflow-hidden">
			{/* Hero Section */}
			<div className="relative px-4 py-20">
				<div className="flex flex-col gap-6 mx-auto max-w-7xl">
					{/* Header */}
					<div className="flex flex-col items-center justify-center gap-4 animate-fade-in">
						<h1 className="py-1 text-4xl font-bold text-gray-900 md:text-6xl lg:text-7xl animate-slide-down">
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
								حمایت از ویجتی‌فای
							</span>
						</h1>

						<p className="max-w-3xl mx-auto text-sm font-light text-center text-gray-600 md:text-xl animate-fade-in-up">
							با حمایت مالی از ویجتی‌فای، به ما کمک کنید تا خدمات بهتری ارائه
							دهیم. تمامی مبالغ دریافتی صرف توسعه و نگهداری پروژه خواهد شد.
						</p>

						<div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-3 mb-6 animate-scale-in" />
					</div>
				</div>
			</div>

			<ContainerWrapper>
				<div className="space-y-10">
					<section>
						<div className="mb-12 text-center animate-on-scroll">
							<h2 className="mb-2 text-2xl font-bold text-gray-900">
								راه‌های حمایت از پروژه
							</h2>
							<p className="max-w-2xl mx-auto font-light text-gray-600">
								شما می‌توانید با روش‌های مختلف از ویجتی‌فای حمایت کنید و به
								بهبود عملکرد آن کمک نمایید
							</p>
						</div>

						{/* Method Selection Tabs */}
						<div className="flex justify-center mb-8">
							<div className="p-1.5 bg-gray-100 rounded-xl flex">
								<button
									onClick={() => setDonationMethod('traditional')}
									className={`flex items-center cursor-pointer px-6 py-3 rounded-lg transition-all duration-300 ${
										donationMethod === 'traditional'
											? 'bg-white text-blue-600 shadow-lg font-bold scale-105'
											: 'text-gray-600 hover:text-gray-800 hover:bg-white hover:shadow-md hover:scale-105'
									}`}
								>
									<CreditCard className="ml-2" size={20} />
									حمایت ریالی
								</button>
								<button
									onClick={() => setDonationMethod('crypto')}
									className={`flex items-center px-6 py-3 cursor-pointer rounded-lg transition-all duration-300 ${
										donationMethod === 'crypto'
											? 'bg-white text-blue-600 shadow-lg font-bold scale-105'
											: 'text-gray-600 hover:text-gray-800 hover:bg-white hover:shadow-md hover:scale-105'
									}`}
								>
									<Coins className="ml-2" size={20} />
									ارز دیجیتال
								</button>
							</div>
						</div>

						{/* Traditional Payment Section */}
						{donationMethod === 'traditional' && (
							<div className="grid grid-cols-1 gap-6 md:grid-cols-3 animate-fade-in">
								{donationPlatforms
									.filter((p) => p.isAvailable)
									.map((platform, index) => (
										<div
											key={index}
											className={`overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-xl hover:border-blue-200 hover:scale-105 cursor-pointer ${
												selectedPlatform === index
													? 'border-blue-500 shadow-xl scale-105'
													: ''
											}`}
											onClick={() => setSelectedPlatform(index)}
										>
											<div
												className={`px-4 py-3 bg-gradient-to-r ${platform.color}`}
											>
												<div className="flex items-center text-white">
													<h3 className="text-xl font-bold">
														{platform.name}
													</h3>
												</div>
											</div>
											<div className="p-6 text-center">
												<p className="mb-5 font-light text-gray-600">
													پرداخت آنلاین سریع و آسان از طریق{' '}
													{platform.name}
												</p>
												<a
													href={platform.url}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center justify-center w-full px-4 py-3 font-medium text-white transition rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-[1.02] active:scale-[0.98]"
												>
													<ExternalLink
														size={18}
														className="ml-2"
													/>
													پرداخت با {platform.name}
												</a>
											</div>
										</div>
									))}
							</div>
						)}

						{/* Crypto Donation Section */}
						{donationMethod === 'crypto' && (
							<div className="grid grid-cols-1 gap-8 md:grid-cols-2 animate-fade-in">
								{cryptoOptions.map((crypto, index) => (
									<div
										key={index}
										className={`relative overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-xl hover:border-blue-200 hover:scale-105 cursor-pointer ${
											selectedCrypto === index
												? 'border-blue-500 shadow-xl scale-105'
												: ''
										}`}
										onClick={() => setSelectedCrypto(index)}
									>
										{/* Currency Header */}
										<div
											className={`px-6 py-4 bg-gradient-to-r ${crypto.color}`}
										>
											<div className="flex items-center justify-between">
												<div className="flex items-center gap-2">
													<div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
														{crypto.name === 'BTC' ? (
															<RiBtcFill
																size={24}
																className="text-amber-500"
															/>
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
														<h3 className="text-xl font-bold">
															{crypto.name}
														</h3>
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
															crypto.address &&
																handleCopyAddress(
																	crypto.address
																)
														}}
														className={`absolute top-2 left-2 p-2 transition-colors rounded-md ${
															copiedAddress ===
															crypto.address
																? 'bg-green-100 text-green-600'
																: 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
														}`}
													>
														{copiedAddress ===
														crypto.address ? (
															<CheckCircle size={16} />
														) : (
															<Copy size={16} />
														)}
													</button>
												</div>
											</div>

											{/* QR Code */}
											<div className="flex items-center justify-center p-4 aspect-video bg-gradient-to-br from-blue-50 to-purple-50">
												<div className="text-center">
													<div className="mb-2 text-xs text-gray-400">
														اسکن کنید
													</div>
													<div className="w-24 h-24 overflow-hidden border border-gray-300 rounded-lg shadow-md">
														<Image
															src={crypto.qr}
															alt={`${crypto.name} QR Code`}
															className="object-contain w-full h-full"
															width={96}
															height={96}
														/>
													</div>
												</div>
											</div>

											<div className="pt-4 mt-4 border-t border-gray-100">
												<button
													onClick={(e) => {
														e.stopPropagation()
														crypto.address &&
															handleCopyAddress(
																crypto.address
															)
													}}
													className={`w-full cursor-pointer flex items-center justify-center px-4 py-3 transition rounded-lg hover:scale-[1.02] active:scale-[0.98] ${
														copiedAddress === crypto.address
															? 'bg-green-500 text-white'
															: 'bg-gradient-to-r text-white from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
													}`}
												>
													{copiedAddress === crypto.address ? (
														<>
															<CheckCircle
																size={18}
																className="ml-2"
															/>
															آدرس کپی شد
														</>
													) : (
														<>
															<Copy
																size={18}
																className="ml-2"
															/>
															کپی آدرس {crypto.name}
														</>
													)}
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
						)}
					</section>

					<div className="max-w-4xl p-8 mx-auto border border-purple-100 bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl animate-on-scroll">
						<div className="text-center">
							<div className="inline-flex items-center justify-center w-20 h-20 mb-6 text-4xl text-white rounded-full shadow-lg bg-gradient-to-br from-blue-600 to-purple-600">
								🙏
							</div>
							<h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
								از حمایت شما سپاسگزاریم
							</h2>
							<p className="max-w-2xl mx-auto mb-6 text-lg text-gray-600">
								حمایت‌های شما به ما انگیزه می‌دهد تا ویجتی‌فای را روز به روز
								بهتر کنیم. با تشکر از اعتماد شما.
							</p>

							<div className="flex flex-wrap justify-center gap-3 mb-6 text-sm">
								<span className="px-3 py-1 text-gray-700 rounded-full bg-white/70">
									💝 سپاسگزاریم
								</span>
								<span className="px-3 py-1 text-gray-700 rounded-full bg-white/70">
									🚀 پیشرفت مداوم
								</span>
								<span className="px-3 py-1 text-gray-700 rounded-full bg-white/70">
									👥 جامعه فعال
								</span>
								<span className="px-3 py-1 text-gray-700 rounded-full bg-white/70">
									✨ همیشه بهتر
								</span>
							</div>

							<div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-scale-in" />
						</div>
					</div>
				</div>
			</ContainerWrapper>
		</div>
	)
}
