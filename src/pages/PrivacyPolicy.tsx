import { AlertTriangle, ArrowLeft, Github, Shield } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import ContainerWrapper from '../components/ContainerWrapper'

export default function PrivacyPolicy() {
	return (
		<>
			{/* Hero section */}
			<div className="relative py-16 text-white md:py-20 bg-gradient-to-br from-blue-600 to-purple-700">
				<div className="absolute inset-0 bg-[url('/images/dots-pattern.svg')] bg-repeat opacity-10"></div>
				<div className="flex flex-col items-center text-center">
					<Shield size={48} className="mb-4 text-blue-100" />
					<h1 className="mb-4 text-4xl font-bold md:text-5xl">حریم خصوصی</h1>
					<p className="max-w-2xl mx-auto text-lg text-blue-100">
						ویجتی‌فای هیچ‌گونه اطلاعاتی از کاربران خود ذخیره نمی‌کند و به حریم خصوصی شما
						احترام می‌گذارد.
					</p>
				</div>
			</div>

			<ContainerWrapper>
				<div className="py-12 md:py-16">
					{/* Alert about policy changes */}
					<div className="p-4 mb-8 border rounded-lg border-amber-100 bg-amber-50">
						<div className="flex">
							<div className="flex-shrink-0">
								<AlertTriangle className="w-5 h-5 text-amber-600" />
							</div>
							<div className="mr-3">
								<p className="text-sm text-amber-700">
									<span className="font-bold">توجه:</span> این سیاست‌ها ممکن است با توسعه و
									پیشرفت پروژه ویجتی‌فای تغییر کند. همیشه آخرین نسخه را در این صفحه مطالعه
									کنید.
								</p>
							</div>
						</div>
					</div>

					{/* Last updated and open-source info */}
					<div className="flex flex-col items-center justify-between mb-10 md:flex-row">
						<p className="mb-4 text-sm text-gray-500 md:mb-0">
							آخرین بروزرسانی: ۱۷ اسفند ۱۴۰۳
						</p>
						<a
							href="https://github.com/widgetify-app/widgetify-landing"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center px-4 py-2 text-sm bg-gray-100 rounded-full hover:bg-gray-200"
						>
							<Github size={16} className="ml-2" />
							مشاهده کد منبع در گیت‌هاب
						</a>
					</div>

					{/* Content with cards */}
					<div className="max-w-3xl mx-auto space-y-8">
						{/* Open source info card */}
						<div className="p-6 border border-blue-100 bg-blue-50 rounded-xl">
							<h2 className="flex items-center mb-3 text-xl font-bold text-blue-800">
								<Github size={24} className="ml-2" />
								پروژه متن‌باز
							</h2>
							<p className="text-blue-700">
								ویجتی‌فای یک پروژه متن‌باز است که کد آن به صورت عمومی در گیت‌هاب قابل دسترسی
								است. این به این معنی است که هر فردی می‌تواند کد را بررسی کند و از شفافیت و
								امنیت آن اطمینان حاصل کند. ما باور داریم که نرم‌افزارهای متن‌باز، زمینه‌ی
								بهتری برای اعتماد کاربران فراهم می‌کنند.
							</p>
						</div>

						{/* Privacy sections as cards */}
						<div className="overflow-hidden bg-white border rounded-xl">
							<div className="p-6 border-b">
								<h2 className="mb-3 text-xl font-bold">عدم جمع‌آوری داده‌های شخصی</h2>
								<p className="text-gray-700">
									ویجتی‌فای هیچ‌گونه اطلاعات شخصی از کاربران خود جمع‌آوری، ذخیره یا پردازش
									نمی‌کند. ما نیازی به ورود (Login) یا ایجاد حساب کاربری نداریم، بنابراین
									هیچ داده‌ای از شما نگهداری نمی‌شود.
								</p>
							</div>

							<div className="p-6 border-b">
								<h2 className="mb-3 text-xl font-bold">عدم استفاده از کوکی‌ها</h2>
								<p className="text-gray-700">
									ویجتی‌فای از کوکی‌ها یا هر نوع فناوری مشابه برای ردیابی کاربران استفاده
									نمی‌کند. تمام اطلاعاتی که نمایش داده می‌شوند، به‌صورت مستقیم از منابع عمومی
									دریافت شده و در دستگاه شما پردازش می‌شوند.
								</p>
							</div>

							<div className="p-6 border-b">
								<h2 className="mb-3 text-xl font-bold">عدم اشتراک‌گذاری اطلاعات</h2>
								<p className="text-gray-700">
									از آنجایی که ویجتی‌فای هیچ اطلاعاتی از کاربران خود ذخیره نمی‌کند، هیچ
									اطلاعاتی برای اشتراک‌گذاری با اشخاص ثالث وجود ندارد.
								</p>
							</div>

							<div className="p-6 border-b">
								<h2 className="mb-3 text-xl font-bold">امنیت و حریم خصوصی</h2>
								<p className="text-gray-700">
									ما متعهد هستیم که تجربه‌ای ایمن و خصوصی برای کاربران فراهم کنیم. هیچ
									داده‌ای از طرف ویجتی‌فای به سرورهای خارجی ارسال نمی‌شود و تمام پردازش‌ها
									به‌صورت محلی در دستگاه شما انجام می‌شوند.
								</p>
							</div>

							<div className="p-6 border-b">
								<h2 className="mb-3 text-xl font-bold">تغییرات در سیاست حریم خصوصی</h2>
								<p className="text-gray-700">
									در صورت تغییر در عملکرد ویجتی‌فای، ممکن است این سیاست حریم خصوصی
									به‌روزرسانی شود. نسخه جدید همیشه در این صفحه در دسترس خواهد بود.
								</p>
							</div>

							<div className="p-6">
								<h2 className="mb-3 text-xl font-bold">تماس با ما</h2>
								<p className="text-gray-700">
									اگر سؤالی درباره حریم خصوصی ویجتی‌فای دارید، می‌توانید از طریق ایمیل
									<a
										href="mailto:info@widgetify.ir"
										className="mx-1 text-blue-600 hover:underline"
									>
										info@widgetify.ir
									</a>
									با ما در تماس باشید.
								</p>
							</div>
						</div>

						{/* Community review card */}
						<div className="p-6 border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
							<h2 className="mb-3 text-xl font-bold">بررسی توسط جامعه کاربران</h2>
							<p className="mb-4 text-gray-700">
								علاوه بر متن‌باز بودن، ما از بررسی کد ویجتی‌فای توسط جامعه توسعه‌دهندگان
								استقبال می‌کنیم. اگر شما یک توسعه‌دهنده هستید و علاقه‌مند به بررسی امنیت و
								حریم خصوصی این پروژه هستید، می‌توانید به ما بپیوندید یا کد را بررسی کنید.
							</p>
							<div className="flex flex-wrap gap-3">
								<a
									href="https://github.com/widgetify-app"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
								>
									مخزن گیت‌هاب
								</a>
								<a
									href="https://github.com/widgetify-app"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
								>
									گزارش مشکلات
								</a>
							</div>
						</div>
					</div>

					{/* Back button */}
					<div className="mt-12 text-center">
						<Link
							to="/"
							className="inline-flex items-center justify-center px-6 py-3 font-medium text-blue-600 transition-colors bg-blue-100 rounded-lg hover:bg-blue-200"
						>
							<ArrowLeft size={18} className="ml-2" />
							بازگشت به صفحه اصلی
						</Link>
					</div>
				</div>
			</ContainerWrapper>
		</>
	)
}
