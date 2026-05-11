import Image from 'next/image'
import Link from 'next/link'
import type { PortableTextBlock } from '@portabletext/types'

import { PortableBody } from '@/components/PortableBody'
import { urlForImage } from '@/sanity/lib/image'

type SanityImage = NonNullable<Parameters<typeof urlForImage>[0]>

export type CaseStudyStat = { value?: string | null; label?: string | null }

export type CaseStudyLandingDoc = {
  title?: string | null
  description?: string | null
  eyebrow?: string | null
  clientLogo?: SanityImage | null
  mainImage?: SanityImage | null
  stats?: CaseStudyStat[] | null
  featuredQuote?: { quote?: string | null; attribution?: string | null } | null
  productsUsed?: string[] | null
  ctaLabel?: string | null
  ctaUrl?: string | null
  body?: PortableTextBlock[] | null
}

function hasQuote(q: CaseStudyLandingDoc['featuredQuote']) {
  return Boolean(q?.quote?.trim())
}

export function CaseStudyLandingView({ page }: { page: CaseStudyLandingDoc }) {
  const stats = (page.stats ?? []).filter((s) => s?.value?.trim() && s?.label?.trim())
  const products = (page.productsUsed ?? []).filter(Boolean)
  const ctaLabel = page.ctaLabel?.trim()
  const ctaUrl = page.ctaUrl?.trim()
  const showCta = Boolean(ctaLabel && ctaUrl)

  return (
    <div className="cs-root">
      <div className="cs-brand-strip" aria-hidden />
      <div className="cs-topbar">
        <Link href="/" className="cs-back">
          ← Resource Centre
        </Link>
      </div>

      <header className="cs-hero">
        <div className="cs-hero-inner">
          {page.clientLogo ? (
            <div className="cs-client-logo">
              <Image
                src={urlForImage(page.clientLogo).width(240).height(96).url()}
                alt={(page.clientLogo as { alt?: string })?.alt?.trim() || 'Client logo'}
                fill
                sizes="120px"
                priority
              />
            </div>
          ) : null}
          <span className="cs-eyebrow">{page.eyebrow?.trim() || 'Case study'}</span>
          <h1>{page.title}</h1>
          {page.description ? <p className="cs-lede">{page.description}</p> : null}
        </div>
        {page.mainImage ? (
          <div className="cs-hero-inner">
            <div className="cs-hero-media">
              <Image
                src={urlForImage(page.mainImage).width(1600).height(900).url()}
                alt={(page.mainImage as { alt?: string })?.alt?.trim() || page.title || 'Hero'}
                fill
                className="object-cover"
                sizes="(max-width: 960px) 100vw, 920px"
                priority
              />
            </div>
          </div>
        ) : null}
      </header>

      {stats.length > 0 ? (
        <section className="cs-stats" aria-label="Key results">
          {stats.map((s, i) => (
            <div key={`${s.value}-${s.label}-${i}`} className="cs-stat-card">
              <div className="cs-stat-value">{s.value}</div>
              <div className="cs-stat-label">{s.label}</div>
            </div>
          ))}
        </section>
      ) : null}

      {hasQuote(page.featuredQuote) ? (
        <section className="cs-quote-wrap" aria-label="Featured quote">
          <blockquote className="cs-quote">
            <p style={{ margin: 0 }}>{page.featuredQuote!.quote}</p>
            {page.featuredQuote!.attribution?.trim() ? (
              <footer>— {page.featuredQuote!.attribution}</footer>
            ) : null}
          </blockquote>
        </section>
      ) : null}

      {page.body?.length ? (
        <article className="cs-article">
          <PortableBody value={page.body} variant="caseStudy" />
        </article>
      ) : null}

      {products.length > 0 ? (
        <section className="cs-products" aria-labelledby="cs-products-heading">
          <h2 id="cs-products-heading">Products used</h2>
          <div className="cs-product-pills">
            {products.map((p) => (
              <span key={p} className="cs-pill">
                {p}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      {showCta ? (
        <section className="cs-cta">
          <a href={ctaUrl}>{ctaLabel}</a>
        </section>
      ) : null}
    </div>
  )
}
