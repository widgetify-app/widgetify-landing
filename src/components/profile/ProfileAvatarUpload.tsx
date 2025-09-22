'use client'

import { AlertCircle } from 'lucide-react'
import { useRef } from 'react'
import type { User } from '../../types/auth'

interface ProfileAvatarUploadProps {
	user: User
	avatarPreview: string | null
	avatarError: string | null
	selectedAvatar: File | null
	setSelectedAvatar: (file: File | null) => void
	setAvatarPreview: (preview: string | null) => void
	setAvatarError: (error: string | null) => void
}

export default function ProfileAvatarUpload({
	user,
	avatarPreview,
	avatarError,
	setSelectedAvatar,
	setAvatarPreview,
	setAvatarError,
}: ProfileAvatarUploadProps) {
	const fileInputRef = useRef<HTMLInputElement>(null)

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

	return (
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
	)
}
