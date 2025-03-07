import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FooterSection from './components/FooterSection'
import Navbar from './components/Navbar'
import Donate from './pages/Donate'
import { Extension } from './pages/Extension'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'

export default function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
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
