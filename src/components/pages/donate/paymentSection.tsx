'use client'
import { CheckCircle, Coins, Copy, CreditCard, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { RiBtcFill } from 'react-icons/ri'

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
export function PaymentSection() {
	const [donationMethod, setDonationMethod] = useState<'traditional' | 'crypto'>(
		'traditional'
	)

	const [copiedAddress, setCopiedAddress] = useState<string | null>(null)
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
		<>
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
										پرداخت آنلاین سریع و آسان از طریق {platform.name}
									</p>
									<a
										href={platform.url}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center w-full px-4 py-3 font-medium text-white transition rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-[1.02] active:scale-[0.98]"
									>
										<ExternalLink size={18} className="ml-2" />
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
							<div className={`px-6 py-4 bg-gradient-to-r ${crypto.color}`}>
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
													handleCopyAddress(crypto.address)
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
												handleCopyAddress(crypto.address)
										}}
										className={`w-full cursor-pointer flex items-center justify-center px-4 py-3 transition rounded-lg hover:scale-[1.02] active:scale-[0.98] ${
											copiedAddress === crypto.address
												? 'bg-green-500 text-white'
												: 'bg-gradient-to-r text-white from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
										}`}
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
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	)
}
