import { FaDiscord, FaGithub, FaInstagram, FaTelegram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {
	DESKTOP_LINK,
	DISCORD_LINK,
	GITHUB_LINK,
	PWA_LINK,
	TELEGRAM_LINK,
} from '../constants'
import ContainerWrapper from './ContainerWrapper'

export default function FooterSection() {
	return (
		<footer className="pt-16 pb-8 bg-gradient-to-br from-gray-50 to-gray-100">
			<ContainerWrapper>
				<div className="grid grid-cols-1 gap-8 pb-12 mb-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-3">
					{/* Brand Column */}
					<div className="lg:col-span-1">
						<div className="flex items-center mb-4">
							<img
								src="/icons/icon.png"
								alt="ویجتی‌فای"
								className="object-contain w-10 h-10"
								onError={(e) => {
									e.currentTarget.src = 'https://placehold.co/96x96?text=W'
								}}
							/>
							<span className="mr-2 text-xl font-bold text-blue-600">ویجتی‌فای</span>
						</div>

						<p className="mb-6 text-gray-600">
							راهکار هوشمند مدیریت ویجت‌ها برای تمام پلتفرم‌ها با طراحی ساده و کارآمد
						</p>

						<div className="flex items-center gap-3">
							{/* Discord */}
							<a
								href={DISCORD_LINK}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center text-gray-700 transition-all bg-white rounded-full shadow-sm w-9 h-9 hover:bg-indigo-500 hover:text-white hover:shadow"
								aria-label="Discord"
							>
								<FaDiscord />
							</a>

							{/* GitHub */}
							<a
								href={GITHUB_LINK}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center text-gray-700 transition-all bg-white rounded-full shadow-sm w-9 h-9 hover:bg-gray-800 hover:text-white hover:shadow"
								aria-label="GitHub"
							>
								<FaGithub />
							</a>

							{/* Telegram */}
							<a
								href={TELEGRAM_LINK}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center text-gray-700 transition-all bg-white rounded-full shadow-sm w-9 h-9 hover:bg-blue-500 hover:text-white hover:shadow"
								aria-label="Telegram"
							>
								<FaTelegram />
							</a>

							{/* Instagram */}
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center text-gray-700 transition-all bg-white rounded-full shadow-sm w-9 h-9 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 hover:text-white hover:shadow"
								aria-label="Instagram"
							>
								<FaInstagram />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="mb-4 text-lg font-bold">دسترسی سریع</h3>
						<ul className="space-y-2 text-gray-600">
							<li>
								<Link to="/" className="transition-colors hover:text-blue-600">
									صفحه اصلی
								</Link>
							</li>
							<li>
								<Link to="/donate" className="transition-colors hover:text-blue-600">
									حمایت مالی
								</Link>
							</li>
						</ul>
					</div>

					{/* Products */}
					<div>
						<h3 className="mb-4 text-lg font-bold">محصولات</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/extension"
									className="text-gray-600 transition-colors hover:text-blue-600"
								>
									اکستنشن مرورگر
								</Link>
							</li>
							<li>
								<a
									href={PWA_LINK}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-600 transition-colors hover:text-blue-600"
								>
									نسخه وب (PWA)
								</a>
							</li>
							<li>
								<a
									href={DESKTOP_LINK}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-600 transition-colors hover:text-blue-600"
								>
									نسخه دسکتاپ
								</a>
							</li>
							<li>
								<span className="inline-flex items-center text-gray-400 cursor-not-allowed">
									نسخه اندروید
									<span className="mr-2 px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
										به زودی
									</span>
								</span>
							</li>
							<li>
								<span className="inline-flex items-center text-gray-400 cursor-not-allowed">
									نسخه iOS
									<span className="mr-2 px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
										به زودی
									</span>
								</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Section with Copyright and Additional Links */}
				<div className="flex flex-col items-center justify-between pt-6 border-t border-gray-200 md:flex-row">
					<div className="flex flex-wrap items-center justify-center mb-4 gap-x-6 gap-y-2 md:mb-0">
						<Link to="/terms" className="text-sm text-gray-500 hover:text-blue-600">
							قوانین و مقررات
						</Link>
						<Link to="/privacy" className="text-sm text-gray-500 hover:text-blue-600">
							حریم خصوصی
						</Link>
						<Link to="/faq" className="text-sm text-gray-500 hover:text-blue-600">
							سوالات متداول
						</Link>
					</div>

					<div className="text-center md:text-right">
						<p className="text-sm text-gray-500">
							&copy; {new Date().getFullYear()} ویجتی‌فای. تمامی حقوق محفوظ است.
						</p>
						<p className="mt-1 text-xs text-gray-400">ساخته شده با ❤️ در ایران</p>
					</div>
				</div>
			</ContainerWrapper>
		</footer>
	)
}
