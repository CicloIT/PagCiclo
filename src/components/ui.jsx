import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

export function Reveal({ children, delay = 0, as: As = 'div', className = '', ...rest }) {
  const ref = useReveal()
  return (
    <As ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </As>
  )
}

export function Eyebrow({ children, className = '' }) {
  return <div className={`eyebrow ${className}`}>{children}</div>
}

export function Arrow({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function CicloMark({ size = 28, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ flex: 'none' }}>
      <circle cx="16" cy="16" r="13" stroke={color || 'var(--primary)'} strokeWidth="2" />
      <path d="M16 3 A13 13 0 0 1 29 16" stroke={color || 'var(--text)'} strokeWidth="2" strokeLinecap="round" />
      <circle cx="29" cy="16" r="2.2" fill={color || 'var(--primary)'} />
    </svg>
  )
}

export function Stat({ value, label, suffix }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1, fontFamily: 'Geist' }}>
        {value}<span style={{ color: 'var(--primary)', marginLeft: 2 }}>{suffix}</span>
      </div>
      <div className="mono" style={{ fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
    </div>
  )
}

export function Tick({ on = true, size = 16 }) {
  if (!on) return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="no-tick" aria-hidden>
      <path d="M4 8h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="tick" aria-hidden>
      <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function SectionHead({ eyebrow, title, cta }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="h-1" style={{ marginTop: 14 }}>{title}</h2>
      </div>
      {cta}
    </div>
  )
}
