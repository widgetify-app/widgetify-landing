import { LogOut, Mail, Settings, Shield, User } from 'lucide-react'
import { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import ContainerWrapper from '../components/ContainerWrapper'
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
			<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
				<div className="text-center">
					<div className="w-16 h-16 mx-auto mb-4 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
					<p className="text-gray-600">در حال بارگذاری پروفایل...</p>
				</div>
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16">
			<ContainerWrapper>
				<div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
					{/* Profile Header */}
					<div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
						<div className="flex flex-col md:flex-row items-center">
							<div className="mb-4 md:mb-0 md:mr-6">
								<div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
									<img
										src={
											user?.avatar ||
											`https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=random&color=fff`
										}
										alt={user?.name}
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
							<div className="flex-1 text-center md:text-right">
								<h1 className="text-2xl font-bold mb-1">{user?.name}</h1>
								<p className="text-blue-100">{user?.email}</p>
							</div>
							<div className="mt-4 md:mt-0">
								<button
									onClick={handleLogout}
									className="flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
								>
									<LogOut size={18} className="ml-2" />
									خروج
								</button>
							</div>
						</div>
					</div>

					{/* Tabs */}
					<div className="border-b border-gray-200">
						<div className="flex">
							<button
								className={`px-6 py-3 font-medium transition-colors ${
									activeTab === 'profile'
										? 'text-blue-600 border-b-2 border-blue-600'
										: 'text-gray-600 hover:text-blue-600'
								}`}
								onClick={() => setActiveTab('profile')}
							>
								<span className="flex items-center">
									<User size={18} className="ml-2" />
									پروفایل
								</span>
							</button>
							<button
								className={`px-6 py-3 font-medium transition-colors ${
									activeTab === 'settings'
										? 'text-blue-600 border-b-2 border-blue-600'
										: 'text-gray-600 hover:text-blue-600'
								}`}
								onClick={() => setActiveTab('settings')}
							>
								<span className="flex items-center">
									<Settings size={18} className="ml-2" />
									تنظیمات
								</span>
							</button>
						</div>
					</div>

					{/* Content */}
					<div className="p-6">
						{activeTab === 'profile' ? (
							<div className="space-y-6">
								{/* Basic Info */}
								<section>
									<h2 className="text-xl font-bold mb-4">اطلاعات شخصی</h2>
									<div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="flex items-center">
												<User className="text-gray-500 ml-2" size={20} />
												<div>
													<div className="text-sm text-gray-500">نام</div>
													<div className="font-medium">{user?.name}</div>
												</div>
											</div>
											<div className="flex items-center">
												<Mail className="text-gray-500 ml-2" size={20} />
												<div>
													<div className="text-sm text-gray-500">ایمیل</div>
													<div className="font-medium">{user?.email}</div>
												</div>
											</div>
											<div className="flex items-center">
												<User className="text-gray-500 ml-2" size={20} />
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
										<h2 className="text-xl font-bold mb-4">حساب‌های متصل</h2>
										<div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
											<div className="flex flex-wrap gap-2">
												{user.connections.map((connection, index) => (
													<div
														key={index}
														className="flex items-center px-3 py-2 bg-white rounded-lg border border-gray-200"
													>
														<span className="mr-2">{getConnectionIcon(connection)}</span>
														{connection}
													</div>
												))}
											</div>
										</div>
									</section>
								)}

								{/* Permissions */}
								{user?.permissions && user.permissions.length > 0 && (
									<section>
										<h2 className="text-xl font-bold mb-4">دسترسی‌ها</h2>
										<div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
											<div className="flex flex-wrap gap-2">
												{user.permissions.map((permission, index) => (
													<div
														key={index}
														className="flex items-center px-3 py-2 bg-white rounded-lg border border-gray-200"
													>
														<Shield className="text-blue-600 ml-2" size={16} />
														{permission}
													</div>
												))}
											</div>
										</div>
									</section>
								)}
							</div>
						) : (
							<div className="text-center py-8">
								<Settings size={48} className="mx-auto mb-4 text-gray-400" />
								<h3 className="text-xl font-medium text-gray-700 mb-2">
									تنظیمات پروفایل
								</h3>
								<p className="text-gray-500 max-w-md mx-auto">
									بخش تنظیمات در حال توسعه است و به زودی امکان تغییر اطلاعات پروفایل فراهم
									خواهد شد.
								</p>
							</div>
						)}
					</div>
				</div>
			</ContainerWrapper>
		</div>
	)
}
