import {
	BookOpen,
	ChevronDown,
	Download,
	ExternalLink,
	FileText,
	Grid,
	HelpCircle,
	LogIn,
	Menu,
	MessageSquare,
	Shield,
	X,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { BiDonateBlood } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'
import ContainerWrapper from './ContainerWrapper'

interface NavItem {
	label: string
	path: string
	isExternal?: boolean
	icon?: React.ReactNode
	badge?: string
	children?: {
		label: string
		path: string
		description?: string
		isExternal?: boolean
		icon?: React.ReactNode
		badge?: string
	}[]
}

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
	const location = useLocation()
	const menuRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setActiveDropdown(null)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const getNavItems = (): NavItem[] => {
		const baseItems: NavItem[] = [
			{
				label: 'حمایت',
				path: '/donate',
				icon: <BiDonateBlood size={18} />,
			},
			{
				label: 'محصولات',
				path: '#',
				icon: <Grid size={18} />,
				children: [
					{
						label: 'اکستنشن مرورگر',
						path: '/extension',
						description: 'افزونه برای نیو تب مرورگر',
						icon: <ExternalLink size={18} />,
					},
					{
						label: 'نسخه وب',
						path: 'https://app.widgetify.ir',
						description: 'استفاده از ویجتی‌فای در مرورگر',
						isExternal: true,
						icon: <ExternalLink size={18} />,
					},
					{
						label: 'اپلیکیشن دسکتاپ',
						path: 'https://github.com/widgetify-app/widgetify-desktop',
						description: 'نسخه دسکتاپ ویجتی‌فای',
						isExternal: true,
						icon: <Download size={18} />,
					},
				],
			},
			{
				label: 'راهنما و پشتیبانی',
				path: '#',
				icon: <HelpCircle size={18} />,
				children: [
					{
						label: 'راهنمای استفاده',
						path: '/help',
						description: 'آموزش‌های کامل استفاده از ویجتی‌فای',
						icon: <BookOpen size={18} />,
					},
					{
						label: 'ارسال بازخورد',
						path: 'https://feedback.onl/fa/b/widgetify',
						description: 'نظرات و پیشنهادات شما',
						isExternal: true,
						icon: <MessageSquare size={18} />,
					},
					{
						label: 'حریم خصوصی',
						path: '/privacy',
						description: 'سیاست‌های حفظ حریم خصوصی',
						icon: <Shield size={18} />,
					},
				],
			},
			{
				label: 'وبلاگ',
				path: 'https://blog.widgetify.ir',
				isExternal: true,
				icon: <FileText size={18} />,
			},
		]

		baseItems.push({
			label: 'ورود / ثبت نام',
			path: '/login',
			icon: <LogIn size={18} />,
		})

		return baseItems
	}

	const navItems = getNavItems()

	// Check if a path is active
	const isActive = (path: string) => {
		if (path === '#') return false
		if (path === '/') return location.pathname === path
		return location.pathname.startsWith(path)
	}

	// Toggle dropdown menu
	const toggleDropdown = (label: string) => {
		setActiveDropdown(activeDropdown === label ? null : label)
	}

	return (
		<nav
			className={`sticky top-0 z-50 bg-white transition-all duration-200 ${
				scrolled ? 'shadow-md' : 'shadow-sm'
			}`}
			ref={menuRef}
		>
			<ContainerWrapper>
				<div className="flex items-center justify-between h-16">
					{/* Logo and site name */}
					<div className="flex items-center">
						<Link to="/" className="flex items-center">
							<img
								src="/icons/icon.png"
								alt="ویجتی‌فای"
								className={`object-contain transition-all ${scrolled ? 'w-8 h-8' : 'w-9 h-9'}`}
								onError={(e) => {
									e.currentTarget.src = 'https://placehold.co/96x96?text=W'
								}}
							/>
							<span className="mr-2 text-xl font-bold text-blue-600">ویجتی‌فای</span>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="items-center hidden md:flex" dir="rtl">
						<div className="flex items-center space-x-1 rtl:space-x-reverse">
							{navItems.map((item) => (
								<div key={item.label} className="relative group">
									{item.children ? (
										<button
											onClick={() => toggleDropdown(item.label)}
											className={`flex cursor-pointer items-center px-3 py-2 rounded-md transition-colors ${
												activeDropdown === item.label
													? 'text-blue-600 bg-blue-50'
													: 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
											}`}
										>
											{item.icon && <span className="ml-1.5">{item.icon}</span>}
											{item.label}
											<ChevronDown
												size={14}
												className={`mr-1 transition-transform ${
													activeDropdown === item.label ? 'transform rotate-180' : ''
												}`}
											/>
										</button>
									) : (
										<Link
											to={item.path}
											target={item.isExternal ? '_blank' : undefined}
											rel={item.isExternal ? 'noopener noreferrer' : undefined}
											className={`flex items-center px-3 py-2 rounded-md transition-colors ${
												isActive(item.path)
													? 'text-blue-600 bg-blue-50 font-medium'
													: 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
											}`}
										>
											{item.icon && <span className="ml-1.5">{item.icon}</span>}
											{item.label}
											{item.badge && (
												<span className="px-1.5 py-0.5 mr-1.5 text-xs font-medium text-white bg-green-500 rounded-full">
													{item.badge}
												</span>
											)}
										</Link>
									)}

									{/* Enhanced Dropdown Menu */}
									{item.children && activeDropdown === item.label && (
										<div className="absolute right-0 z-10 mt-1 overflow-hidden bg-white rounded-lg shadow-lg w-72">
											<div className="p-2">
												{item.children.map((child) => (
													<Link
														key={child.label}
														to={child.path}
														target={child.isExternal ? '_blank' : undefined}
														rel={child.isExternal ? 'noopener noreferrer' : undefined}
														onClick={() => setActiveDropdown(null)}
														className={`block p-3 rounded-lg transition-colors ${
															isActive(child.path) ? 'bg-blue-50' : 'hover:bg-gray-50'
														}`}
													>
														<div className="flex items-center">
															{child.icon && (
																<div className="flex items-center justify-center w-8 h-8 ml-3 text-blue-600 bg-blue-100 rounded-lg">
																	{child.icon}
																</div>
															)}
															<div className="flex-1">
																<div className="flex items-center">
																	<span className="font-medium text-gray-800">
																		{child.label}
																	</span>
																	{child.isExternal && (
																		<ExternalLink
																			size={12}
																			className="mr-1.5 text-gray-400"
																		/>
																	)}
																	{child.badge && (
																		<span className="px-1.5 py-0.5 mr-1.5 text-xs font-medium text-white bg-green-500 rounded-full">
																			{child.badge}
																		</span>
																	)}
																</div>
																{child.description && (
																	<p className="mt-0.5 text-xs text-gray-500">
																		{child.description}
																	</p>
																)}
															</div>
														</div>
													</Link>
												))}
											</div>
										</div>
									)}
								</div>
							))}
						</div>
					</div>

					{/* Mobile Toggle Button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
							aria-label={isMenuOpen ? 'بستن منو' : 'باز کردن منو'}
						>
							{isMenuOpen ? <X size={22} /> : <Menu size={22} />}
						</button>
					</div>
				</div>

				{/* Enhanced Mobile Navigation */}
				{isMenuOpen && (
					<div className="fixed inset-x-0 bottom-0 z-50 overflow-y-auto bg-white border-t border-gray-100 top-16 md:hidden">
						<div className="p-4 divide-y divide-gray-100">
							{/* Feedback Quick Action */}
							<div className="pb-4">
								<a
									href="https://feedback.onl/fa/b/widgetify"
									target="_blank"
									rel="noopener noreferrer"
									className="flex flex-col items-center justify-center p-3 transition rounded-lg bg-blue-50"
								>
									<MessageSquare size={20} className="text-blue-600" />
									<span className="mt-1 text-sm font-medium text-blue-700">
										ارسال بازخورد
									</span>
								</a>
							</div>

							{/* Nav Items */}
							<div className="pt-4">
								{navItems.map((item) => (
									<div key={item.label} className="mb-2">
										{item.children ? (
											<>
												<button
													onClick={() => toggleDropdown(item.label)}
													className="flex items-center justify-between w-full px-4 py-3 text-right text-gray-700 transition rounded-lg bg-gray-50 hover:bg-gray-100"
												>
													<span className="flex items-center">
														{item.icon && <span className="ml-3">{item.icon}</span>}
														<span className="font-medium">{item.label}</span>
													</span>
													<ChevronDown
														size={16}
														className={`transition-transform duration-200 ${
															activeDropdown === item.label ? 'transform rotate-180' : ''
														}`}
													/>
												</button>

												{/* Mobile dropdown menu */}
												{activeDropdown === item.label && (
													<div className="mt-1 rounded-lg bg-gray-50/50">
														{item.children.map((child) => (
															<Link
																key={child.label}
																to={child.path}
																target={child.isExternal ? '_blank' : undefined}
																rel={child.isExternal ? 'noopener noreferrer' : undefined}
																onClick={() => setIsMenuOpen(false)}
																className="flex items-center px-4 py-3 pr-12 text-gray-700 transition rounded-md hover:bg-gray-100"
															>
																{child.icon && (
																	<span className="ml-3 text-gray-500">{child.icon}</span>
																)}
																<div>
																	<div className="flex items-center">
																		{child.label}
																		{child.badge && (
																			<span className="px-1.5 py-0.5 mr-1.5 text-xs font-medium text-white bg-green-500 rounded-full">
																				{child.badge}
																			</span>
																		)}
																	</div>
																	{child.description && (
																		<p className="text-xs text-gray-500">
																			{child.description}
																		</p>
																	)}
																</div>
															</Link>
														))}
													</div>
												)}
											</>
										) : (
											<Link
												to={item.path}
												target={item.isExternal ? '_blank' : undefined}
												rel={item.isExternal ? 'noopener noreferrer' : undefined}
												onClick={() => setIsMenuOpen(false)}
												className={`flex items-center px-4 py-3 rounded-lg transition ${
													isActive(item.path)
														? 'bg-blue-50 text-blue-700'
														: 'text-gray-700 hover:bg-gray-50'
												}`}
											>
												{item.icon && <span className="ml-3">{item.icon}</span>}
												<span className={isActive(item.path) ? 'font-medium' : ''}>
													{item.label}
												</span>
												{item.badge && (
													<span className="px-1.5 py-0.5 mr-1.5 text-xs font-medium text-white bg-green-500 rounded-full">
														{item.badge}
													</span>
												)}
											</Link>
										)}
									</div>
								))}
							</div>

							{/* Bottom Feedback Section */}
							<div className="pt-4 mt-4">
								<div className="p-4 text-center border border-blue-100 rounded-lg bg-blue-50/50">
									<p className="mb-2 text-sm text-blue-700">
										نظرات و پیشنهادات خود را با ما در میان بگذارید
									</p>
									<a
										href="https://feedback.onl/fa/b/widgetify"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center w-full px-4 py-2 font-medium text-white transition rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
										onClick={() => setIsMenuOpen(false)}
									>
										<MessageSquare size={16} className="ml-2" />
										ارسال بازخورد
									</a>
								</div>
							</div>
						</div>
					</div>
				)}
			</ContainerWrapper>
		</nav>
	)
}
