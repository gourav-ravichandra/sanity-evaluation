import type { Metadata } from 'next'

import { Breadcrumb } from '@/components/modulr/Breadcrumb'

export const metadata: Metadata = { title: 'Demo centre' }

export default function DemoCentrePage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Demo centre' }]} />
      <div className="demo-hero">
        <div>
          <div className="page-eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>
            <span style={{ background: 'rgba(255,255,255,.7)' }} className="page-eyebrow-dot" />
            Demo centre
          </div>
          <h1>See Modulr in action</h1>
          <p>
            Book a tailored live demo or explore self-serve interactive walkthroughs — no commitment
            required.
          </p>
        </div>
        <button type="button" className="btn-prim" style={{ alignSelf: 'flex-start', marginTop: 10, background: 'var(--white)', color: 'var(--blue)' }}>
          Book a demo →
        </button>
      </div>
      <div className="page-content">
        <div className="cboxes">
          <div className="cbox" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 14, padding: 32 }}>
            <div className="cicon">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
                <path d="M9.5 10l2 2 3-3" />
              </svg>
            </div>
            <div className="ctxt">
              <h4>Book a live demo</h4>
              <p>
                Get a tailored 30-minute walkthrough with a payments expert, customised to your industry
                and use case.
              </p>
              <button type="button" className="btn-prim btn-sm">
                Book now →
              </button>
            </div>
          </div>
          <div className="cbox" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 14, padding: 32 }}>
            <div className="cicon ye">
              <svg viewBox="0 0 24 24" fill="none" stroke="#8a6c00" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" />
              </svg>
            </div>
            <div className="ctxt">
              <h4>Self-serve walkthrough</h4>
              <p>
                Explore the Modulr platform at your own pace with our interactive product demos — no
                sign-up required.
              </p>
              <button type="button" className="btn-out btn-sm">
                Explore now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
