import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import type { User } from '../types/auth'
import { convertPersianDateToGregorian } from '../utils/dateUtils'
import { translateError } from '../utils/errorTranslation'

interface UseProfileFormProps {
	user: User
	onSuccess: (updatedUser: User) => void
}

export const useProfileForm = ({ user, onSuccess }: UseProfileFormProps) => {
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

	const { updateUsername, updateProfile } = useAuth()

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

	const handleDateChange = (date: any) => {
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
			let updatedUser: User = { ...user }

			if (formData.name) {
				updateFormData.append('name', formData.name)
			}

			if (formData.gender) {
				updateFormData.append('gender', formData.gender)
			}

			if (formData.birthdate !== user.birthDate) {
				if (formData.birthdate && formData.birthdate.trim() !== '') {
					const gregorianBirthdate = convertPersianDateToGregorian(formData.birthdate)
					if (gregorianBirthdate) {
						updateFormData.append('birthdate', gregorianBirthdate)
					}
				}
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
				const profileUpdateResult = await updateProfile(updateFormData)
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

	return {
		formData,
		selectedAvatar,
		setSelectedAvatar,
		avatarPreview,
		setAvatarPreview,
		isSubmitting,
		error,
		avatarError,
		setAvatarError,
		validationErrors,
		setValidationErrors,
		handleInputChange,
		handleDateChange,
		handleSubmit,
	}
}
