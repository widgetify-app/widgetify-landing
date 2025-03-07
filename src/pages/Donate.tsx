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
		name: 'زرین پال',
		url: 'https://zarinp.al/sajjadmrx',
		isAvailable: true,
		icon: CreditCard,
		color: 'from-amber-500 to-orange-600',
	},
	{
		name: 'به زودی',
		url: null,
		isAvailable: false,
		icon: CreditCard,
		color: 'from-gray-400 to-gray-500',
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

	const handleCopyAddress = (address: string) => {
		navigator.clipboard.writeText(address)
		setCopiedAddress(address)

		setTimeout(() => {
			setCopiedAddress(null)
		}, 2000)
	}

	return (
		<>
			<div className="relative py-16 text-white md:py-24 bg-gradient-to-br from-blue-600 to-purple-700">
				<div className="flex flex-col items-center text-center">
					<h1 className="mb-6 text-4xl font-bold md:text-5xl">
						<span className="block">حمایت از ویجتی‌فای</span>
					</h1>
					<p className="max-w-2xl mx-auto mb-6 text-lg text-blue-100 md:text-xl">
						با حمایت مالی از ویجتی‌فای، به ما کمک کنید تا خدمات بهتری ارائه دهیم. تمامی
						مبالغ دریافتی صرف توسعه و نگهداری پروژه خواهد شد.
					</p>
				</div>
			</div>

			<ContainerWrapper>
				<div className="py-12">
					<div className="space-y-12">
						{/* Donation Platforms - Redesigned */}
						<section className="mb-16">
							<h2 className="mb-8 text-2xl font-bold text-center">
								راه‌های حمایت از پروژه
							</h2>

							{/* Featured Platform */}
							<div className="p-8 mb-10 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
								<div className="flex flex-col items-center md:flex-row">
									<div className="w-full mb-6 text-center md:w-1/2 md:mb-0 md:text-right">
										<div className="inline-flex items-center justify-center p-4 mb-4 text-white bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl">
											<CreditCard size={32} />
										</div>
										<h3 className="mb-3 text-2xl font-bold text-blue-900">
											پلتفرم پیشنهادی: دارمت
										</h3>
										<p className="mb-6 text-gray-700">
											روشی سریع و امن برای حمایت مالی از پروژه. با استفاده از درگاه دارمت،
											می‌توانید در کمترین زمان از ویجتی‌فای پشتیبانی کنید.
										</p>
										<a
											href="https://daramet.com/sajjadmrx"
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center px-6 py-3 text-white transition rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
										>
											<CreditCard className="ml-2" size={18} />
											حمایت از طریق دارمت
										</a>
									</div>

									<div className="flex justify-center w-full md:w-1/2">
										<div className="relative w-60 h-60">
											<div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-br from-blue-200/30 to-indigo-200/30 animate-pulse"></div>
											<div className="absolute flex items-center justify-center rounded-full top-4 left-4 right-4 bottom-4 bg-gradient-to-br from-blue-100 to-indigo-100">
												<div className="p-8 bg-white rounded-full shadow-sm">
													<CreditCard size={80} className="text-indigo-600" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Alternative Donation Methods */}
							<div className="mb-6">
								<h3 className="mb-4 text-xl font-medium text-center">
									سایر روش‌های حمایت
								</h3>

								<div className="flex flex-wrap justify-center gap-4">
									{donationPlatforms
										.filter((p) => p.name !== 'دارمت' && p.isAvailable)
										.map((platform, index) => (
											<a
												key={index}
												href={platform.url || '#'}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 px-6 py-4 transition bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-200"
											>
												<div
													className={`flex items-center justify-center w-10 h-10  text-white rounded-lg bg-gradient-to-br ${platform.color}`}
												>
													<platform.icon size={18} />
												</div>
												<div>
													<span className="font-medium">{platform.name}</span>
												</div>
												<ExternalLink size={16} className="mr-2 opacity-50" />
											</a>
										))}

									{donationPlatforms
										.filter((p) => !p.isAvailable)
										.map((platform, index) => (
											<div
												key={index}
												className="flex items-center gap-2 px-6 py-4 border border-gray-200 bg-gray-50 rounded-xl opacity-60"
											>
												<div
													className={`flex items-center justify-center w-10 h-10  text-white rounded-lg bg-gradient-to-br ${platform.color}`}
												>
													<platform.icon size={18} />
												</div>
												<div>
													<span className="font-medium">{platform.name}</span>
													<span className="mr-2 text-xs text-gray-500">(به زودی)</span>
												</div>
											</div>
										))}
								</div>
							</div>

							{/* Why Support Section */}
							<div className="p-6 mt-10 bg-white border border-gray-100 rounded-xl">
								<h3 className="mb-4 text-lg font-semibold text-center">
									چرا از ویجتی‌فای حمایت کنیم؟
								</h3>

								<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
									<div className="flex p-4 rounded-lg bg-blue-50">
										<div className="flex items-center justify-center w-10 h-10 ml-3 bg-blue-100 rounded-full">
											<CheckCircle size={18} className="text-blue-600" />
										</div>
										<div>
											<h4 className="font-medium">توسعه قابلیت‌های جدید</h4>
											<p className="text-sm text-gray-600">
												کمک به اضافه کردن ویژگی‌های جدید
											</p>
										</div>
									</div>

									<div className="flex p-4 rounded-lg bg-green-50">
										<div className="flex items-center justify-center w-10 h-10 ml-3 bg-green-100 rounded-full">
											<CheckCircle size={18} className="text-green-600" />
										</div>
										<div>
											<h4 className="font-medium">بهبود عملکرد</h4>
											<p className="text-sm text-gray-600">
												ارتقای سرعت و کارایی نرم‌افزار
											</p>
										</div>
									</div>

									<div className="flex p-4 rounded-lg bg-amber-50">
										<div className="flex items-center justify-center w-10 h-10 ml-3 rounded-full bg-amber-100">
											<CheckCircle size={18} className="text-amber-600" />
										</div>
										<div>
											<h4 className="font-medium">حمایت از پروژه متن‌باز</h4>
											<p className="text-sm text-gray-600">
												کمک به تداوم یک پروژه ایرانی
											</p>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Crypto Donations - Completely Redesigned */}
						<section className="mb-16">
							<div className="flex flex-col items-center mb-10 text-center">
								<div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-gradient-to-br from-blue-600 to-purple-700">
									<Coins size={32} />
								</div>
								<h2 className="mb-2 text-2xl font-bold">حمایت با ارز دیجیتال</h2>
								<p className="max-w-2xl text-gray-600">
									برای کسانی که ترجیح می‌دهند از طریق ارزهای دیجیتال از ویجتی‌فای حمایت
									کنند، آدرس‌های زیر را در اختیار شما قرار می‌دهیم
								</p>
							</div>

							<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
								{cryptoOptions.map((crypto, index) => (
									<div
										key={index}
										className="relative overflow-hidden transition-all bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 rounded-2xl"
									>
										{/* Currency Header */}
										<div className={`px-6 py-4 bg-gradient-to-r ${crypto.color}`}>
											<div className="flex items-center justify-between">
												<div className="flex items-center gap-2">
													<div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
														{crypto.name === 'BTC' ? (
															<RiBtcFill size={50} className="text-amber-400" />
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
														onClick={() =>
															crypto.address && handleCopyAddress(crypto.address)
														}
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

											{/* QR Code placeholder */}
											<div className="flex items-center justify-center p-4">
												<div className="flex items-center justify-center w-32 h-32 bg-gray-100 rounded-lg">
													{/* This would be replaced with an actual QR code component */}
													<div className="text-center">
														<div className="text-xs text-gray-400">اسکن کنید</div>
														<div className="w-24 h-24 m-auto mt-1 bg-gray-200 border border-gray-300">
															{/* QR code would render here */}
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
												<button
													onClick={() =>
														crypto.address && handleCopyAddress(crypto.address)
													}
													className={`w-full flex items-center justify-center px-4 py-3 transition rounded-lg ${
														copiedAddress === crypto.address
															? 'bg-green-500 text-white'
															: 'bg-gradient-to-r text-white from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800'
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

							{/* Additional Info Card */}
							<div className="p-5 mt-8 border border-blue-100 rounded-xl bg-blue-50">
								<div className="flex">
									<div className="flex items-center justify-center w-10 h-10 ml-3 bg-blue-100 rounded-full">
										<svg
											className="w-5 h-5 text-blue-600"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<div>
										<h4 className="font-medium text-blue-800">نکته مهم</h4>
										<p className="text-sm text-blue-700">
											لطفاً دقت داشته باشید که آدرس‌های فوق را فقط با شبکه مشخص شده ارسال
											کنید. ارسال رمزارز در شبکه اشتباه ممکن است به از دست رفتن دارایی
											منجر شود.
										</p>
									</div>
								</div>
							</div>
						</section>

						{/* Thank You Message */}
						<div className="p-8 text-center text-white bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl">
							<h2 className="mb-4 text-2xl font-bold">از حمایت شما سپاسگزاریم</h2>
							<p className="mb-5 text-blue-100">
								حمایت‌های شما به ما انگیزه می‌دهد تا ویجتی‌فای را روز به روز بهتر کنیم
							</p>
						</div>
					</div>
				</div>
			</ContainerWrapper>
		</>
	)
}
