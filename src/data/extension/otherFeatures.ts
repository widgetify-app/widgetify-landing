import type { IconType } from 'react-icons'
import { FaCloud, FaSearch } from 'react-icons/fa'
import { MdOutlinePets } from 'react-icons/md'

export interface OtherFeature {
	title: string
	description: string
	icon: IconType
	iconColor: string
	iconBgClass: string
	iconHoverBgClass: string
}

export const otherFeatures: OtherFeature[] = [
	{
		title: 'دسترسی سریع',
		description: 'جستجوی هوشمند و میانبرهای سفارشی برای سایت‌های محبوب',
		icon: FaSearch,
		iconColor: 'text-pink-600',
		iconBgClass: 'bg-pink-50',
		iconHoverBgClass: 'group-hover:bg-pink-100',
	},
	{
		title: 'پیش‌بینی آب‌وهوا',
		description: 'گزارش دقیق آب و هوا با پشتیبانی هوش مصنوعی و نمایش جزئیات',
		icon: FaCloud,
		iconColor: 'text-blue-600',
		iconBgClass: 'bg-blue-50',
		iconHoverBgClass: 'group-hover:bg-blue-100',
	},
	{
		title: 'حیوان خانگی مجازی',
		description: 'یک حیوان خانگی دوست‌داشتنی که با شماست',
		icon: MdOutlinePets,
		iconColor: 'text-violet-600',
		iconBgClass: 'bg-violet-50',
		iconHoverBgClass: 'group-hover:bg-violet-100',
	},
]
