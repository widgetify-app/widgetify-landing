'use client'

import { useMutation } from '@tanstack/react-query'
import { AlertCircle, CheckCircle, Lock, Mail, User, UserPlus } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import FormInput from '../components/auth/FormInput'
import { useAuth } from '../contexts/AuthContext'
import { useDocumentTitle } from '../hooks'
import { authService } from '../services/authService'
import type { RegisterRequest } from '../types/auth'
import { translateError } from '../utils/errorTranslation'

export default function Register() {
	useDocumentTitle('ثبت نام')

	const [formData, setFormData] = useState<
		RegisterRequest & { confirmPassword: string }
	>({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	})
	const [errors, setErrors] = useState<Record<string, string>>({})
	const router = useRouter()
	const { login } = useAuth()

	const registerMutation = useMutation({
		mutationFn: authService.register,
		onSuccess: (token) => {
			login(token)
			router.push('/profile')
		},
		onError: (error: any) => {
			// Use enhanced error translation utility
			const translatedError = translateError(error)

			// Handle both string and object error responses
			if (typeof translatedError === 'string') {
				setErrors({ general: translatedError })
			} else {
				// Handle field-specific validation errors
				setErrors(translatedError)

				// If there are validation errors but no field-specific error for general display,
				// add a general message
				if (Object.keys(translatedError).length > 0 && !translatedError.general) {
					setErrors({
						...translatedError,
						general: 'لطفا خطاهای فرم را برطرف کنید',
					})
				}
			}
		},
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
		// Clear error when user starts typing again
		if (errors[name]) {
			setErrors({ ...errors, [name]: '' })
		}
	}

	const validateForm = () => {
		const newErrors: Record<string, string> = {}

		if (!formData.name.trim()) {
			newErrors.name = 'نام الزامی است'
		}

		if (!formData.email) {
			newErrors.email = 'ایمیل الزامی است'
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'ایمیل نامعتبر است'
		}

		if (!formData.password) {
			newErrors.password = 'رمز عبور الزامی است'
		} else if (formData.password.length < 8) {
			newErrors.password = 'رمز عبور باید حداقل 8 کاراکتر باشد'
		}

		if (formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = 'تکرار رمز عبور با رمز عبور مطابقت ندارد'
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (validateForm()) {
			const { confirmPassword, ...registerData } = formData
			registerMutation.mutate(registerData)
		}
	}

	return (
		<div className="min-h-screen py-16">
			<div className="max-w-md mx-auto">
				<div className="p-8 bg-white border border-gray-200 shadow-lg rounded-xl">
					<div className="mb-4 text-center">
						<div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
							<UserPlus size={32} className="text-white" />
						</div>
						<h1 className="text-2xl font-bold">ثبت نام در ویجتی‌فای</h1>
						<p className="mt-2 text-gray-600">حساب کاربری جدید ایجاد کنید</p>
					</div>

					{errors.general && (
						<div className="p-2 mb-2 border border-red-200 rounded-lg bg-red-50">
							<div className="flex items-start gap-1">
								<AlertCircle className="text-red-500 mt-0.5" size={16} />
								<p className="text-red-700">{errors.general}</p>
							</div>
						</div>
					)}

					<form onSubmit={handleSubmit}>
						<FormInput
							id="name"
							name="name"
							label="نام"
							type="text"
							value={formData.name}
							onChange={handleChange}
							placeholder="نام کامل خود را وارد کنید"
							error={errors.name}
							icon={User}
							required
							autoComplete="name"
						/>

						<FormInput
							id="email"
							name="email"
							label="ایمیل"
							type="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="example@email.com"
							error={errors.email}
							icon={Mail}
							required
							autoComplete="email"
						/>

						<div className="flex gap-4">
							<div className="flex-1">
								<FormInput
									id="password"
									name="password"
									label="رمز عبور"
									type="password"
									value={formData.password}
									onChange={handleChange}
									placeholder="حداقل 8 کاراکتر"
									error={errors.password}
									icon={Lock}
									required
									autoComplete="new-password"
								/>
							</div>
							<div className="flex-1">
								<FormInput
									id="confirmPassword"
									name="confirmPassword"
									label="تکرار رمز عبور"
									type="password"
									value={formData.confirmPassword}
									onChange={handleChange}
									placeholder="تکرار رمز"
									error={errors.confirmPassword}
									icon={CheckCircle}
									required
									autoComplete="new-password"
								/>
							</div>
						</div>

						<button
							type="submit"
							className="w-full p-3 font-medium text-white transition rounded-lg flex items-center justify-center hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:from-blue-700 hover:to-purple-700"
							disabled={registerMutation.isPending}
						>
							{registerMutation.isPending ? (
								<div className="w-5 h-5 ml-2 border-2 border-white rounded-full border-t-transparent animate-spin" />
							) : (
								<UserPlus className="ml-2" size={18} />
							)}
							ثبت نام
						</button>
					</form>

					<div className="mt-6 text-center">
						<p className="text-gray-600">
							حساب کاربری دارید؟{' '}
							<Link
								href="/login"
								className="font-medium text-blue-600 hover:underline"
							>
								ورود
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
