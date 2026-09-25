import { useState, useLayoutEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import { TranslationProvider } from './context/TranslationContext'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Planes from './pages/Planes'
import Starlink from './pages/Starlink'
import LoRaWAN from './pages/LoRaWAN'
import Nosotros from './pages/Nosotros'
import Cursos from './pages/Cursos'
import Contacto from './pages/Contacto'
import Jabali from './pages/Jabali'
import Lagunita from './pages/Lagunita'
import Privacidad from './pages/Privacidad'
import Terminos from './pages/Terminos'

function AppInner() {
  const navigate = useNavigate()
  const location = useLocation()
  const isJabali = location.pathname === '/jabali'
  const isLagunita = location.pathname === '/ccc'
  const [direction, setDirection] = useState('sharp')

  const go = (id) => {
    const path = id === 'home' ? '/' : `/${id}`
    navigate(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useLayoutEffect(() => {
    const root = document.documentElement
    root.classList.remove('dir-soft', 'dir-sharp', 'dens-regular', 'show-grid')
    root.classList.add(`dir-${direction}`, 'dens-regular')
    if (direction === 'sharp') root.classList.add('show-grid')
  }, [direction])

  return (
    <div className="app">
      {!isJabali && !isLagunita && <Nav onGo={go} direction={direction} onDirection={setDirection} />}
      <Routes>
        <Route path="/" element={<Home onGo={go} />} />
        <Route path="/servicios" element={<Servicios onGo={go} />} />
        <Route path="/planes" element={<Planes onGo={go} />} />
        <Route path="/instalacion-starlink" element={<Starlink onGo={go} />} />
        <Route path="/lorawan" element={<LoRaWAN onGo={go} />} />
        <Route path="/nosotros" element={<Nosotros onGo={go} />} />
        <Route path="/cursos" element={<Cursos onGo={go} />} />
        <Route path="/contacto" element={<Contacto onGo={go} />} />
        <Route path="/jabali" element={<Jabali />} />
        <Route path="/ccc" element={<Lagunita />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {!isJabali && !isLagunita && <Footer onGo={go} />}
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <TranslationProvider>
        <AppInner />
      </TranslationProvider>
    </BrowserRouter>
  )
}
