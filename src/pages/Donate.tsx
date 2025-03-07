import { Link } from 'react-router-dom'
import FixedBackground from '../components/FixedBackground'
import FooterSection from '../components/FooterSection'

// Donation platforms data
const donationPlatforms = [
	{
		name: 'دارمت',
		url: 'https://daramet.com/sajjadmrx',
		isAvailable: true,
	},
	{
		name: 'زرین پال',
		url: 'https://zarinp.al/sajjadmrx',
		isAvailable: true,
	},
	{
		name: 'به زودی',
		url: null,
		isAvailable: false,
	},
]

// Crypto donation options
const cryptoOptions = [
	{
		name: 'BTC',
		address: 'bc1qfctjt6a56z8ah9vt3sfhsm9fexncnl80kna0lp',
		network: null,
		isAvailable: true,
	},
	{
		name: 'USDT',
		network: 'TRC20',
		address: '0x4BE63320940fe4190ea34d5D855E6261395ac836',
		isAvailable: true,
	},
]

export default function Donate() {
	const handleCopyAddress = (address: string) => {
		navigator.clipboard.writeText(address)
		alert('آدرس کپی شد!')
	}

	return (
		<>
			<Link to="/" className="flex items-center mb-8 text-blue-600 hover:underline">
				← بازگشت به صفحه اصلی
			</Link>

			<div className="max-w-2xl p-8 mx-auto bg-white rounded-lg shadow-md">
				<h1 className="mb-8 text-3xl font-bold text-center">حمایت از ویجتیفای</h1>
				<p className="mb-8 text-center text-gray-600">
					با حمایت مالی از ویجتیفای، به ما کمک کنید تا خدمات بهتری ارائه دهیم. تمامی مبالغ
					دریافتی صرف توسعه و نگهداری پروژه خواهد شد.
				</p>

				<div className="space-y-8">
					{/* Donation Platforms */}
					<div className="p-6 border border-gray-200 rounded-lg">
						<h2 className="mb-4 text-xl font-bold">پلتفرم‌های حمایت</h2>
						<div className="space-y-4">
							{donationPlatforms.map((platform, index) => (
								<div key={index}>
									{platform.isAvailable ? (
										<a
											href={platform.url || '#'}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center justify-between p-3 transition-colors border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-500"
										>
											<span className="font-medium">{platform.name}</span>
											<span className="text-blue-600">حمایت از طریق این پلتفرم →</span>
										</a>
									) : (
										<div className="flex items-center justify-between p-3 border border-gray-300 rounded-md bg-gray-50">
											<span className="font-medium text-gray-500">{platform.name}</span>
											<span className="text-gray-400">-</span>
										</div>
									)}
								</div>
							))}
						</div>
					</div>

					{/* Crypto Donations */}
					<div className="p-6 border border-gray-200 rounded-lg">
						<h2 className="mb-4 text-xl font-bold">حمایت با ارز دیجیتال</h2>
						<div className="space-y-4">
							{cryptoOptions.map((crypto, index) => (
								<div key={index}>
									{crypto.isAvailable ? (
										<div className="flex flex-col p-4 border border-gray-300 rounded-md">
											<div className="flex items-center justify-between mb-2">
												<span className="font-medium">
													{crypto.name} {crypto.network && `(${crypto.network})`}
												</span>
												<button
													onClick={() =>
														crypto.address && handleCopyAddress(crypto.address)
													}
													className="px-3 py-1 text-xs text-blue-600 border border-blue-200 rounded-md cursor-pointer hover:bg-blue-50"
												>
													کپی آدرس
												</button>
											</div>
											<div className="p-3 overflow-x-auto text-xs text-gray-600 bg-gray-100 rounded">
												{crypto.address}
											</div>
										</div>
									) : (
										<div className="flex items-center justify-between p-3 border border-gray-300 rounded-md bg-gray-50">
											<span className="font-medium text-gray-500">{crypto.name}</span>
											<span className="text-gray-400">-</span>
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
