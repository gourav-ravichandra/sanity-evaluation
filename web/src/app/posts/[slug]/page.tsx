import { notFound } from 'next/navigation'
import Link from 'next/link'
import { defineQuery } from 'next-sanity'
import type { PortableTextBlock } from '@portabletext/types'
import type { Metadata } from 'next'

import { PortableBody } from '@/components/PortableBody'
import { PostImage } from '@/components/PostImage'
import { urlForImage } from '@/sanity/lib/image'
import { sanityFetch } from '@/sanity/lib/live'
import { POST_QUERY, POST_SLUGS_QUERY } from '@/sanity/queries'

/** Renders on demand so `next build` does not require a live Sanity project. */
export const dynamic = 'force-dynamic'

type SanityImageValue = NonNullable<Parameters<typeof urlForImage>[0]>

type BlogPost = {
  _id: string
  title?: string | null
  excerpt?: string | null
  slug?: string | null
  publishedAt?: string | null
  mainImage?: SanityImageValue | null
  body?: PortableTextBlock[] | null
  whitepaperUrl?: string | null
}

const POST_METADATA_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    title
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
      query: POST_SLUGS_QUERY,
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
    query: POST_METADATA_QUERY,
    params: { slug },
    stega: false,
  })
  const meta = data as { title?: string } | null
  return {
    title: meta?.title ?? 'Post',
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const { data } = await sanityFetch({
    query: POST_QUERY,
    params: { slug },
  })
  const post = data as BlogPost | null

  if (!post) notFound()

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <Link
        href="/posts"
        className="text-sm font-medium text-neutral-600 hover:text-neutral-900"
      >
        ← All posts
      </Link>
      <header className="mt-6">
        <h1 className="text-4xl font-semibold tracking-tight">{post.title}</h1>
        {post.publishedAt ? (
          <time
            dateTime={post.publishedAt}
            className="mt-3 block text-sm text-neutral-500"
          >
            {new Date(post.publishedAt).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        ) : null}
      </header>
      {post.mainImage ? (
        <PostImage
          image={post.mainImage}
          alt={post.title ?? 'Post image'}
          priority
        />
      ) : null}
      {post.excerpt ? (
        <p className="mt-8 text-lg text-neutral-700">{post.excerpt}</p>
      ) : null}
      {post.whitepaperUrl ? (
        <p className="mt-8">
          <a
            href={post.whitepaperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
          >
            Download whitepaper (PDF)
          </a>
        </p>
      ) : null}
      <div className="prose-custom">
        <PortableBody value={post.body} />
      </div>
    </article>
  )
}
