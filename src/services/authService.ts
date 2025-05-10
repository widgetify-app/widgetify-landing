import type { LoginRequest, RegisterRequest, User } from '../types/auth'
import { getMainClient } from './api'

class AuthService {
	async login(credentials: LoginRequest): Promise<string> {
		const api = await getMainClient()
		const response = await api.post('/auth/signin', credentials)

		if (response.data && typeof response.data.data === 'string') {
			return response.data.data
		}

		if (response.data && typeof response.data === 'string') {
			return response.data
		}

		throw new Error('Invalid token format received from server')
	}

	async register(userData: RegisterRequest): Promise<string> {
		const api = await getMainClient()
		const response = await api.post('/auth/signup', userData)

		if (response.data && typeof response.data.data === 'string') {
			return response.data.data
		}

		if (response.data && typeof response.data === 'string') {
			return response.data
		}

		throw new Error('Invalid token format received from server')
	}

	async getUserProfile(): Promise<User> {
		const api = await getMainClient()
		const response = await api.get<User>('/users/@me')
		return response.data
	}

	async updateUsername(username: string): Promise<User> {
		const api = await getMainClient()
		const response = await api.put('/users/@me/username', {
			username,
		})
		return response.data
	}

	async updateUserProfile(formData: FormData): Promise<User> {
		const api = await getMainClient()
		const response = await api.patch('/users/@me', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
		return response.data
	}

	async verifyEmail(token: string, email: string): Promise<void> {
		const api = await getMainClient()
		const response = await api.post('/auth/email/verify', {
			token,
			email,
		})

		return response.data
	}

	async sendVerificationEmail(): Promise<void> {
		const api = await getMainClient()
		const response = await api.post('/auth/email/resend-verify')
		return response.data
	}

	setToken(token: string): void {
		localStorage.setItem('token', token)
	}

	getToken(): string | null {
		return localStorage.getItem('token')
	}

	removeToken(): void {
		localStorage.removeItem('token')
	}

	isAuthenticated(): boolean {
		return !!this.getToken()
	}

	logout(): void {
		this.removeToken()
	}
}

export const authService = new AuthService()
