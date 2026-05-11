import { notFound } from 'next/navigation'
import { defineQuery } from 'next-sanity'
import type { Metadata } from 'next'

import {
  CaseStudyLandingView,
  type CaseStudyLandingDoc,
} from '@/components/modulr/CaseStudyLandingView'
import { sanityFetch } from '@/sanity/lib/live'
import { LANDING_PAGE_QUERY, LANDING_PAGE_SLUGS_QUERY } from '@/sanity/queries'

export const dynamic = 'force-dynamic'

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
  const page = data as CaseStudyLandingDoc | null

  if (!page) notFound()

  return <CaseStudyLandingView page={page} />
}
