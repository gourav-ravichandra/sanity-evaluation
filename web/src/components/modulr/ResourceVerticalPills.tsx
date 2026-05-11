import { VerticalPills } from '@/components/modulr/VerticalPills'
import { sanityFetch } from '@/sanity/lib/live'
import { POST_VERTICALS_BY_SECTION_QUERY } from '@/sanity/queries'

const VERTICAL_LABELS: Record<string, string> = {
  lending: 'Lending',
  travel: 'Travel',
  sme: 'SME',
}

const VERTICAL_ORDER = ['lending', 'travel', 'sme'] as const

function collectDistinctVerticals(rows: unknown): string[] {
  if (!Array.isArray(rows)) return []
  const found = new Set<string>()
  for (const row of rows) {
    if (row == null) continue
    if (Array.isArray(row)) {
      for (const v of row) {
        if (typeof v === 'string' && v.trim()) found.add(v.trim())
      }
    }
  }
  const ordered = VERTICAL_ORDER.filter((k) => found.has(k))
  const known = new Set<string>(VERTICAL_ORDER)
  const extras = [...found].filter((k) => !known.has(k)).sort()
  return [...ordered, ...extras]
}

/**
 * Renders vertical filter pills only for values that exist on published posts in this section.
 * Renders nothing if no posts use vertical tags.
 */
export async function ResourceVerticalPills({
  section,
  label,
}: {
  section: string
  label?: string
}) {
  const { data } = await sanityFetch({
    query: POST_VERTICALS_BY_SECTION_QUERY,
    params: { section },
  })
  const slugs = collectDistinctVerticals(data)
  if (slugs.length === 0) return null

  const items = ['All', ...slugs.map((s) => VERTICAL_LABELS[s] ?? s.charAt(0).toUpperCase() + s.slice(1))]
  return <VerticalPills label={label ?? 'Filter by vertical'} items={items} />
}
