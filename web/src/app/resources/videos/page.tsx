import type { Metadata } from 'next'

import { Breadcrumb } from '@/components/modulr/Breadcrumb'
import { PageHero } from '@/components/modulr/PageHero'
import { ResourceVerticalPills } from '@/components/modulr/ResourceVerticalPills'
import { SanityResourcePosts } from '@/components/modulr/SanityResourcePosts'

export const metadata: Metadata = { title: 'Videos' }

export default async function VideosPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Videos' }]} />
      <PageHero
        eyebrow="Videos"
        title="Watch and learn"
        description="Walkthroughs, webinars and product demos from the Modulr team."
      />
      <ResourceVerticalPills section="videos" label="Filter" />
      <div className="page-content">
        <SanityResourcePosts section="videos" layout="cards" />
      </div>
    </>
  )
}
