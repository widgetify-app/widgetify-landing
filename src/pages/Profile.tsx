import { LogOut, Mail, Settings, Shield, User } from 'lucide-react'
import { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import type { Gender } from '../types/auth'

export default function Profile() {
	const { user, logout, isLoading } = useAuth()
	const navigate = useNavigate()
	const [activeTab, setActiveTab] = useState<'profile' | 'settings'>('profile')

	// If user is not logged in, redirect to login page
	if (!isLoading && !user) {
		navigate('/login')
		return null
	}

	const handleLogout = () => {
		logout()
		navigate('/login')
	}

	// Function to get gender display name
	const getGenderDisplay = (gender?: Gender) => {
		switch (gender) {
			case 'MALE':
				return 'مرد'
			case 'FEMALE':
				return 'زن'
			case 'OTHER':
				return 'سایر'
			default:
				return 'نامشخص'
		}
	}

	// Function to get connection icon
	const getConnectionIcon = (connection: string) => {
		switch (connection.toLowerCase()) {
			case 'google':
				return <FaGoogle className="text-red-500" />
			default:
				return null
		}
	}

	if (isLoading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-center">
					<div className="w-16 h-16 mx-auto mb-4 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
					<p className="text-gray-600">در حال بارگذاری پروفایل...</p>
				</div>
			</div>
		)
	}

	return (
		<div className="min-h-screen py-16">
			<div className="max-w-4xl mx-auto overflow-hidden bg-white border border-gray-200 shadow-lg rounded-xl">
				{/* Profile Header */}
				<div className="p-6 text-white bg-gradient-to-r from-blue-600 to-purple-600">
					<div className="flex flex-col items-center md:flex-row md:gap-2">
						<div className="mb-4 md:mb-0">
							<div className="w-24 h-24 overflow-hidden border-4 border-white rounded-full">
								<img
									src={
										user?.avatar ||
										`https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=random&color=fff`
									}
									alt={user?.name}
									className="object-cover w-full h-full"
								/>
							</div>
						</div>
						<div className="flex-1 text-center md:text-right">
							<h1 className="mb-1 text-2xl font-bold">{user?.name}</h1>
							<p className="text-blue-100">{user?.email}</p>
						</div>
						<div className="mt-4 md:mt-0">
							<button
								onClick={handleLogout}
								className="flex items-center px-4 py-2 transition-colors rounded-lg bg-white/20 hover:bg-white/30"
							>
								<LogOut size={18} className="ml-2" />
								خروج
							</button>
						</div>
					</div>
				</div>

	 
				{/* Content */}
				<div className="p-6 space-y-6">
							{/* Basic Info */}
							<section>
								<h2 className="mb-4 text-xl font-bold">اطلاعات شخصی</h2>
								<div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
									<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
										<div className="flex items-center">
											<User className="ml-2 text-gray-500" size={20} />
											<div>
												<div className="text-sm text-gray-500">نام</div>
												<div className="font-medium">{user?.name}</div>
											</div>
										</div>
										<div className="flex items-center">
											<Mail className="ml-2 text-gray-500" size={20} />
											<div>
												<div className="text-sm text-gray-500">ایمیل</div>
												<div className="font-medium">{user?.email}</div>
											</div>
										</div>
										<div className="flex items-center">
											<User className="ml-2 text-gray-500" size={20} />
											<div>
												<div className="text-sm text-gray-500">جنسیت</div>
												<div className="font-medium">
													{getGenderDisplay(user?.gender)}
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>

							{/* Connected Accounts */}
							{user?.connections && user.connections.length > 0 && (
								<section>
									<h2 className="mb-4 text-xl font-bold">حساب‌های متصل</h2>
									<div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
										<div className="flex flex-wrap gap-2">
											{user.connections.map((connection, index) => (
												<div
													key={index}
													className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg"
												>
													<span>{getConnectionIcon(connection)}</span>
													{connection}
												</div>
											))}
										</div>
									</div>
								</section>
							)}
							 
				</div>
			</div>
		</div>
	)
}
