import type { Metadata } from 'next'

import { Breadcrumb } from '@/components/modulr/Breadcrumb'

export const metadata: Metadata = { title: 'Press pack' }

export default function PressPackPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Press pack' }]} />
      <div className="press-hero">
        <div>
          <div className="page-eyebrow" style={{ color: 'rgba(255,255,255,.5)' }}>
            <span style={{ background: 'rgba(255,255,255,.5)' }} className="page-eyebrow-dot" />
            Press pack
          </div>
          <h1>
            Everything you need
            <br />
            to write about Modulr
          </h1>
          <p>
            Download our brand assets, logos, company boilerplate and executive bios — all in one
            place.
          </p>
        </div>
        <button
          type="button"
          className="btn-prim"
          style={{ alignSelf: 'flex-start', marginTop: 8, background: 'var(--yellow)', color: 'var(--black)' }}
        >
          ↓ Download full press pack
        </button>
      </div>
      <div className="passets">
        <div className="passet">
          <div className="picon">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <path d="M8 12h8M12 8v8" />
            </svg>
          </div>
          <h4>Logo pack</h4>
          <p>SVG, PNG in all variants — dark, light and mono</p>
          <button type="button" className="btn-out btn-sm" style={{ margin: '0 auto' }}>
            ↓ Download
          </button>
        </div>
        <div className="passet">
          <div className="picon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#8a6c00" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8M12 8v8" />
            </svg>
          </div>
          <h4>Brand guidelines</h4>
          <p>Colours, typography and usage rules</p>
          <button type="button" className="btn-out btn-sm" style={{ margin: '0 auto' }}>
            ↓ Download
          </button>
        </div>
        <div className="passet">
          <div className="picon">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6M16 13H8M16 17H8" />
            </svg>
          </div>
          <h4>Company boilerplate</h4>
          <p>About Modulr, key facts and exec bios</p>
          <button type="button" className="btn-out btn-sm" style={{ margin: '0 auto' }}>
            ↓ Download
          </button>
        </div>
      </div>
    </>
  )
}
