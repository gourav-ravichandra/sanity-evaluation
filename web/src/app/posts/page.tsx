import Link from 'next/link'

import { urlForImage } from '@/sanity/lib/image'
import { sanityFetch } from '@/sanity/lib/live'
import { POSTS_QUERY } from '@/sanity/queries'

/** Renders on demand so `next build` does not require a live Sanity project. */
export const dynamic = 'force-dynamic'

type PostListItem = {
  _id: string
  title?: string | null
  excerpt?: string | null
  slug?: string | null
  publishedAt?: string | null
  mainImage?: NonNullable<Parameters<typeof urlForImage>[0]> | null
}

export default async function PostsPage() {
  const { data } = await sanityFetch({ query: POSTS_QUERY })
  const posts = (data ?? []) as PostListItem[]

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <div className="flex flex-wrap gap-4 text-sm font-medium text-neutral-600">
        <Link href="/" className="hover:text-neutral-900">
          ← Home
        </Link>
        <Link href="/resources/blog" className="hover:text-neutral-900">
          Resource Centre blog
        </Link>
      </div>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">All posts</h1>
      <ul className="mt-10 space-y-8">
        {posts.map((post) => (
          <li key={post._id}>
            <Link
              href={`/posts/${post.slug ?? ''}`}
              className="group block rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-neutral-300 hover:shadow"
            >
              <h2 className="text-xl font-semibold tracking-tight group-hover:underline">
                {post.title}
              </h2>
              {post.excerpt ? (
                <p className="mt-2 line-clamp-2 text-neutral-600">
                  {post.excerpt}
                </p>
              ) : null}
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
            </Link>
          </li>
        ))}
      </ul>
      {!posts.length ? (
        <p className="mt-10 text-neutral-600">
          No posts yet. Create a <strong>Post</strong> document in Sanity Studio.
        </p>
      ) : null}
    </main>
  )
}
