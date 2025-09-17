import '../src/styles/global.css'
import ClientWrapper from '../src/components/ClientWrapper'

export const metadata = {
	title: 'ویجتیفای | افزونه متن‌باز New Tab با ویجت‌های کاربردی',
	description:
		'ویجتیفای یک افزونه متن‌باز برای Chrome، Edge، Brave و Opera است که صفحه New Tab مرورگر شما را به یک داشبورد شخصی تبدیل می‌کند. با بیش از 12 هزار نصب فعال، ابزارهایی مثل مدیریت مالی، وظایف روزانه، پومودورو، بوکمارک‌های پیشرفته، تقویم شمسی و ویجت‌های متنوع در اختیار شماست.',
	keywords: [
		'ویجتیفای',
		'widgetify',
		'افزونه مرورگر',
		'new tab',
		'داشبورد شخصی',
		'مدیریت وظایف',
		'تقویم شمسی',
		'پومودورو',
		'مدیریت زمان',
		'بوکمارک',
		'ارز دیجیتال',
		'نرخ ارز',
		'آب و هوا',
		'ابزارک',
		'ویجتی فای',
		'افزونه ویجتیفای',
		'افزونه New Tab',
		'افزونه داشبورد',
		'ویجت',
	],
	openGraph: {
		title: 'ویجتیفای | افزونه متن‌باز New Tab با ویجت‌های کاربردی',
		description:
			'صفحه New Tab مرورگر خود را با ویجتیفای به یک داشبورد شخصی و کاربردی تبدیل کنید. بیش از 12 هزار کاربر فعال، مدیریت مالی، وظایف، پومودورو، بوکمارک‌ها و ابزارهای روزانه—all in one.',
		url: 'https://widgetify.ir',
		siteName: 'ویجتیفای',
		locale: 'fa_IR',
		type: 'website',
		images: ['/og-image.png'],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'ویجتیفای | افزونه متن‌باز New Tab با ویجت‌های کاربردی',
		description:
			'ابزارهای روزمره مثل مدیریت مالی، وظایف، تقویم شمسی و پومودورو در یک افزونه New Tab ساده و زیبا.',
		images: ['/og-image.png'],
	},
	alternates: {
		canonical: 'https://widgetify.ir',
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					href="/icons/icon16.png"
					sizes="16x16"
					type="image/png"
				/>
				<link
					rel="icon"
					href="/icons/icon32.png"
					sizes="32x32"
					type="image/png"
				/>
				<link
					rel="icon"
					href="/icons/icon48.png"
					sizes="48x48"
					type="image/png"
				/>
				<link rel="apple-touch-icon" href="/icons/icon.png" />
				<link rel="shortcut icon" href="/icons/icon.png" />
			</head>
			<body>
				<ClientWrapper>{children}</ClientWrapper>
			</body>
		</html>
	)
}
