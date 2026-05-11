import type { Metadata } from 'next'

import { Breadcrumb } from '@/components/modulr/Breadcrumb'
import { PageHero } from '@/components/modulr/PageHero'
import { ResourceVerticalPills } from '@/components/modulr/ResourceVerticalPills'
import { SanityResourcePosts } from '@/components/modulr/SanityResourcePosts'

export const metadata: Metadata = { title: 'Whitepapers' }

export default async function WhitepapersPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Whitepapers' }]} />
      <PageHero
        eyebrow="Whitepapers"
        title={
          <>
            In-depth research
            <br />
            and reports
          </>
        }
        description="Data-led reports and analysis on the trends shaping payments and embedded finance."
      />
      <ResourceVerticalPills section="whitepapers" />
      <div className="page-content">
        <SanityResourcePosts section="whitepapers" layout="cards" />
      </div>
    </>
  )
}
