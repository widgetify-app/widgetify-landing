import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FooterSection from './components/FooterSection'
import Navbar from './components/Navbar'
import Donate from './pages/Donate'
import { Extension } from './pages/Extension'
import Home from './pages/Home'

export default function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/donate" element={<Donate />} />
				<Route path="/extension" element={<Extension />} />
			</Routes>
			<FooterSection />
		</BrowserRouter>
	)
}
