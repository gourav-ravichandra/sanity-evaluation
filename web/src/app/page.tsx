import Link from 'next/link'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resource Centre',
  description:
    'Insights, customer stories, whitepapers, videos, newsroom, product updates, glossary and more.',
}

const SECTIONS = [
  {
    href: '/resources/insights',
    title: 'Insights & articles',
    body: 'Blogs, guides and research on payments and embedded finance.',
  },
  {
    href: '/resources/customer-stories',
    title: 'Customer stories',
    body: 'How businesses use Modulr to scale money movement.',
  },
  {
    href: '/resources/whitepapers',
    title: 'Whitepapers',
    body: 'In-depth research and reports.',
  },
  {
    href: '/resources/videos',
    title: 'Videos',
    body: 'Watch and learn.',
  },
  {
    href: '/resources/demo-centre',
    title: 'Demo centre',
    body: 'See Modulr in action.',
  },
  {
    href: '/resources/newsroom',
    title: 'Newsroom',
    body: 'News and media coverage.',
  },
  {
    href: '/resources/product-updates',
    title: 'Product updates',
    body: "What's new in Modulr.",
  },
  {
    href: '/resources/glossary',
    title: 'Glossary',
    body: 'Payments terms explained.',
  },
  {
    href: '/resources/press-pack',
    title: 'Press pack',
    body: 'Logos, brand assets and bios.',
  },
  {
    href: '/resources/blog',
    title: 'Blog',
    body: 'Latest thinking from Modulr (Sanity CMS).',
  },
] as const

export default function HomePage() {
  return (
    <>
      <header
        className="page-content"
        style={{
          paddingTop: 48,
          paddingBottom: 8,
          maxWidth: 720,
        }}
      >
        <p
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--lead)',
            marginBottom: 12,
          }}
        >
          Modulr
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-display), Inter Tight, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: 'var(--black)',
            marginBottom: 16,
          }}
        >
          Resource Centre
        </h1>
        <p style={{ fontSize: 17, color: 'var(--lead)', lineHeight: 1.65, margin: 0 }}>
          Browse every content area below. Editorial posts are also listed on{' '}
          <Link href="/posts" style={{ color: 'var(--blue)', fontWeight: 600 }}>
            All posts
          </Link>
          .
        </p>
      </header>

      <div className="page-content" style={{ paddingBottom: 80 }}>
        <div className="g3">
          {SECTIONS.map((s) => (
            <Link key={s.href} href={s.href} className="ccard" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="cbody">
                <h4 style={{ marginTop: 0 }}>{s.title}</h4>
                <p style={{ marginBottom: 0 }}>{s.body}</p>
                <div className="cfoot" style={{ marginTop: 20, borderTop: 'none', paddingTop: 0 }}>
                  <span className="cfoot-txt" style={{ color: 'var(--blue)', fontWeight: 600 }}>
                    Open →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
