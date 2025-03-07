import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const location = useLocation()

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const isActive = (path: string) => {
		return location.pathname === path
			? 'text-blue-600 font-medium'
			: 'text-gray-600 hover:text-blue-600'
	}

	return (
		<nav className="sticky top-0 z-50 bg-white shadow-sm">
			<div className="flex items-center justify-between h-16">
				{/* Logo and site name */}
				<div className="flex items-center">
					<Link to="/" className="flex items-center">
						<img
							src="/icons/icon-96x96.png"
							alt="ویجتیفای"
							className="object-contain w-8 h-8"
							onError={(e) => {
								e.currentTarget.src = 'https://placehold.co/96x96?text=W'
							}}
						/>
						<span className="mr-2 text-xl font-bold text-blue-600">ویجتیفای</span>
					</Link>
				</div>

				{/* Desktop Navigation */}
				<div className="hidden md:block">
					<div className="flex items-center space-x-4 rtl:space-x-reverse">
						<Link
							to="/"
							className={`px-3 py-2 rounded-md transition-colors ${isActive('/')}`}
						>
							صفحه اصلی
						</Link>
						<Link
							to="/extension"
							className={`px-3 py-2 rounded-md transition-colors ${isActive('/extension')}`}
						>
							اکستنشن مرورگر
						</Link>
						<Link
							to="/donate"
							className={`px-3 py-2 rounded-md transition-colors ${isActive('/donate')}`}
						>
							حمایت از ما
						</Link>
					</div>
				</div>

				{/* Mobile menu button */}
				<div className="flex md:hidden">
					<button
						onClick={toggleMenu}
						className="text-gray-600 hover:text-blue-600 focus:outline-none"
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="md:hidden">
					<div className="flex flex-col px-2 pt-2 pb-3 space-y-2">
						<Link
							to="/"
							className={`px-3 py-2 rounded-md transition-colors ${isActive('/')}`}
							onClick={() => setIsMenuOpen(false)}
						>
							صفحه اصلی
						</Link>
						<Link
							to="/extension"
							className={`px-3 py-2 rounded-md transition-colors ${isActive('/extension')}`}
							onClick={() => setIsMenuOpen(false)}
						>
							اکستنشن مرورگر
						</Link>
						<Link
							to="/donate"
							className={`px-3 py-2 rounded-md transition-colors ${isActive('/donate')}`}
							onClick={() => setIsMenuOpen(false)}
						>
							حمایت از ما
						</Link>
					</div>
				</div>
			)}
		</nav>
	)
}
