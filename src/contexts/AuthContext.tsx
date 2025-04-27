import { useQuery, useQueryClient } from '@tanstack/react-query'
import type React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import { authService } from '../services/authService'
import type { User } from '../types/auth'

interface AuthContextType {
	user: User | null
	isAuthenticated: boolean
	isLoading: boolean
	login: (token: string) => void
	logout: () => void
	updateProfile: (formData: FormData) => Promise<User>
	refetchUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null)
	const queryClient = useQueryClient()

	const {
		data: profileData,
		isLoading,
		refetch,
		error,
	} = useQuery({
		queryKey: ['userProfile'],
		queryFn: async () => {
			try {
				return await authService.getUserProfile()
			} catch (error) {
				console.error('Error fetching user profile:', error)
				authService.removeToken()
				throw error
			}
		},
		enabled: !!authService.getToken(),
		retry: 1,
	})

	useEffect(() => {
		if (profileData) {
			setUser(profileData)
		}
	}, [profileData])

	useEffect(() => {
		if (error) {
			authService.removeToken()
			setUser(null)
		}
	}, [error])

	const login = (token: string) => {
		authService.setToken(token)
		refetch()
	}

	const logout = () => {
		authService.logout()
		setUser(null)
	}

	const updateProfile = async (formData: FormData) => {
		const updatedUser = await authService.updateUserProfile(formData)
		await queryClient.invalidateQueries({ queryKey: ['userProfile'] })
		setUser(updatedUser)
		return updatedUser
	}

	const refetchUser = async () => {
		await refetch()
	}

	const value = {
		user,
		isAuthenticated: !!authService.getToken(),
		isLoading,
		login,
		logout,
		updateProfile,
		refetchUser
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
	const context = useContext(AuthContext)
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}
