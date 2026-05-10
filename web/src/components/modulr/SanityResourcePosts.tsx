import Image from 'next/image'
import Link from 'next/link'

import { urlForImage } from '@/sanity/lib/image'
import { sanityFetch } from '@/sanity/lib/live'
import { POSTS_BY_SECTION_QUERY } from '@/sanity/queries'

const THUMB = ['bl', 'te', 'ye', 'or', 'dk'] as const

export type ResourcePostRow = {
  _id: string
  title?: string | null
  excerpt?: string | null
  slug?: string | null
  publishedAt?: string | null
  mainImage?: Parameters<typeof urlForImage>[0] | null
  verticals?: string[] | null
  whitepaperUrl?: string | null
}

function formatPostDate(d?: string | null) {
  if (!d) return ''
  return new Date(d).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function tagLabel(verticals?: string[] | null, fallback = 'Article') {
  const v = verticals?.[0]
  if (!v) return fallback
  return v
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

export async function SanityResourcePosts({
  section,
  layout,
  emptyMessage,
}: {
  section: string
  layout: 'blog' | 'cards' | 'stories' | 'newsroom' | 'updates' | 'glossary'
  emptyMessage?: string
}) {
  const { data } = await sanityFetch({
    query: POSTS_BY_SECTION_QUERY,
    params: { section },
  })
  const posts = (data ?? []) as ResourcePostRow[]

  if (!posts.length) {
    return (
      <div className="page-content">
        <p style={{ color: 'var(--lead)', maxWidth: 560, lineHeight: 1.6 }}>
          {emptyMessage ?? (
            <>
              No published posts for this section yet. In{' '}
              <strong>Sanity Studio</strong>, create a <strong>Post</strong> and set{' '}
              <strong>Resource section</strong> to match this page (current filter:{' '}
              <code style={{ fontSize: 13 }}>{section}</code>).
            </>
          )}
        </p>
      </div>
    )
  }

  if (layout === 'blog') {
    return (
      <div className="g3">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/posts/${post.slug}`}
            className="mcard"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <span className="mcard-tag">{tagLabel(post.verticals, 'Blog')}</span>
            <div className="mcard-title">{post.title}</div>
            <div className="mcard-date">{formatPostDate(post.publishedAt)}</div>
            <div className="mcard-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    )
  }

  if (layout === 'cards') {
    return (
      <div className="g3">
        {posts.map((post, i) => {
          const grad = THUMB[i % THUMB.length]
          const href = `/posts/${post.slug}`
          return (
            <div key={post._id} className="ccard" style={{ color: 'inherit' }}>
              <Link
                href={href}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  minHeight: 0,
                }}
              >
                <div
                  className={post.mainImage ? 'cthumb' : `cthumb ${grad}`}
                  style={{ position: 'relative' }}
                >
                  {post.mainImage ? (
                    <Image
                      src={urlForImage(post.mainImage).width(600).height(296).url()}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  ) : (
                    <span className="thumb-lbl">Article</span>
                  )}
                </div>
                <div className="cbody" style={{ paddingBottom: 12 }}>
                  <div className="tr">
                    <span className="tag t-gray">{tagLabel(post.verticals, 'Article')}</span>
                  </div>
                  <h4>{post.title}</h4>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
              <div className="cfoot">
                <span className="cfoot-txt">{formatPostDate(post.publishedAt)}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  {post.whitepaperUrl ? (
                    <a
                      href={post.whitepaperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cfoot-txt"
                      style={{ color: 'var(--blue)', fontWeight: 700 }}
                    >
                      PDF ↓
                    </a>
                  ) : null}
                  <Link href={href} className="carr" aria-label="Read article">
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  if (layout === 'stories') {
    return (
      <div className="g3">
        {posts.map((post, i) => {
          const grad = ['linear-gradient(135deg,#001f6b,#0047cc)', 'linear-gradient(135deg,#0a2200,#1a5c00)', 'linear-gradient(135deg,#004040,#007070)'][i % 3]
          return (
            <Link
              key={post._id}
              href={`/posts/${post.slug}`}
              className="cs-card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="cs-logo-box" style={{ background: grad }}>
                <span className="cs-logo-txt">{(post.title ?? 'Story').slice(0, 8).toUpperCase()}</span>
              </div>
              <div className="cs-body">
                <div className="cs-tags">
                  <span className="tag t-blue">{tagLabel(post.verticals, 'Story')}</span>
                </div>
                <p className="cs-quote">&ldquo;{post.excerpt ?? post.title}&rdquo;</p>
                <div className="cs-stats-row">
                  <div className="cs-stat">
                    <div className="cs-stat-num">—</div>
                    <div className="cs-stat-lbl">Read more</div>
                  </div>
                  <div className="cs-stat">
                    <div className="cs-stat-num">→</div>
                    <div className="cs-stat-lbl">Full story</div>
                  </div>
                </div>
                <div className="cs-footer">
                  <span className="cs-industry">{formatPostDate(post.publishedAt)}</span>
                  <span className="cs-cta">Read story →</span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    )
  }

  if (layout === 'glossary') {
    return (
      <div className="g3">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/posts/${post.slug}`}
            className="ccard"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="cbody">
              <span className="tag t-blue" style={{ marginBottom: 10 }}>
                {tagLabel(post.verticals, 'Term')}
              </span>
              <h4>{post.title}</h4>
              <p>{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    )
  }

  if (layout === 'updates') {
    return (
      <div className="ulist">
        {posts.map((post) => (
          <Link key={post._id} href={`/posts/${post.slug}`} className="urow" style={{ textDecoration: 'none' }}>
            <div className="udot" style={{ background: 'var(--blue)' }} />
            <span className="udate">
              {post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString(undefined, {
                    month: 'short',
                    year: 'numeric',
                  })
                : '—'}
            </span>
            <span className="utitle">{post.title}</span>
            <span className="tag t-blue">Update</span>
            <span style={{ color: 'var(--lead)', marginLeft: 8 }}>→</span>
          </Link>
        ))}
      </div>
    )
  }

  // newsroom
  const [featured, ...rest] = posts
  return (
    <div className="ngrid">
      <Link href={`/posts/${featured.slug}`} className="nmain" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="nmthumb" style={{ position: 'relative' }}>
          {featured.mainImage ? (
            <Image
              src={urlForImage(featured.mainImage).width(800).height(400).url()}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          ) : null}
          <div className="nmover">
            <span className="nmdate">{formatPostDate(featured.publishedAt)}</span>
          </div>
        </div>
        <div className="nmbody">
          <div style={{ marginBottom: 8 }}>
            <span className="tag t-blue">{tagLabel(featured.verticals, 'News')}</span>
          </div>
          <h4>{featured.title}</h4>
          <p>{featured.excerpt}</p>
          <span className="btn-prim btn-sm" style={{ marginTop: 16, display: 'inline-block' }}>
            Read →
          </span>
        </div>
      </Link>
      {rest.slice(0, 2).map((post) => (
        <Link key={post._id} href={`/posts/${post.slug}`} className="nsm" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className="nsmd">{formatPostDate(post.publishedAt)}</span>
          <span className="tag t-blue" style={{ marginBottom: 8, display: 'inline-block' }}>
            {tagLabel(post.verticals, 'News')}
          </span>
          <h5>{post.title}</h5>
          <span className="slink" style={{ marginTop: 'auto', paddingTop: 14 }}>
            Read →
          </span>
        </Link>
      ))}
    </div>
  )
}
