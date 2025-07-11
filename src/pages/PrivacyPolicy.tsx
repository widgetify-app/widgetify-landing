import { ArrowLeft, Globe, Shield } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../hooks'

export default function PrivacyPolicy() {
	useDocumentTitle('حریم خصوصی')

	const [language, setLanguage] = useState<'fa' | 'en'>('fa')

	const toggleLanguage = () => {
		setLanguage(language === 'fa' ? 'en' : 'fa')
	}

	return (
		<>
			{/* Simple header */}
			<div
				className="py-8 border-b bg-gray-50"
				{...(language === 'en' ? { dir: 'ltr' } : { dir: 'rtl' })}
			>
				<div className="container max-w-4xl px-4 mx-auto">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<Shield size={24} className="ml-3 text-blue-600" />
							<h1 className="text-2xl font-bold">
								{language === 'fa'
									? 'سیاست حفظ حریم خصوصی ویجتی‌فای'
									: 'Widgetify Privacy Policy'}
							</h1>
						</div>
						<button
							onClick={toggleLanguage}
							className="flex items-center px-3 py-1 text-sm text-gray-700 bg-white border rounded-md cursor-pointer hover:bg-gray-50"
						>
							<Globe size={16} className="ml-1" />
							{language === 'fa' ? 'English' : 'فارسی'}
						</button>
					</div>
					<p className="mt-2 text-gray-600">
						{language === 'fa'
							? 'آخرین به‌روزرسانی: 18 تیر ۱۴۰۴'
							: 'Last updated: July 9, 2025'}
					</p>
				</div>
			</div>

			<div className="py-8" {...(language === 'en' ? { dir: 'ltr' } : { dir: 'rtl' })}>
				<div className="max-w-4xl mx-auto">
					{/* Introduction */}
					<div className="mb-8">
						{language === 'fa' ? (
							<>
								<p className="mb-4 text-gray-700">
									ویجتی‌فای یک افزونه مرورگر با هدف مشخص نمایش ویجت‌های کاربردی در نیـو‌تب
									است. این سیاست حریم خصوصی توضیح می‌دهد که چگونه ما با داده‌های شما در این
									افزونه برخورد می‌کنیم.
								</p>
								<p className="mb-4 text-gray-700">
									با استفاده از افزونه ویجتی‌فای، شما با این سیاست‌های حریم خصوصی موافقت
									می‌کنید.
								</p>
							</>
						) : (
							<>
								<p className="mb-4 text-gray-700">
									Widgetify is a browser extension with the specific purpose of displaying
									useful widgets in the new tab. This privacy policy explains how we
									handle your data in this extension.
								</p>
								<p className="mb-4 text-gray-700">
									By using the Widgetify extension, you agree to these privacy policies.
								</p>
							</>
						)}
					</div>

					{/* Main content in simple sections */}
					<div className="space-y-8">
						<section>
							<h2 className="pb-2 mb-3 text-xl font-bold border-b">
								{language === 'fa'
									? '۱. اطلاعات جمع‌آوری شده'
									: '1. Collected Information'}
							</h2>
							<div className="ml-4">
								{language === 'fa' ? (
									<>
										<p className="mb-3 text-gray-700">
											<strong>
												ویجتی‌فای هیچ داده شخصی را به طور پیش‌فرض جمع‌آوری نمی‌کند.
											</strong>{' '}
											تمام اطلاعات نمایش داده شده (مانند آب و هوا، قیمت ارزها و غیره)
											مستقیماً از منابع عمومی دریافت شده و در دستگاه شما پردازش می‌شوند.
										</p>
										<p className="mb-3 text-gray-700">
											افزونه ویجتی‌فای تنها از ذخیره‌سازی محلی (Local Storage) برای حفظ
											تنظیمات شما استفاده می‌کند. این داده‌ها فقط در دستگاه خودتان ذخیره
											می‌شوند و ما به آن‌ها دسترسی نداریم.
										</p>
										<p className="mb-3 text-gray-700">
											<strong>اطلاعات اختیاری:</strong> در صورت تمایل به همگام‌سازی تنظیمات
											بین دستگاه‌های مختلف، ما ممکن است نام و آدرس ایمیل شما را ذخیره کنیم.
											ارائه این اطلاعات کاملاً اختیاری است و تأثیری در عملکرد اصلی افزونه
											ندارد.
										</p>
									</>
								) : (
									<>
										<p className="mb-3 text-gray-700">
											<strong>
												Widgetify does not collect any personal data by default.
											</strong>{' '}
											All displayed information (such as weather, cryptocurrency prices,
											etc.) is received directly from public sources and processed on your
											device.
										</p>
										<p className="mb-3 text-gray-700">
											The Widgetify extension only uses local storage to maintain your
											settings. This data is stored only on your own device, and we do not
											have access to it.
										</p>
										<p className="mb-3 text-gray-700">
											<strong>Optional information:</strong> If you wish to synchronize
											settings across different devices, we may store your name and email
											address. Providing this information is completely optional and does
											not affect the main functionality of the extension.
										</p>
									</>
								)}
							</div>
						</section>

						<section>
							<h2 className="pb-2 mb-3 text-xl font-bold border-b">
								{language === 'fa' ? '۲. دسترسی‌های افزونه' : '2. Extension Permissions'}
							</h2>
							<div className="ml-4">
								{language === 'fa' ? (
									<>
										<p className="mb-3 text-gray-700">
											افزونه ویجتی‌فای فقط به دسترسی‌های ضروری برای عملکرد اصلی خود نیاز
											دارد:
										</p>
										<ul className="mr-6 space-y-2 text-gray-700 list-disc">
											<li>دسترسی به نیـو‌تب برای نمایش ویجت‌ها</li>
											<li>
												دسترسی به اینترنت برای دریافت داده‌های عمومی مانند آب و هوا، قیمت
												ارزها و غیره
											</li>
										</ul>
									</>
								) : (
									<>
										<p className="mb-3 text-gray-700">
											The Widgetify extension only requires essential permissions for its
											main functionality:
										</p>
										<ul className="ml-6 space-y-2 text-gray-700 list-disc" dir="ltr">
											<li>Access to new tab for displaying widgets</li>
											<li>
												Internet access to retrieve public data such as weather,
												cryptocurrency prices, etc.
											</li>
										</ul>
									</>
								)}
							</div>
						</section>

						<section>
							<h2 className="pb-2 mb-3 text-xl font-bold border-b">
								{language === 'fa'
									? '۳. اتصال اختیاری حساب گوگل'
									: '3. Optional Google Account Integration'}
							</h2>
							<div className="ml-4">
								{language === 'fa' ? (
									<>
										<p className="mb-3 text-gray-700">
											ویجتی‌فای امکان اتصال اختیاری به حساب گوگل شما را فراهم می‌کند تا
											بتوانید از ویجت‌های مرتبط استفاده کنید. این اتصال کاملاً اختیاری است و
											شامل دو گزینه زیر می‌باشد:
										</p>
										<ul className="mr-6 space-y-2 text-gray-700 list-disc">
											<li>
												<strong>دسترسی خواندنی گوگل کلندر:</strong> برای نمایش رویدادهای
												آینده در ویجت تقویم
											</li>
											<li>
												<strong>دسترسی خواندنی ایمیل:</strong> برای نمایش ایمیل‌های خوانده
												نشده در ویجت ایمیل
											</li>
										</ul>
										<div className="p-3 mt-4 border-r-4 border-blue-500 bg-blue-50">
											<p className="text-sm text-blue-800">
												<strong>مهم:</strong> هیچ‌یک از این داده‌ها توسط ما ذخیره نمی‌شوند.
												ما صرفاً به عنوان واسط عمل کرده و داده‌ها را مستقیماً از گوگل دریافت
												کرده و به افزونه ارسال می‌کنیم.
											</p>
										</div>
									</>
								) : (
									<>
										<p className="mb-3 text-gray-700">
											Widgetify provides optional Google account integration to enable you
											to use related widgets. This connection is completely optional and
											includes the following two options:
										</p>
										<ul className="ml-6 space-y-2 text-gray-700 list-disc" dir="ltr">
											<li>
												<strong>Google Calendar read access:</strong> To display upcoming
												events in the calendar widget
											</li>
											<li>
												<strong>Email read access:</strong> To display unread emails in
												the email widget
											</li>
										</ul>
										<div className="p-3 mt-4 border-l-4 border-blue-500 bg-blue-50">
											<p className="text-sm text-blue-800">
												<strong>Important:</strong> None of this data is stored by us. We
												merely act as an intermediary, receiving data directly from Google
												and sending it to the extension.
											</p>
										</div>
									</>
								)}
							</div>
						</section>

						<section>
							<h2 className="pb-2 mb-3 text-xl font-bold border-b">
								{language === 'fa' ? '۴. استفاده از داده‌ها' : '4. Data Usage'}
							</h2>
							<div className="ml-4">
								{language === 'fa' ? (
									<p className="mb-3 text-gray-700">
										در صورتی که شما به صورت اختیاری نام و ایمیل خود را ارائه کنید، ما از
										این اطلاعات تنها برای همگام‌سازی تنظیمات شما بین دستگاه‌های مختلف
										استفاده می‌کنیم.
									</p>
								) : (
									<p className="mb-3 text-gray-700">
										If you optionally provide your name and email, we will only use this
										information to synchronize your settings across different devices.
									</p>
								)}
							</div>
						</section>

						<section>
							<h2 className="pb-2 mb-3 text-xl font-bold border-b">
								{language === 'fa' ? '۵. اشتراک‌گذاری داده‌ها' : '5. Data Sharing'}
							</h2>
							<div className="ml-4">
								{language === 'fa' ? (
									<p className="mb-3 text-gray-700">
										ویجتی‌فای هیچ داده کاربری را با اشخاص ثالث به اشتراک نمی‌گذارد.
									</p>
								) : (
									<p className="mb-3 text-gray-700">
										Widgetify does not share any user data with third parties.
									</p>
								)}
							</div>
						</section>

						<section>
							<h2 className="pb-2 mb-3 text-xl font-bold border-b">
								{language === 'fa' ? '۶. امنیت' : '6. Security'}
							</h2>
							<div className="ml-4">
								{language === 'fa' ? (
									<p className="mb-3 text-gray-700">
										ویجتی‌فای یک پروژه متن‌باز است و کد آن برای بررسی عمومی در دسترس است.
										این شفافیت به کاربران امکان می‌دهد از امنیت افزونه اطمینان حاصل کنند.
									</p>
								) : (
									<p className="mb-3 text-gray-700">
										Widgetify is an open-source project, and its code is available for
										public review. This transparency allows users to verify the
										extension's security.
									</p>
								)}
							</div>
						</section>

						<section>
							<h2 className="pb-2 mb-3 text-xl font-bold border-b">
								{language === 'fa' ? '۷. نگه‌داری داده‌ها' : '7. Data Retention'}
							</h2>
							<div className="ml-4">
								{language === 'fa' ? (
									<p className="mb-3 text-gray-700">
										داده‌های مرتبط با تنظیمات کاربر و اطلاعات ورود (در صورت فعال‌سازی
										همگام‌سازی) تنها تا زمانی که کاربر از سرویس استفاده می‌کند نگهداری
										می‌شوند. در صورت غیرفعال شدن حساب یا عدم استفاده طولانی‌مدت، این داده‌ها
										ممکن است به صورت خودکار حذف شوند.
									</p>
								) : (
									<p className="mb-3 text-gray-700">
										User settings data and login information (if synchronization is
										enabled) are only retained as long as the user uses the service. In
										case of account deactivation or extended inactivity, this data may be
										automatically deleted.
									</p>
								)}
							</div>
						</section>

						<section>
							<h2 className="pb-2 mb-3 text-xl font-bold border-b">
								{language === 'fa' ? '۸. حذف داده‌ها' : '8. Data Deletion'}
							</h2>
							<div className="ml-4">
								{language === 'fa' ? (
									<p className="mb-3 text-gray-700">
										کاربران می‌توانند در هر زمان درخواست حذف کامل داده‌های خود را با ارسال
										ایمیل به{' '}
										<a href="mailto:privacy@widgetify.ir" className="text-blue-600">
											privacy@widgetify.ir
										</a>{' '}
										ثبت کنند.
									</p>
								) : (
									<p className="mb-3 text-gray-700">
										Users can request complete deletion of their data at any time by
										sending an email to{' '}
										<a href="mailto:privacy@widgetify.ir" className="text-blue-600">
											privacy@widgetify.ir
										</a>
										.
									</p>
								)}
							</div>
						</section>

						<section>
							<h2 className="pb-2 mb-3 text-xl font-bold border-b">
								{language === 'fa'
									? '۹. تغییرات در سیاست حریم خصوصی'
									: '9. Changes to Privacy Policy'}
							</h2>
							<div className="ml-4">
								{language === 'fa' ? (
									<p className="mb-3 text-gray-700">
										ممکن است این سیاست را به‌روزرسانی کنیم. در صورت ایجاد تغییرات اساسی، به
										کاربران اطلاع‌رسانی خواهیم کرد.
									</p>
								) : (
									<p className="mb-3 text-gray-700">
										We may update this policy. In case of significant changes, we will
										notify users.
									</p>
								)}
							</div>
						</section>

						<section>
							<h2 className="pb-2 mb-3 text-xl font-bold border-b">
								{language === 'fa' ? '۱۰. تماس با ما' : '10. Contact Us'}
							</h2>
							<div className="ml-4">
								{language === 'fa' ? (
									<>
										<p className="mb-3 text-gray-700">
											اگر سؤالی درباره این سیاست حریم خصوصی دارید، لطفاً از طریق ایمیل زیر
											با ما تماس بگیرید:
										</p>
										<p className="text-blue-600">
											<a href="mailto:privacy@widgetify.ir">privacy@widgetify.ir</a>
										</p>
									</>
								) : (
									<>
										<p className="mb-3 text-gray-700">
											If you have any questions about this privacy policy, please contact
											us via the email below:
										</p>
										<p className="text-blue-600">
											<a href="mailto:privacy@widgetify.ir">privacy@widgetify.ir</a>
										</p>
									</>
								)}
							</div>
						</section>
					</div>

					{/* Open source note */}
					<div className="p-4 mt-8 border rounded-lg bg-gray-50">
						{language === 'fa' ? (
							<p className="text-gray-700">
								<strong>توجه:</strong> ویجتی‌فای یک پروژه متن‌باز است و کد آن به صورت عمومی
								در
								<a
									href="https://github.com/widgetify-app"
									className="mx-1 text-blue-600 hover:underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									گیت‌هاب
								</a>
								قابل دسترسی است.
							</p>
						) : (
							<p className="text-gray-700">
								<strong>Note:</strong> Widgetify is an open-source project and its code is
								publicly available on
								<a
									href="https://github.com/widgetify-app"
									className="mx-1 text-blue-600 hover:underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									GitHub
								</a>
								.
							</p>
						)}
					</div>

					{/* Back button */}
					<div className="pt-4 mt-8 border-t">
						<Link
							to="/"
							className="inline-flex items-center text-blue-600 hover:underline"
						>
							<ArrowLeft size={16} className={language === 'fa' ? 'ml-1' : 'mr-1'} />
							{language === 'fa' ? 'بازگشت به صفحه اصلی' : 'Return to Home Page'}
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}
