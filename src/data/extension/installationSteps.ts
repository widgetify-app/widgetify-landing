import type { IconType } from 'react-icons'
import { FaChrome, FaDownload, FaPlus } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'

export interface InstallationStep {
	id: number
	title: string
	description: string
	icon: IconType
	iconSize: number
	mobileIconSize: number
	gradientFrom: string
	gradientTo: string
}

export const installationSteps: InstallationStep[] = [
	{
		id: 1,
		title: 'انتخاب مرورگر',
		description: 'مرورگر خود را از بین کروم، فایرفاکس یا اج انتخاب کنید',
		icon: FaChrome,
		iconSize: 32,
		mobileIconSize: 24,
		gradientFrom: 'from-indigo-500',
		gradientTo: 'to-blue-600',
	},
	{
		id: 2,
		title: 'نصب افزونه',
		description: 'افزونه را نصب کرده و مجوزهای لازم را تایید کنید',
		icon: FaDownload,
		iconSize: 32,
		mobileIconSize: 24,
		gradientFrom: 'from-blue-500',
		gradientTo: 'to-purple-600',
	},
	{
		id: 3,
		title: 'باز کردن نیـو‌تب',
		description: 'یک نیـو‌تب باز کنید تا داشبورد ویجتی‌فای ظاهر شود',
		icon: FaPlus,
		iconSize: 32,
		mobileIconSize: 24,
		gradientFrom: 'from-purple-500',
		gradientTo: 'to-pink-600',
	},
	{
		id: 4,
		title: 'شخصی‌سازی',
		description: 'ویجت‌ها را مطابق نیاز خود تنظیم و سفارشی‌سازی کنید',
		icon: MdDashboard,
		iconSize: 32,
		mobileIconSize: 24,
		gradientFrom: 'from-pink-500',
		gradientTo: 'to-rose-600',
	},
]
