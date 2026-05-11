import { defineQuery } from 'next-sanity'

export const POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    excerpt,
    "slug": slug.current,
    publishedAt,
    mainImage,
    resourceSection,
    verticals,
    "whitepaperUrl": whitepaperFile.asset->url
  }
`)

/** Lists posts for a Resource Centre section (see studio post.resourceSection). */
export const POSTS_BY_SECTION_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current) && (
    ($section == "blog" && (!defined(resourceSection) || resourceSection == "blog")) ||
    ($section != "blog" && resourceSection == $section)
  )] | order(publishedAt desc) {
    _id,
    title,
    excerpt,
    "slug": slug.current,
    publishedAt,
    mainImage,
    resourceSection,
    verticals,
    "whitepaperUrl": whitepaperFile.asset->url
  }
`)

export const POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    excerpt,
    "slug": slug.current,
    publishedAt,
    mainImage,
    body,
    resourceSection,
    verticals,
    "whitepaperUrl": whitepaperFile.asset->url
  }
`)

export const POST_SLUGS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)]{
    "slug": slug.current
  }
`)

/** One value per matching post: its verticals array (or null). Dedupe on the client. */
export const POST_VERTICALS_BY_SECTION_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current) && (
    ($section == "blog" && (!defined(resourceSection) || resourceSection == "blog")) ||
    ($section != "blog" && resourceSection == $section)
  )].verticals
`)

export const LANDING_PAGE_QUERY = defineQuery(`
  *[_type == "landingPage" && slug.current == $slug][0] {
    _id,
    title,
    description,
    eyebrow,
    "slug": slug.current,
    clientLogo,
    mainImage,
    stats[]{ value, label },
    featuredQuote { quote, attribution },
    productsUsed,
    ctaLabel,
    ctaUrl,
    body
  }
`)

export const LANDING_PAGE_SLUGS_QUERY = defineQuery(`
  *[_type == "landingPage" && defined(slug.current)]{
    "slug": slug.current
  }
`)
