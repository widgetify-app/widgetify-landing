export type Gender = 'MALE' | 'FEMALE' | 'OTHER'

export interface User {
	email: string
	avatar?: string
	gender?: Gender
	username: string | null
	name: string
	birthDate?: string
	connections: string[]
	permissions: string[]
	verified: boolean
}

export interface LoginRequest {
	email: string
	password: string
}

export interface RegisterRequest {
	name: string
	email: string
	password: string
}

export interface AuthResponse {
	token: string
}
