import jalaali from 'jalaali-js'
import { AlertCircle, Check, X } from 'lucide-react'
import { useRef, useState } from 'react'
import DateObject from 'react-date-object'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import DatePicker from 'react-multi-date-picker'
import { useAuth } from '../../contexts/AuthContext'
import { authService } from '../../services/authService'
import type { User } from '../../types/auth'
import { translateError } from '../../utils/errorTranslation'

interface EditProfileFormProps {
	user: User
	onCancel: () => void
	onSuccess: (updatedUser: User) => void
}

export default function EditProfileForm({
	user,
	onCancel,
	onSuccess,
}: EditProfileFormProps) {
	const [formData, setFormData] = useState({
		name: user?.name || '',
		gender: user?.gender || '',
		username: user?.username || '',
		birthdate: user?.birthDate || '',
	})

	const [selectedAvatar, setSelectedAvatar] = useState<File | null>(null)
	const [avatarPreview, setAvatarPreview] = useState<string | null>(user?.avatar || null)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [avatarError, setAvatarError] = useState<string | null>(null)
	const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})
	const fileInputRef = useRef<HTMLInputElement>(null)
	const { updateUsername } = useAuth()

	const convertPersianDigits = (str: string): string => {
		const regex = /[۰-۹]/g
		return str.replace(regex, (match) => String.fromCharCode(match.charCodeAt(0) - 1728))
	}

	const convertPersianDateToGregorian = (persianDate: string): string => {
		if (!persianDate) return ''

		try {
			const westernDate = convertPersianDigits(persianDate)

			const [jy, jm, jd] = westernDate.split('-').map(Number)

			const gregorian = jalaali.toGregorian(jy, jm, jd)

			return `${gregorian.gy}-${String(gregorian.gm).padStart(2, '0')}-${String(gregorian.gd).padStart(2, '0')}`
		} catch (error) {
			console.error('Error converting Persian date to Gregorian:', error)
			return persianDate
		}
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
				if (fileInputRef.current) {
					fileInputRef.current.value = ''
				}
			}
		}
	}

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		const { name, value } = event.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))

		if (validationErrors[name]) {
			setValidationErrors((prev) => ({
				...prev,
				[name]: '',
			}))
		}
	}

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()

		if (avatarError) {
			return
		}

		setIsSubmitting(true)
		setError(null)
		setValidationErrors({})

		try {
			const updateFormData = new FormData()
			let updatedUser: User = { ...user } // Only add fields that have values
			if (formData.name) {
				updateFormData.append('name', formData.name)
			}

			if (formData.gender) {
				updateFormData.append('gender', formData.gender)
			}

			if (formData.birthdate) {
				const gregorianBirthdate = convertPersianDateToGregorian(formData.birthdate)
				updateFormData.append('birthdate', gregorianBirthdate)
			}

			if (selectedAvatar) {
				updateFormData.append('avatar', selectedAvatar)
			}

			if (formData.username && formData.username !== user.username) {
				const usernameRegex = /^[a-zA-Z0-9_]{4,250}$/
				if (!usernameRegex.test(formData.username)) {
					setValidationErrors((prev) => ({
						...prev,
						username:
							'نام کاربری باید فقط شامل حروف انگلیسی، اعداد و زیرخط باشد و بین 4 تا 250 کاراکتر باشد.',
					}))
					setIsSubmitting(false)
					return
				}

				try {
					updatedUser = await updateUsername(formData.username)
				} catch (usernameErr: any) {
					const translatedError = translateError(usernameErr)

					if (typeof translatedError === 'string') {
						setValidationErrors({
							username: translatedError,
						})
					} else {
						setValidationErrors((prev) => ({
							...prev,
							username: 'خطا در به‌روزرسانی نام کاربری',
						}))
					}
					setIsSubmitting(false)
					return
				}
			}

			if (
				updateFormData.has('name') ||
				updateFormData.has('gender') ||
				updateFormData.has('birthdate') ||
				updateFormData.has('avatar')
			) {
				const profileUpdateResult = await authService.updateUserProfile(updateFormData)
				updatedUser = {
					...updatedUser,
					...profileUpdateResult,
				}
			}

			onSuccess(updatedUser)
		} catch (err: any) {
			const translatedError = translateError(err)

			if (typeof translatedError === 'string') {
				setError(translatedError)
			} else {
				setValidationErrors(translatedError)

				if (Object.keys(translatedError).length > 0) {
					setError('لطفا خطاهای فرم را برطرف کنید')
				}
			}
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
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
						className={`w-full p-3 border ${validationErrors.name ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} rounded-lg focus:outline-0 focus:ring-2`}
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
					<label htmlFor="username" className="block text-sm font-medium text-gray-700">
						نام کاربری
					</label>
					<input
						type="text"
						id="username"
						name="username"
						value={formData.username}
						onChange={handleInputChange}
						maxLength={250}
						minLength={4}
						className={`w-full p-3 border focus:outline-0 ${validationErrors.username ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} rounded-lg focus:ring-2`}
						placeholder="نام کاربری خود را وارد کنید"
					/>
					{validationErrors.username && (
						<div className="flex items-start mt-1 text-sm text-red-600">
							<AlertCircle className="w-4 h-4 mt-0.5 ml-1 flex-shrink-0" />
							<span>{validationErrors.username}</span>
						</div>
					)}
				</div>{' '}
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
				</div>{' '}
				<div className="space-y-2">
					<label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
						تاریخ تولد
					</label>
					<DatePicker
						value={formData.birthdate}
						onChange={(date) => {
							const dateStr = date ? date.format('YYYY-MM-DD') : ''
							setFormData((prev) => ({
								...prev,
								birthdate: dateStr,
							}))
							if (validationErrors.birthdate) {
								setValidationErrors((prev) => ({
									...prev,
									birthdate: '',
								}))
							}
						}}
						calendar={persian}
						locale={persian_fa}
						calendarPosition="bottom-right"
						placeholder="تاریخ تولد خود را انتخاب کنید"
						maxDate={new DateObject({ calendar: persian, locale: persian_fa })}
						className={`w-full p-3 border ${validationErrors.birthdate ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} rounded-lg focus:ring-2`}
						inputClass="w-full p-3 border-0 outline-none bg-transparent"
						containerClassName="w-full"
					/>
					{validationErrors.birthdate && (
						<div className="flex items-start mt-1 text-sm text-red-600">
							<AlertCircle className="w-4 h-4 mt-0.5 ml-1 flex-shrink-0" />
							<span>{validationErrors.birthdate}</span>
						</div>
					)}
				</div>
			</div>

			<div className="flex justify-end gap-3 pt-2">
				<button
					type="button"
					onClick={onCancel}
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
	)
}
