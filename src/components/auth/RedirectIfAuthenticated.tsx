import { Navigate, Outlet,  } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export default function RedirectIfAuthenticated() {
	const { isAuthenticated, isLoading } = useAuth()

	if (isLoading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-center">
					<div className="w-16 h-16 mx-auto mb-4 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
					<p className="text-gray-600">در حال بررسی وضعیت ورود...</p>
				</div>
			</div>
		)
	}

	if (isAuthenticated) {
		return <Navigate to="/profile" replace />
	}

	return <Outlet />
}