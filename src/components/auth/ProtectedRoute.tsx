import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export default function ProtectedRoute() {
	const { isAuthenticated, isLoading } = useAuth()
	const location = useLocation()

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

	if (!isAuthenticated) {
		// Redirect to the login page, but save the current location the user was trying to access
		return <Navigate to="/login" state={{ from: location }} replace />
	}

	// If authenticated, render the child routes
	return <Outlet />
}
