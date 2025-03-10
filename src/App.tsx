import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import FooterSection from './components/FooterSection'
import Navbar from './components/Navbar'
import Donate from './pages/Donate'
import { Extension } from './pages/Extension'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'

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
			<Navbar />
			<Routes>
				<Route path="/" element={<QueryParamHandler />} />
				<Route path="/donate" element={<Donate />} />
				<Route path="/extension" element={<Extension />} />
				<Route path="/privacy" element={<PrivacyPolicy />} />
				{/* Catch-all route for 404 */}
				<Route path="*" element={<NotFound />} />
			</Routes>
			<FooterSection />
		</BrowserRouter>
	)
}
