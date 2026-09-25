import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Flights from './pages/Flights'
import Login from './pages/Login'
import Register from './pages/Register'
import Bookings from './pages/Bookings'
import Profile from './pages/Profile'
import Wallet from './pages/Wallet'
import AdminDashboard from './pages/AdminDashboard'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
