export default function ThemeToggle({ direction, onChange }) {
  const isSharp = direction === 'sharp'

  return (
    <button
      className="theme-toggle"
      onClick={() => onChange(isSharp ? 'soft' : 'sharp')}
      aria-label={isSharp ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
      title={isSharp ? 'Soft' : 'Sharp'}
    >
      {isSharp ? '☀' : '◈'}
      <style>{`
        .theme-toggle{
          appearance: none; border: 1px solid var(--border-strong); background: transparent;
          color: var(--text-muted); width: 32px; height: 32px; border-radius: var(--radius-md);
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 14px; line-height: 1; cursor: pointer;
          transition: color .15s ease, background-color .15s ease, border-color .15s ease;
        }
        .theme-toggle:hover{ color: var(--text); background: var(--bg-tint); border-color: var(--text-muted); }
      `}</style>
    </button>
  )
}
