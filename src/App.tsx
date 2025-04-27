import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import FooterSection from './components/FooterSection'
import Navbar from './components/Navbar'
import PageWrapper from './components/PageWrapper'
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
					<Route
						path="/"
						element={
							<PageWrapper>
								<QueryParamHandler />
							</PageWrapper>
						}
					/>
					<Route
						path="/donate"
						element={
							<PageWrapper>
								<Donate />
							</PageWrapper>
						}
					/>
					<Route
						path="/extension"
						element={
							<PageWrapper fullWidth={true}>
								<Extension />
							</PageWrapper>
						}
					/>
					<Route
						path="/privacy"
						element={
							<PageWrapper>
								<PrivacyPolicy />
							</PageWrapper>
						}
					/>
					<Route
						path="/forgot-password"
						element={
							<PageWrapper>
								<ForgotPassword />
							</PageWrapper>
						}
					/>
					<Route
						path="/login"
						element={
							<PageWrapper>
								<Login />
							</PageWrapper>
						}
					/>
					<Route
						path="/register"
						element={
							<PageWrapper>
								<Register />
							</PageWrapper>
						}
					/>

					{/* Protected Routes */}
					<Route element={<ProtectedRoute />}>
						<Route
							path="/profile"
							element={
								<PageWrapper>
									<Profile />
								</PageWrapper>
							}
						/>
					</Route>

					{/* Catch-all route for 404 */}
					<Route
						path="*"
						element={
							<PageWrapper>
								<NotFound />
							</PageWrapper>
						}
					/>
				</Routes>
				<FooterSection />
			</AuthProvider>
		</BrowserRouter>
	)
}
