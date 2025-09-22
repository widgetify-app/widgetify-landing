'use client'
import { useProfileForm } from '../../hooks/useProfileForm'
import type { User } from '../../types/auth'
import ProfileAvatarUpload from './ProfileAvatarUpload'
import ProfileDatePicker from './ProfileDatePicker'
import ProfileFormButtons from './ProfileFormButtons'
import ProfileFormField from './ProfileFormField'

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
	const {
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
		handleInputChange,
		handleDateChange,
		handleSubmit,
	} = useProfileForm({ user, onSuccess })

	const genderOptions = [
		{ value: '', label: 'انتخاب کنید' },
		{ value: 'MALE', label: 'مرد' },
		{ value: 'FEMALE', label: 'زن' },
		{ value: 'OTHER', label: 'سایر' },
	]

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			{error && (
				<div className="p-3 text-sm text-red-700 border border-red-300 rounded-lg bg-red-50">
					{error}
				</div>
			)}

			<ProfileAvatarUpload
				user={user}
				avatarPreview={avatarPreview}
				avatarError={avatarError}
				selectedAvatar={selectedAvatar}
				setSelectedAvatar={setSelectedAvatar}
				setAvatarPreview={setAvatarPreview}
				setAvatarError={setAvatarError}
			/>

			<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				<ProfileFormField
					id="name"
					name="name"
					label="نام"
					value={formData.name}
					onChange={handleInputChange}
					placeholder="نام خود را وارد کنید"
					error={validationErrors.name}
				/>
				<ProfileFormField
					id="username"
					name="username"
					label="نام کاربری"
					value={formData.username}
					onChange={handleInputChange}
					maxLength={250}
					minLength={4}
					placeholder="نام کاربری خود را وارد کنید"
					error={validationErrors.username}
				/>{' '}
				<ProfileFormField
					id="gender"
					name="gender"
					label="جنسیت"
					type="select"
					value={formData.gender}
					onChange={handleInputChange}
					options={genderOptions}
					error={validationErrors.gender}
				/>
				{user.isBirthDateEditable ? (
					<ProfileDatePicker
						id="birthdate"
						label="تاریخ تولد"
						value={user.birthDate}
						onChange={handleDateChange}
						error={validationErrors.birthdate}
					/>
				) : (
					<div>
						<label className="block mb-1 text-sm font-medium text-gray-700">
							تاریخ تولد
						</label>
						<div className="px-3 py-2 text-gray-500 bg-gray-100 border border-gray-300 rounded-lg">
							{user.birthDate || 'نامشخص'}
						</div>
						<p className="mt-1 text-xs text-gray-500">
							تاریخ تولد قابل ویرایش نیست
						</p>
					</div>
				)}
			</div>

			<ProfileFormButtons
				isSubmitting={isSubmitting}
				avatarError={avatarError}
				onCancel={onCancel}
			/>
		</form>
	)
}
