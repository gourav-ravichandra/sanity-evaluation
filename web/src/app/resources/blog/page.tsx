import type { Metadata } from 'next'
import Link from 'next/link'

import { SanityResourcePosts } from '@/components/modulr/SanityResourcePosts'
import { VerticalPills } from '@/components/modulr/VerticalPills'

export const metadata: Metadata = {
  title: 'Blog',
}

export default async function BlogResourcePage() {
  return (
    <>
      <div
        style={{
          padding: '32px 40px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--border)',
          background: 'var(--white)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 20 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'var(--blue)',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-display), Inter Tight, sans-serif',
              fontSize: 15,
              fontWeight: 700,
              color: 'var(--black)',
            }}
          >
            Blogs &amp; Insights
          </span>
        </div>
        <a
          href="https://www.linkedin.com/company/modulr/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '7px 14px',
            border: '1.5px solid var(--border)',
            borderRadius: 100,
            fontSize: 13,
            fontWeight: 500,
            color: 'var(--text)',
            marginBottom: 20,
            textDecoration: 'none',
          }}
        >
          Modulr on LinkedIn
          <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--blue)" aria-hidden>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>

      <div style={{ padding: '28px 40px', background: 'var(--white)' }}>
        <div
          style={{
            background: 'var(--white)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}
        >
          <div style={{ padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-display), Inter Tight, sans-serif',
                  fontSize: 26,
                  fontWeight: 700,
                  color: 'var(--black)',
                  lineHeight: 1.25,
                  marginBottom: 20,
                }}
              >
                Mid-year reality check: MTD, AI, and why many firms are still struggling
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: 'var(--black)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden>
                    <rect x="0" y="0" width="8" height="8" rx="1.5" fill="#FFD524" />
                    <rect x="11" y="0" width="8" height="8" rx="1.5" fill="#FFD524" />
                    <rect x="0" y="11" width="8" height="8" rx="1.5" fill="#FFD524" opacity=".4" />
                    <rect x="11" y="11" width="8" height="8" rx="1.5" fill="#FFD524" opacity=".7" />
                  </svg>
                </div>
                <span style={{ fontSize: 14, color: 'var(--lead)' }}>By Modulr, May 2025</span>
              </div>
              <p style={{ fontSize: 15, color: 'var(--lead)', lineHeight: 1.65 }}>
                We&apos;re halfway through the year — one that was earmarked for progress, but too many
                firms are still bogged down by fragmented systems, manual payments, and unclear
                priorities.
              </p>
            </div>
            <div style={{ marginTop: 24 }}>
              <Link href="/posts" className="btn-prim" style={{ display: 'inline-flex' }}>
                Read CMS posts →
              </Link>
            </div>
          </div>
          <div
            style={{
              background: 'var(--hero-bg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 32,
              minHeight: 280,
            }}
          >
            <div style={{ width: '100%', maxWidth: 280 }}>
              <div
                style={{
                  background: 'var(--white)',
                  borderRadius: 12,
                  padding: 16,
                  boxShadow: '0 4px 20px rgba(0,0,0,.08)',
                  marginBottom: 10,
                }}
              >
                <div style={{ fontSize: 10, color: 'var(--lead)', marginBottom: 6 }}>PAYMENTS PROCESSED</div>
                <div
                  style={{
                    fontFamily: 'var(--font-display), Inter Tight, sans-serif',
                    fontSize: 22,
                    fontWeight: 900,
                    color: 'var(--black)',
                  }}
                >
                  £1,890.22
                </div>
                <div
                  style={{
                    height: 4,
                    background: 'var(--blue)',
                    borderRadius: 2,
                    marginTop: 10,
                    width: '70%',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <VerticalPills label="Filter" />

      <div style={{ padding: '28px 40px 60px', background: 'var(--white)' }}>
        <div style={{ marginBottom: 24 }}>
          <Link href="/posts" style={{ fontSize: 14, fontWeight: 600, color: 'var(--blue)' }}>
            → Open live blog (Sanity CMS)
          </Link>
        </div>
        <SanityResourcePosts section="blog" layout="blog" />
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <Link href="/posts" className="btn-out">
            View all posts (CMS)
          </Link>
        </div>
        <div className="nlblock">
          <div>
            <h3>Never miss a post</h3>
            <p>Get the latest Modulr thinking delivered to your inbox — no spam, unsubscribe any time.</p>
          </div>
          <div className="nlform">
            <div className="nlchecks">
              <label className="nlchk">
                <input type="checkbox" defaultChecked /> Blog posts
              </label>
              <label className="nlchk">
                <input type="checkbox" /> Product updates
              </label>
              <label className="nlchk">
                <input type="checkbox" /> Reports
              </label>
            </div>
            <div className="nlrow">
              <input className="nlinput" type="email" placeholder="Your work email" />
              <button type="button" className="btn-prim btn-sm">
                Subscribe →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
