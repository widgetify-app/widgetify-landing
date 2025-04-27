import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import FooterSection from './components/FooterSection'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/auth/ProtectedRoute'
import { AuthProvider } from './contexts/AuthContext'
import Donate from './pages/Donate'
import { Extension } from './pages/Extension'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Profile from './pages/Profile'
import Register from './pages/Register'

function QueryParamHandler() {
	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const page = queryParams.get('page')
	if (page === 'privacy') {
		return <Navigate to="/privacy" replace />
	}

	return <Home />
}

export default function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Navbar />
				<Routes>
					{/* Public Routes */}
					<Route path="/" element={<QueryParamHandler />} />
					<Route path="/donate" element={<Donate />} />
					<Route path="/extension" element={<Extension />} />
					<Route path="/privacy" element={<PrivacyPolicy />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />

					{/* Protected Routes */}
					<Route element={<ProtectedRoute />}>
						<Route path="/profile" element={<Profile />} />
					</Route>

					{/* Catch-all route for 404 */}
					<Route path="*" element={<NotFound />} />
				</Routes>
				<FooterSection />
			</AuthProvider>
		</BrowserRouter>
	)
}
