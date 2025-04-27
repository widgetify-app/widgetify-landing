import { AlertCircle, Check, Edit3, LogOut, Mail, User, X } from 'lucide-react'
import { useRef, useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import type { Gender } from '../types/auth'
import { translateError } from '../utils/errorTranslation'


export default function Profile() {
	const { user, logout, isLoading, updateProfile } = useAuth()
	const navigate = useNavigate()
	const [isEditing, setIsEditing] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		gender: '',
	})
	const [selectedAvatar, setSelectedAvatar] = useState<File | null>(null)
	const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [avatarError, setAvatarError] = useState<string | null>(null)
	const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})
	const fileInputRef = useRef<HTMLInputElement>(null)

	// If user is not logged in, redirect to login page
	if (!isLoading && !user) {
		navigate('/login')
		return null
	}

	const handleLogout = () => {
		logout()
		navigate('/login')
	}

	const handleEditClick = () => {
		setFormData({
			name: user?.name || '',
			gender: user?.gender || '',
		})
		setAvatarPreview(user?.avatar || null)
		setIsEditing(true)
		setAvatarError(null)
		setError(null)
		setValidationErrors({})
	}

	const handleCancelEdit = () => {
		setIsEditing(false)
		setSelectedAvatar(null)
		setAvatarPreview(user?.avatar || null)
		setError(null)
		setAvatarError(null)
		setValidationErrors({})
	}

	const validateAvatar = (file: File): boolean => {
		// Check file type
		const validTypes = ['image/jpeg', 'image/jpg', 'image/png']
		if (!validTypes.includes(file.type)) {
			setAvatarError('فرمت تصویر باید JPG یا PNG باشد')
			return false
		}
		
		// Check file size (800KB = 800 * 1024 bytes)
		const maxSize = 800 * 1024
		if (file.size > maxSize) {
			setAvatarError('حجم تصویر نباید بیشتر از 800 کیلوبایت باشد')
			return false
		}
		
		setAvatarError(null)
		return true
	}

	const handleChangeAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			if (validateAvatar(file)) {
				setSelectedAvatar(file)
				const reader = new FileReader()
				reader.onloadend = () => {
					setAvatarPreview(reader.result as string)
				}
				reader.readAsDataURL(file)
			} else {
				// Reset file input
				if (fileInputRef.current) {
					fileInputRef.current.value = ''
				}
			}
		}
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = event.target
		setFormData(prev => ({
			...prev,
			[name]: value
		}))
		
		// Clear validation error when user starts typing
		if (validationErrors[name]) {
			setValidationErrors(prev => ({
				...prev,
				[name]: ''
			}))
		}
	}

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()
		
		// Check if there's still an avatar error
		if (avatarError) {
			return
		}
		
		setIsSubmitting(true)
		setError(null)
		setValidationErrors({})

		try {
			const updateFormData = new FormData()
			
			// Only add fields that have values
			if (formData.name) {
				updateFormData.append('name', formData.name)
			}
			
			if (formData.gender) {
				updateFormData.append('gender', formData.gender)
			}
			
			if (selectedAvatar) {
				updateFormData.append('avatar', selectedAvatar)
			}
			
			await updateProfile(updateFormData)
			setIsEditing(false)
		} catch (err: any) {
			// Use the translateError utility
			const translatedError = translateError(err)
			
			// Handle both string and object error responses
			if (typeof translatedError === 'string') {
				setError(translatedError)
			} else {
				// Handle field-specific validation errors
				setValidationErrors(translatedError)
				
				// If there are validation errors but no general message, add one
				if (Object.keys(translatedError).length > 0) {
					setError('لطفا خطاهای فرم را برطرف کنید')
				}
			}
		} finally {
			setIsSubmitting(false)
		}
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
						<div className="flex items-center justify-between mb-4">
							<h2 className="text-xl font-bold">اطلاعات شخصی</h2>
							{!isEditing && (
								<button
									onClick={handleEditClick}
									className="flex items-center px-3 py-1 text-sm transition-colors border rounded-lg border-blue-50 bg-blue-50 hover:bg-blue-100"
								>
									<Edit3 size={16} className="ml-1" />
									ویرایش
								</button>
							)}
						</div>
						
						{isEditing ? (
							<form onSubmit={handleSubmit} className="space-y-4">
								{error && (
									<div className="p-3 text-sm text-red-700 border border-red-300 rounded-lg bg-red-50">
										{error}
									</div>
								)}
								
								<div className="flex flex-col items-center mb-6">
									<div className="relative">
										<div 
											className="w-24 h-24 overflow-hidden border-4 border-white rounded-full cursor-pointer"
											onClick={() => fileInputRef.current?.click()}
										>
											<img
												src={
													avatarPreview ||
													`https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=random&color=fff`
												}
												alt="انتخاب تصویر"
												className="object-cover w-full h-full"
											/>
											<div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black/50 hover:opacity-100">
												<span className="text-xs text-white">تغییر تصویر</span>
											</div>
										</div>
									</div>
									<input
										type="file"
										ref={fileInputRef}
										onChange={handleChangeAvatar}
										accept="image/jpeg,image/jpg,image/png"
										className="hidden"
									/>
									{avatarError && (
										<div className="flex items-start mt-2 text-sm text-red-600">
											<AlertCircle className="w-4 h-4 mt-0.5 ml-1 flex-shrink-0" />
											<span>{avatarError}</span>
										</div>
									)}
									<p className="mt-2 text-xs text-gray-500">
										فرمت‌های مجاز: JPG، PNG - حداکثر حجم: 800 کیلوبایت
									</p>
								</div>
								
								<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
									<div className="space-y-2">
										<label htmlFor="name" className="block text-sm font-medium text-gray-700">
											نام
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											className={`w-full p-3 border ${validationErrors.name ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} rounded-lg focus:ring-2`}
											placeholder="نام خود را وارد کنید"
										/>
										{validationErrors.name && (
											<div className="flex items-start mt-1 text-sm text-red-600">
												<AlertCircle className="w-4 h-4 mt-0.5 ml-1 flex-shrink-0" />
												<span>{validationErrors.name}</span>
											</div>
										)}
									</div>
									
									<div className="space-y-2">
										<label htmlFor="gender" className="block text-sm font-medium text-gray-700">
											جنسیت
										</label>
										<select
											id="gender"
											name="gender"
											value={formData.gender}
											onChange={handleInputChange}
											className={`w-full p-3 border ${validationErrors.gender ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} rounded-lg focus:ring-2`}
										>
											<option value="">انتخاب کنید</option>
											<option value="MALE">مرد</option>
											<option value="FEMALE">زن</option>
											<option value="OTHER">سایر</option>
										</select>
										{validationErrors.gender && (
											<div className="flex items-start mt-1 text-sm text-red-600">
												<AlertCircle className="w-4 h-4 mt-0.5 ml-1 flex-shrink-0" />
												<span>{validationErrors.gender}</span>
											</div>
										)}
									</div>
								</div>
								
								<div className="flex justify-end gap-3 pt-2">
									<button
										type="button"
										onClick={handleCancelEdit}
										className="flex items-center px-4 py-2 text-gray-700 transition-colors bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
										disabled={isSubmitting}
									>
										<X size={16} className="ml-1" />
										انصراف
									</button>
									<button
										type="submit"
										className={`flex items-center px-4 py-2 text-white transition-colors rounded-lg ${
											avatarError 
												? 'bg-gray-400 cursor-not-allowed' 
												: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
										}`}
										disabled={isSubmitting || !!avatarError}
									>
										{isSubmitting ? (
											<div className="w-4 h-4 ml-2 border-2 border-white rounded-full border-t-transparent animate-spin" />
										) : (
											<Check size={16} className="ml-1" />
										)}
										ذخیره تغییرات
									</button>
								</div>
							</form>
						) : (
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
						)}
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
