import { useState, useLayoutEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
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

function AppInner() {
  const navigate = useNavigate()
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
      <Nav onGo={go} />
      <Routes>
        <Route path="/" element={<Home onGo={go} />} />
        <Route path="/servicios" element={<Servicios onGo={go} />} />
        <Route path="/planes" element={<Planes onGo={go} />} />
        <Route path="/starlink" element={<Starlink onGo={go} />} />
        <Route path="/lorawan" element={<LoRaWAN onGo={go} />} />
        <Route path="/nosotros" element={<Nosotros onGo={go} />} />
        <Route path="/cursos" element={<Cursos onGo={go} />} />
        <Route path="/contacto" element={<Contacto onGo={go} />} />
        <Route path="/jabali" element={<Jabali />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer onGo={go} />

      <div className="dir-toggle">
        <button
          className={`dir-btn ${direction === 'soft' ? 'is-on' : ''}`}
          onClick={() => setDirection('soft')}
        >
          ☀ Soft
        </button>
        <button
          className={`dir-btn ${direction === 'sharp' ? 'is-on' : ''}`}
          onClick={() => setDirection('sharp')}
        >
          ◈ Sharp
        </button>
      </div>

      <style>{`
        .dir-toggle{
          position: fixed; bottom: 20px; left: 20px; z-index: 200;
          display: flex; gap: 4px; padding: 4px;
          background: var(--bg-elevated); border: 1px solid var(--border-strong);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
        }
        .dir-btn{
          appearance: none; border: 0; background: transparent; color: var(--text-muted);
          padding: 6px 12px; font-size: 11px; font-family: 'Geist Mono', monospace;
          border-radius: calc(var(--radius-md) - 4px); transition: background-color .15s ease, color .15s ease;
        }
        .dir-btn:hover{ color: var(--text); background: var(--bg-tint); }
        .dir-btn.is-on{ background: var(--primary); color: #fff; }
        .dir-sharp .dir-btn.is-on{ color: #0a0d0d; }
      `}</style>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}
