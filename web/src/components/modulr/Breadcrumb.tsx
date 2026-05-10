import Link from 'next/link'

export type Crumb = { label: string; href?: string }

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <div className="breadcrumb">
      {items.map((c, i) => (
        <span key={`${c.label}-${i}`} style={{ display: 'contents' }}>
          {i > 0 ? <span className="bc-sep">›</span> : null}
          {c.href ? <Link href={c.href}>{c.label}</Link> : <span className="bc-cur">{c.label}</span>}
        </span>
      ))}
    </div>
  )
}
