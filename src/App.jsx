import { Route, Routes } from 'react-router-dom'
import Background from './components/Background'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Particles from './components/Particles'
import ScrollManager from './components/ScrollManager'
import Home from './pages/Home'
import PortfolioPage from './pages/PortfolioPage'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Particles />
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
