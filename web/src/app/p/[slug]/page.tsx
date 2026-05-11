import { notFound } from 'next/navigation'
import Link from 'next/link'
import { defineQuery } from 'next-sanity'
import type { PortableTextBlock } from '@portabletext/types'
import type { Metadata } from 'next'

import { PortableBody } from '@/components/PortableBody'
import { PostImage } from '@/components/PostImage'
import { urlForImage } from '@/sanity/lib/image'
import { sanityFetch } from '@/sanity/lib/live'
import { LANDING_PAGE_QUERY, LANDING_PAGE_SLUGS_QUERY } from '@/sanity/queries'

export const dynamic = 'force-dynamic'

type SanityImageValue = NonNullable<Parameters<typeof urlForImage>[0]>

type LandingDoc = {
  _id: string
  title?: string | null
  description?: string | null
  slug?: string | null
  mainImage?: SanityImageValue | null
  body?: PortableTextBlock[] | null
}

const LANDING_METADATA_QUERY = defineQuery(`
  *[_type == "landingPage" && slug.current == $slug][0] {
    title,
    description
  }
`)

type Props = {
  params: Promise<{ slug: string }>
}

function canPrefetchSanity() {
  const id = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  return Boolean(id && id !== 'dummy' && id !== 'placeholder')
}

export async function generateStaticParams() {
  if (!canPrefetchSanity()) return []
  try {
    const { data } = await sanityFetch({
      query: LANDING_PAGE_SLUGS_QUERY,
      perspective: 'published',
      stega: false,
    })
    const rows = (data ?? []) as { slug: string }[]
    return rows.map((row) => ({ slug: row.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { data } = await sanityFetch({
    query: LANDING_METADATA_QUERY,
    params: { slug },
    stega: false,
  })
  const meta = data as { title?: string; description?: string } | null
  return {
    title: meta?.title ?? 'Page',
    description: meta?.description ?? undefined,
  }
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params
  const { data } = await sanityFetch({
    query: LANDING_PAGE_QUERY,
    params: { slug },
  })
  const page = data as LandingDoc | null

  if (!page) notFound()

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <Link
        href="/"
        className="text-sm font-medium text-neutral-600 hover:text-neutral-900"
      >
        ← Resource Centre
      </Link>
      <header className="mt-6">
        <h1 className="text-4xl font-semibold tracking-tight">{page.title}</h1>
      </header>
      {page.mainImage ? (
        <PostImage
          image={page.mainImage}
          alt={page.title ?? 'Page image'}
          priority
        />
      ) : null}
      {page.description ? (
        <p className="mt-8 text-lg text-neutral-700">{page.description}</p>
      ) : null}
      <div className="prose-custom">
        <PortableBody value={page.body} />
      </div>
    </article>
  )
}
