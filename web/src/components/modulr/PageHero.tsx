import type { ReactNode } from 'react'

type Props = {
  eyebrow: string
  title: ReactNode
  description: string
  searchPlaceholder?: string
  showSearch?: boolean
}

export function PageHero({
  eyebrow,
  title,
  description,
  searchPlaceholder = 'Search…',
  showSearch = false,
}: Props) {
  return (
    <div className="page-hero">
      <div className="page-eyebrow">
        <span className="page-eyebrow-dot" />
        {eyebrow}
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
      {showSearch ? (
        <div className="hero-search">
          <input placeholder={searchPlaceholder} aria-label="Search" />
          <button type="button" className="hero-search-btn" aria-label="Submit search">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-4-4" />
            </svg>
          </button>
        </div>
      ) : null}
    </div>
  )
}
