import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

const defaultComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 text-2xl font-semibold tracking-tight">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-xl font-semibold tracking-tight">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mt-4 leading-relaxed text-neutral-700">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-6 text-neutral-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-6 text-neutral-700">
        {children}
      </ol>
    ),
  },
}

const caseStudyComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="cs-prose-h2">{children}</h2>,
    h3: ({ children }) => <h3 className="cs-prose-h3">{children}</h3>,
    normal: ({ children }) => <p className="cs-prose-p">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="cs-prose-ul">{children}</ul>,
    number: ({ children }) => <ol className="cs-prose-ol">{children}</ol>,
  },
}

type Props = {
  value: PortableTextBlock[] | null | undefined
  /** Richer typography for Modulr-style case study landing pages (`/p/...`). */
  variant?: 'default' | 'caseStudy'
}

export function PortableBody({ value, variant = 'default' }: Props) {
  if (!value?.length) return null
  const components = variant === 'caseStudy' ? caseStudyComponents : defaultComponents
  return <PortableText value={value} components={components} />
}
