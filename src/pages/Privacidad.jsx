import { Eyebrow } from '../components/ui'
import { useTranslation } from '../context/TranslationContext'

export default function Privacidad() {
  const { t } = useTranslation()

  const sections = ['s0', 's1', 's2', 's3', 's4', 's5', 's6', 's7']

  return (
    <main className="page">
      <title>{t('privacidad.title')} — CicloIT</title>
      <meta name="description" content={t('privacidad.lede')} />
      <meta property="og:title" content={`${t('privacidad.title')} — CicloIT`} />
      <meta property="og:url" content="https://cicloit.com/privacidad" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://cicloit.com/privacidad" />
      <section className="section" style={{ paddingTop: 'calc(var(--pad-section) * .55)' }}>
        <div className="container legal-doc">
          <Eyebrow>{t('privacidad.eyebrow')}</Eyebrow>
          <h1 className="h-display" style={{ marginTop: 16 }}>{t('privacidad.title')}</h1>
          <p className="lede" style={{ marginTop: 20 }}>{t('privacidad.lede')}</p>

          <div className="legal-body">
            {sections.map(s => (
              <div key={s} className="legal-section">
                <h2 className="h-3">{t(`privacidad.${s}.title`)}</h2>
                <p className="muted">{t(`privacidad.${s}.body`)}</p>
              </div>
            ))}
          </div>

          <div className="mono legal-updated">{t('legal.updated')}</div>
        </div>

        <style>{`
          .legal-doc{ max-width: 760px; }
          .legal-body{ margin-top: 48px; display: flex; flex-direction: column; gap: 32px; }
          .legal-section h2{ margin-bottom: 10px; }
          .legal-section p{ font-size: 15.5px; line-height: 1.7; }
          .legal-updated{ margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); font-size: 12px; color: var(--text-faint); }
        `}</style>
      </section>
    </main>
  )
}
