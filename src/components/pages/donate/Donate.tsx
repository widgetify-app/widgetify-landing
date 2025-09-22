import ContainerWrapper from '../../ContainerWrapper'
import { PaymentSection } from './paymentSection'

export default function Donate() {
	return (
		<div className="min-h-screen overflow-hidden">
			{/* Hero Section */}
			<div className="relative px-4 py-20">
				<div className="flex flex-col gap-6 mx-auto max-w-7xl">
					{/* Header */}
					<div className="flex flex-col items-center justify-center gap-4 animate-fade-in">
						<h1 className="py-1 text-4xl font-bold text-gray-900 md:text-6xl lg:text-7xl animate-slide-down">
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
								حمایت از ویجتی‌فای
							</span>
						</h1>

						<p className="max-w-3xl mx-auto text-sm font-light text-center text-gray-600 md:text-xl animate-fade-in-up">
							با حمایت مالی از ویجتی‌فای، به ما کمک کنید تا خدمات بهتری ارائه
							دهیم. تمامی مبالغ دریافتی صرف توسعه و نگهداری پروژه خواهد شد.
						</p>

						<div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-3 mb-6 animate-scale-in" />
					</div>
				</div>
			</div>

			<ContainerWrapper>
				<div className="space-y-10">
					<section>
						<div className="mb-12 text-center animate-on-scroll">
							<h2 className="mb-2 text-2xl font-bold text-gray-900">
								راه‌های حمایت از پروژه
							</h2>
							<p className="max-w-2xl mx-auto font-light text-gray-600">
								شما می‌توانید با روش‌های مختلف از ویجتی‌فای حمایت کنید و به
								بهبود عملکرد آن کمک نمایید
							</p>
						</div>

						<PaymentSection />
					</section>

					<div className="max-w-4xl p-8 mx-auto border border-purple-100 bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl animate-on-scroll">
						<div className="text-center">
							<div className="inline-flex items-center justify-center w-20 h-20 mb-6 text-4xl text-white rounded-full shadow-lg bg-gradient-to-br from-blue-600 to-purple-600">
								🙏
							</div>
							<h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
								از حمایت شما سپاسگزاریم
							</h2>
							<p className="max-w-2xl mx-auto mb-6 text-lg text-gray-600">
								حمایت‌های شما به ما انگیزه می‌دهد تا ویجتی‌فای را روز به روز
								بهتر کنیم. با تشکر از اعتماد شما.
							</p>

							<div className="flex flex-wrap justify-center gap-3 mb-6 text-sm">
								<span className="px-3 py-1 text-gray-700 rounded-full bg-white/70">
									💝 سپاسگزاریم
								</span>
								<span className="px-3 py-1 text-gray-700 rounded-full bg-white/70">
									🚀 پیشرفت مداوم
								</span>
								<span className="px-3 py-1 text-gray-700 rounded-full bg-white/70">
									👥 جامعه فعال
								</span>
								<span className="px-3 py-1 text-gray-700 rounded-full bg-white/70">
									✨ همیشه بهتر
								</span>
							</div>

							<div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-scale-in" />
						</div>
					</div>
				</div>
			</ContainerWrapper>
		</div>
	)
}
