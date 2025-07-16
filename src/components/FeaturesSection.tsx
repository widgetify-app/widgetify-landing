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
			iconColor: 'text-blue-600',
			iconBg: 'bg-blue-100',
		},
		{
			title: 'ویجت‌های متنوع',
			description: 'مجموعه‌ای از ویجت‌های کاربردی برای نیازهای مختلف',
			icon: Layers,
			iconColor: 'text-blue-600',
			iconBg: 'bg-blue-100',
		},
		{
			title: 'شخصی‌سازی آسان',
			description: 'تنظیم و سفارشی‌سازی ویجت‌ها مطابق سلیقه شما',
			icon: Settings,
			iconColor: 'text-gray-600',
			iconBg: 'bg-gray-100',
		},
		{
			title: 'رابط کاربری زیبا',
			description: 'طراحی مدرن و زیبا با تم‌های مختلف',
			icon: Layout,
			iconColor: 'text-gray-600',
			iconBg: 'bg-gray-100',
		},
		{
			title: 'عملکرد سریع',
			description: 'بهینه‌سازی شده برای حداقل مصرف منابع و پاسخگویی سریع',
			icon: Zap,
			iconColor: 'text-gray-600',
			iconBg: 'bg-gray-100',
		},
	]

	return (
		<section className="py-16 bg-white">
			<div className="max-w-7xl mx-auto px-4">
				<div className="mb-12 text-center">
					<h2 className="mb-3 text-3xl font-bold text-gray-900">
						چرا ویجتی‌فای را انتخاب کنیم؟
					</h2>
					<p className="max-w-2xl mx-auto font-light text-gray-600">
						ویجتی‌فای با ترکیبی از ویژگی‌های مفید، تجربه‌ای بهتر در استفاده از ابزارها ارائه
						می‌دهد
					</p>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{features.map((feature, index) => (
						<div
							key={index}
							className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
						>
							<div
								className={`flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg ${feature.iconBg}`}
							>
								<feature.icon className={feature.iconColor} size={20} />
							</div>
							<div>
								<h3 className="mb-2 text-lg font-semibold text-gray-900">
									{feature.title}
								</h3>
								<p className="text-sm font-light text-gray-600">{feature.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
