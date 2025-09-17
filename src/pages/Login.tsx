'use client'

import { useMutation } from '@tanstack/react-query'
import { AlertCircle, Lock, LogIn, Mail } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import FormInput from '../components/auth/FormInput'
import { useAuth } from '../contexts/AuthContext'
import { useDocumentTitle } from '../hooks'
import { authService } from '../services/authService'
import type { LoginRequest } from '../types/auth'
import { translateError } from '../utils/errorTranslation'

export default function Login() {
	useDocumentTitle('ورود')

	const [formData, setFormData] = useState<LoginRequest>({
		email: '',
		password: '',
	})
	const [errors, setErrors] = useState<Record<string, string>>({})
	const router = useRouter()
	const { login } = useAuth()

	const loginMutation = useMutation({
		mutationFn: authService.login,
		onSuccess: (token) => {
			login(token)
			router.push('/profile')
		},
		onError: (error: any) => {
			const translatedError = translateError(error)

			if (typeof translatedError === 'string') {
				setErrors({ general: translatedError })
			} else {
				setErrors(translatedError)

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

		if (!formData.email) {
			newErrors.email = 'ایمیل الزامی است'
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'ایمیل نامعتبر است'
		}

		if (!formData.password) {
			newErrors.password = 'رمز عبور الزامی است'
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (validateForm()) {
			loginMutation.mutate(formData)
		}
	}

	return (
		<div className="min-h-screen py-16">
			<div className="max-w-md mx-auto">
				<div className="p-8 bg-white border border-gray-200 shadow-lg rounded-xl">
					<div className="mb-4 text-center">
						<div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
							<LogIn size={32} className="text-white" />
						</div>
						<h1 className="text-2xl font-bold">ورود به حساب کاربری</h1>
						<p className="mt-2 text-gray-600">به ویجتی‌فای خوش آمدید</p>
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

						<FormInput
							id="password"
							name="password"
							label="رمز عبور"
							type="password"
							value={formData.password}
							onChange={handleChange}
							placeholder="رمز عبور خود را وارد کنید"
							error={errors.password}
							icon={Lock}
							required
							autoComplete="current-password"
						/>

						<div className="flex flex-row-reverse items-center mb-4">
							<Link
								href="/forgot-password"
								className="text-sm text-blue-600 hover:underline"
							>
								فراموشی رمز عبور؟
							</Link>
						</div>

						<button
							type="submit"
							className="w-full p-3 font-medium text-white transition rounded-lg flex items-center justify-center hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:from-blue-700 hover:to-purple-700"
							disabled={loginMutation.isPending}
						>
							{loginMutation.isPending ? (
								<div className="w-5 h-5 ml-2 border-2 border-white rounded-full border-t-transparent animate-spin" />
							) : (
								<LogIn className="ml-2" size={18} />
							)}
							ورود به حساب کاربری
						</button>
					</form>

					<div className="mt-6 text-center">
						<p className="text-gray-600">
							حساب کاربری ندارید؟{' '}
							<Link
								href="/register"
								className="font-medium text-blue-600 hover:underline"
							>
								ثبت نام
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
