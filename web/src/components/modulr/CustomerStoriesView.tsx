import { SanityResourcePosts } from '@/components/modulr/SanityResourcePosts'

/* Stripe-style customer stories — from Modulr prototype */

export async function CustomerStoriesView() {
  return (
    <>
      <div
        style={{
          background: 'var(--white)',
          borderBottom: '1px solid var(--border)',
          padding: '56px 64px 48px',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'flex-end',
            gap: 40,
          }}
        >
          <div>
            <div className="page-eyebrow" style={{ marginBottom: 14 }}>
              <span className="page-eyebrow-dot" />
              Customer stories
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-display), Inter Tight, sans-serif',
                fontSize: 48,
                fontWeight: 900,
                color: 'var(--black)',
                lineHeight: 1.07,
                letterSpacing: '-0.04em',
                marginBottom: 14,
              }}
            >
              Real businesses.
              <br />
              Real results.
            </h1>
            <p style={{ fontSize: 17, color: 'var(--lead)', lineHeight: 1.65, maxWidth: 500 }}>
              See how 200+ businesses use Modulr to automate payments, embed finance, and grow
              faster.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div
              style={{
                fontFamily: 'var(--font-display), Inter Tight, sans-serif',
                fontSize: 36,
                fontWeight: 900,
                color: 'var(--blue)',
              }}
            >
              200+
            </div>
            <div style={{ fontSize: 13, color: 'var(--lead)', marginTop: 2 }}>customer stories</div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: 'var(--white)',
          borderBottom: '1px solid var(--border)',
          padding: '0 64px',
          position: 'sticky',
          top: 68,
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'stretch',
            gap: 0,
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '14px 20px 14px 0',
              borderRight: '1px solid var(--border)',
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--lead)',
              }}
            >
              Filter by
            </span>
          </div>
          {['Industry', 'Region', 'Solution', 'Business type'].map((label) => (
            <div
              key={label}
              className="cs-filter-drop"
              style={{ borderRight: '1px solid var(--border)', flex: '1 1 auto', minWidth: 120 }}
            >
              <select className="cs-sel" aria-label={label}>
                <option>{label}</option>
              </select>
              <svg width="11" height="7" viewBox="0 0 11 7" fill="none" aria-hidden>
                <path
                  d="M1 1l4.5 4.5L10 1"
                  stroke="var(--lead)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          ))}
          <div
            style={{
              padding: '14px 0 14px 20px',
              marginLeft: 'auto',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 13, color: 'var(--lead)' }}>
              Showing <strong style={{ color: 'var(--text)' }}>24</strong> stories
            </span>
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--card-bg)', padding: '40px 64px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div
            style={{
              background: 'var(--white)',
              border: '1px solid var(--border)',
              borderRadius: 20,
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              marginBottom: 40,
            }}
          >
            <div
              style={{
                background: 'linear-gradient(145deg,#0a1628,#0d2240)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '48px 36px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  background: 'rgba(255,255,255,.08)',
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: 12,
                  padding: '18px 28px',
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display), Inter Tight, sans-serif',
                    fontSize: 22,
                    fontWeight: 900,
                    color: 'var(--white)',
                  }}
                >
                  PAYSEND
                </span>
              </div>
              <span
                style={{
                  background: 'rgba(255,213,36,.15)',
                  border: '1px solid rgba(255,213,36,.25)',
                  color: 'var(--yellow)',
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  borderRadius: 100,
                  padding: '4px 10px',
                }}
              >
                Featured story
              </span>
            </div>
            <div style={{ padding: '44px 52px' }}>
              <p
                style={{
                  fontSize: 20,
                  fontStyle: 'italic',
                  color: 'var(--text)',
                  lineHeight: 1.55,
                  marginBottom: 28,
                  borderLeft: '3px solid var(--yellow)',
                  paddingLeft: 20,
                }}
              >
                &ldquo;Modulr gave us the payment infrastructure to scale globally — the reliability
                and speed of their platform is genuinely unmatched.&rdquo;
              </p>
              <p style={{ fontSize: 13, color: 'var(--lead)', marginBottom: 4 }}>
                Ronnie Millar, CEO — Paysend
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-display), Inter Tight, sans-serif',
                  fontSize: 21,
                  fontWeight: 800,
                  margin: '20px 0 24px',
                }}
              >
                How Paysend scaled cross-border payments to 170+ countries with Modulr&apos;s
                embedded finance infrastructure
              </h3>
              <div
                style={{
                  display: 'flex',
                  gap: 0,
                  marginBottom: 28,
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  overflow: 'hidden',
                }}
              >
                {[
                  ['40%', 'faster settlement'],
                  ['3×', 'volume growth'],
                  ['170+', 'countries reached'],
                ].map(([num, lbl], idx) => (
                  <div
                    key={lbl}
                    style={{
                      flex: 1,
                      padding: '18px 24px',
                      borderRight: idx < 2 ? '1px solid var(--border)' : undefined,
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-display), Inter Tight, sans-serif',
                        fontSize: 28,
                        fontWeight: 900,
                        color: 'var(--blue)',
                      }}
                    >
                      {num}
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--lead)', marginTop: 2 }}>{lbl}</div>
                  </div>
                ))}
              </div>
              <button type="button" className="btn-prim">
                Read full story →
              </button>
            </div>
          </div>

          <SanityResourcePosts section="customer-stories" layout="stories" />

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <button type="button" className="btn-out">
              Load more stories
            </button>
          </div>

          <div
            style={{
              background: 'var(--blue)',
              borderRadius: 20,
              padding: '48px 56px',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: 40,
              alignItems: 'center',
              marginTop: 48,
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-display), Inter Tight, sans-serif',
                  fontSize: 24,
                  fontWeight: 900,
                  color: 'var(--white)',
                  marginBottom: 8,
                }}
              >
                Join 200+ businesses powering payments with Modulr
              </h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,.7)', maxWidth: 460 }}>
                Get the embedded payment infrastructure your business needs to scale — without the
                complexity.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button
                type="button"
                style={{
                  background: 'var(--white)',
                  color: 'var(--blue)',
                  border: 'none',
                  borderRadius: 100,
                  padding: '12px 26px',
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Get started →
              </button>
              <button
                type="button"
                style={{
                  background: 'rgba(255,255,255,.12)',
                  color: 'var(--white)',
                  border: '1.5px solid rgba(255,255,255,.25)',
                  borderRadius: 100,
                  padding: '12px 26px',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Talk to sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
