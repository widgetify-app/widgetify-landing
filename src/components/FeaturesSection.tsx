import { Code, Globe, Layers, Layout, Settings, Zap } from 'lucide-react'

interface Feature {
	title: string
	description: string
	icon: React.ElementType
	iconColor: string
	iconBg: string
}

export default function FeaturesSection() {
	const features: Feature[] = [
		{
			title: 'سازگار با همه پلتفرم‌ها',
			description: 'اجرا در ویندوز، لینوکس، مک و مرورگرهای مختلف',
			icon: Globe,
			iconColor: 'text-blue-600',
			iconBg: 'bg-blue-100',
		},
		{
			title: 'متن باز و قابل توسعه',
			description: 'امکان مشارکت در توسعه و اضافه کردن ویجت‌های جدید',
			icon: Code,
			iconColor: 'text-emerald-600',
			iconBg: 'bg-emerald-100',
		},
		{
			title: 'ویجت‌های متنوع',
			description: 'مجموعه‌ای از ویجت‌های کاربردی برای نیازهای مختلف',
			icon: Layers,
			iconColor: 'text-indigo-600',
			iconBg: 'bg-indigo-100',
		},
		{
			title: 'شخصی‌سازی آسان',
			description: 'تنظیم و سفارشی‌سازی ویجت‌ها مطابق سلیقه شما',
			icon: Settings,
			iconColor: 'text-purple-600',
			iconBg: 'bg-purple-100',
		},
		{
			title: 'رابط کاربری زیبا',
			description: 'طراحی مدرن و زیبا با تم‌های مختلف',
			icon: Layout,
			iconColor: 'text-pink-600',
			iconBg: 'bg-pink-100',
		},
		{
			title: 'عملکرد سریع',
			description: 'بهینه‌سازی شده برای حداقل مصرف منابع و پاسخگویی سریع',
			icon: Zap,
			iconColor: 'text-amber-600',
			iconBg: 'bg-amber-100',
		},
	]

	return (
		<section className="py-16">
			<div className="mb-12 text-center">
				<h2 className="mb-3 text-3xl font-bold">چرا ویجتی‌فای را انتخاب کنیم؟</h2>
				<p className="max-w-2xl mx-auto font-light text-gray-600">
					ویجتی‌فای با ترکیبی از ویژگی‌های منحصر به فرد، تجربه‌ای متفاوت در استفاده از ویجت‌ها
					ارائه می‌دهد
				</p>
			</div>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{features.map((feature, index) => (
					<div key={index} className="flex gap-4">
						<div
							className={`flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 mr-4 rounded-lg ${feature.iconBg}`}
						>
							<feature.icon className={feature.iconColor} size={24} />
						</div>
						<div>
							<h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
							<p className="font-light text-gray-600">{feature.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
