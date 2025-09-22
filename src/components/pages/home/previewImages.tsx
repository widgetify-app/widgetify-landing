'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const previewImages = [
	{
		src: '/preview-1.png',
		alt: 'پیش‌نمایش اول - ویجت‌های مالی و اخبار',
		title: 'ویجت‌های مالی و اخبار',
		description: '🎨 هرطور دوست داری شخصی‌سازی کن!',
	},
	{
		src: '/preview-2.png',
		alt: 'پیش‌نمایش دوم - ویجت‌های کاربردی',
		title: 'ویجت‌های کاربردی',
		description: '✨ چیدمان ویجت‌ها رو به سلیقه خودت تنظیم کن',
	},
	{
		src: '/widgets.png',
		alt: 'مجموعه کامل ویجت‌ها',
		title: 'مجموعه کامل ویجت‌ها',
		description: '🚀 همه ویجت‌ها رو یکجا ببین!',
	},
]

export function PreviewImages() {
	const [currentSlide, setCurrentSlide] = useState(0)

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % previewImages.length)
	}

	const prevSlide = () => {
		setCurrentSlide(
			(prev) => (prev - 1 + previewImages.length) % previewImages.length
		)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % previewImages.length)
		}, 5000)
		return () => clearInterval(interval)
	}, [])

	return (
		<div className="relative max-w-5xl mx-auto">
			<div className="overflow-hidden rounded-3xl aspect-video animate-slide-up-delayed bg-gradient-to-br from-blue-100 to-purple-100">
				<div className="relative w-full h-full">
					{previewImages.map((image, index) => (
						<div
							key={index}
							className={`absolute inset-0 transition-opacity duration-1000 ${
								index === currentSlide ? 'opacity-100' : 'opacity-0'
							}`}
						>
							<Image
								src={image.src}
								alt={image.alt}
								className="object-contain w-full h-full"
								onError={(e) => {
									e.currentTarget.src = `https://placehold.co/1200x675?text=${encodeURIComponent(image.title)}`
								}}
								width={1000}
								height={100}
							/>
						</div>
					))}
				</div>

				{/* Navigation Buttons */}
				<button
					onClick={prevSlide}
					className="absolute p-3 text-white transition-all duration-300 transform -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/50 hover:bg-black/70 hover:scale-110"
				>
					<FaChevronLeft size={20} />
				</button>
				<button
					onClick={nextSlide}
					className="absolute p-3 text-white transition-all duration-300 transform -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/50 hover:bg-black/70 hover:scale-110"
				>
					<FaChevronRight size={20} />
				</button>

				{/* Slide Indicators */}
				<div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
					{previewImages.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentSlide(index)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								index === currentSlide
									? 'bg-white scale-125'
									: 'bg-white/50 hover:bg-white/70'
							}`}
						/>
					))}
				</div>
			</div>

			{/* Slide Info */}
			<div className="absolute hidden px-6 py-3 text-white transform -translate-x-1/2 rounded-full bottom-16 left-1/2 bg-black/70 backdrop-blur-sm animate-fade-in-long-delayed sm:block">
				<span className="text-sm font-medium">
					{previewImages[currentSlide].description}
				</span>
			</div>
		</div>
	)
}
