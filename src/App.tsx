import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/auth/ProtectedRoute'
import RedirectIfAuthenticated from './components/auth/RedirectIfAuthenticated'
import FooterSection from './components/FooterSection'
import Navbar from './components/Navbar'
import PageWrapper from './components/PageWrapper'
import { AuthProvider } from './contexts/AuthContext'
import Donate from './pages/Donate'
import ForgotPassword from './pages/ForgotPassword'
import { Home } from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Profile from './pages/Profile'
import Register from './pages/Register'
import VerifyEmail from './pages/VerifyEmail'

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
								<Home />
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
								<Home />
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
						path="/verify-email"
						element={
							<PageWrapper>
								<VerifyEmail />
							</PageWrapper>
						}
					/>

					<Route element={<RedirectIfAuthenticated />}>
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
					</Route>

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
