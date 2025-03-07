import type { IconType } from 'react-icons'
import { FaCheckCircle, FaClock, FaDollarSign, FaFolder } from 'react-icons/fa'

export interface FeatureTab {
	id: string
	title: string
	description: string
	icon: IconType
	iconBgClass: string
	detailTitle: string
	detailDescription: string
	tags: string[]
	previewComponent?: React.ReactNode
}

export const featuresTabs: FeatureTab[] = [
	{
		id: 'financial',
		title: 'مدیریت مالی',
		description: 'قیمت لحظه‌ای ارزها، رمزارزها و بازارها',
		icon: FaDollarSign,
		iconBgClass: 'bg-gradient-to-r from-blue-500 to-indigo-600',
		detailTitle: 'مدیریت مالی هوشمند',
		detailDescription:
			'با ویجت‌های مالی ویجتی‌فای، اطلاعات بازارهای مالی در یک نگاه در اختیار شماست. قیمت لحظه‌ای ارزها، رمزارزها، طلا، سکه و دلار را بدون نیاز به مراجعه به سایت‌های مختلف مشاهده کنید.',
		tags: ['بیت‌کوین', 'دلار', 'یورو', 'طلا', 'بورس'],
	},
	{
		id: 'productivity',
		title: 'افزایش بهره‌وری',
		description: 'مدیریت وظایف، یادداشت‌ها و عملکرد',
		icon: FaCheckCircle,
		iconBgClass: 'bg-gradient-to-r from-indigo-500 to-purple-600',
		detailTitle: 'سیستم مدیریت وظایف',
		detailDescription:
			'با ویجت مدیریت وظایف، تمام کارهای روزانه خود را برنامه‌ریزی کنید و از پیشرفت کارها مطلع شوید. یادداشت‌ها و مهلت‌های زمانی را به راحتی مدیریت کنید.',
		tags: ['وظایف روزانه', 'یادآوری', 'یادداشت', 'زمان‌بندی', 'پیشرفت'],
	},
	{
		id: 'organization',
		title: 'سازماندهی',
		description: 'بوکمارک‌های پیشرفته با پوشه‌بندی',
		icon: FaFolder,
		iconBgClass: 'bg-gradient-to-r from-purple-500 to-pink-500',
		detailTitle: 'بوکمارک‌های سازماندهی شده',
		detailDescription:
			'لینک‌های مورد علاقه خود را به صورت پوشه‌بندی شده و با امکان جستجوی سریع مدیریت کنید. دسترسی سریع به سایت‌های پر استفاده با یک کلیک.',
		tags: ['دسته‌بندی', 'جستجو', 'دسترسی سریع', 'سایت‌های محبوب'],
	},
	{
		id: 'tools',
		title: 'ابزارهای کاربردی',
		description: 'ساعت، تقویم و زمان‌بندی یکپارچه',
		icon: FaClock,
		iconBgClass: 'bg-gradient-to-r from-amber-500 to-orange-500',
		detailTitle: 'ابزارهای ضروری روزانه',
		detailDescription:
			'مجموعه‌ای از ابزارهای کاربردی شامل ساعت، تقویم، آب و هوا و ماشین حساب در دسترس شما. همه چیز در یک مکان و بدون نیاز به جستجوی اضافه.',
		tags: ['ساعت', 'تقویم', 'آب و هوا', 'ماشین حساب', 'یادآوری'],
	},
]
