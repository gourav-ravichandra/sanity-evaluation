import type { Metadata } from 'next'

import { Breadcrumb } from '@/components/modulr/Breadcrumb'
import { PageHero } from '@/components/modulr/PageHero'
import { SanityResourcePosts } from '@/components/modulr/SanityResourcePosts'
import { VerticalPills } from '@/components/modulr/VerticalPills'

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
      <VerticalPills label="Filter" />
      <div className="page-content">
        <div className="filter-row">
          <span className="fl">Filter</span>
          <select className="fsel" aria-label="Type">
            <option>All types</option>
            <option>Video</option>
            <option>Webinar</option>
          </select>
          <select className="fsel" aria-label="Vertical">
            <option>All verticals</option>
            <option>Lending</option>
            <option>Travel</option>
            <option>SME</option>
          </select>
          <div className="fdiv" />
          <span className="fcount">
            Showing <strong>18</strong> videos
          </span>
        </div>
        <SanityResourcePosts section="videos" layout="cards" />
      </div>
    </>
  )
}
