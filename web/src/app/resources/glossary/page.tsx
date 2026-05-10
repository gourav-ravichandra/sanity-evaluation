import type { Metadata } from 'next'

import { Breadcrumb } from '@/components/modulr/Breadcrumb'
import { PageHero } from '@/components/modulr/PageHero'
import { SanityResourcePosts } from '@/components/modulr/SanityResourcePosts'

export const metadata: Metadata = { title: 'Glossary' }

const TERMS = [
  'Embedded Finance',
  'Faster Payments',
  'BACS',
  'CHAPS',
  'Virtual IBAN',
  'Open Banking',
  'PSD2',
  'Card Issuing',
  'Safeguarding',
  'Lodge Card',
  'Webhook',
  'API',
  'FPS',
  'e-money',
]

export default async function GlossaryPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Glossary' }]} />
      <PageHero
        eyebrow="Glossary"
        title={
          <>
            Payments terms
            <br />
            explained
          </>
        }
        description="Plain-English definitions of payments, banking and embedded finance terminology."
        showSearch
        searchPlaceholder="Search terms e.g. BACS, IBAN, webhook…"
      />
      <div className="page-content">
        <div className="gterm-row">
          {TERMS.map((t) => (
            <span key={t} className="gterm">
              {t}
            </span>
          ))}
        </div>
        <SanityResourcePosts section="glossary" layout="glossary" />
      </div>
    </>
  )
}
