'use client'

import { TypeAnimation } from 'react-type-animation'

export function HomeHead() {
	return (
		<h1 className="py-1 text-4xl font-bold text-gray-900 md:text-6xl lg:text-7xl animate-slide-down">
			<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
				نیوتب مرورگرت رو
			</span>
			<span className="block text-center text-gray-800">
				<TypeAnimation
					sequence={['کارآمد کن!', 2000, 'جذاب کن!', 2000, 'حرفه‌ای کن!', 2000]}
					wrapper="span"
					speed={50}
					style={{ display: 'inline-block' }}
					repeat={Infinity}
					cursor={true}
				/>
			</span>
		</h1>
	)
}
