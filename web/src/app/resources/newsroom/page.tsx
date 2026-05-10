import type { Metadata } from 'next'

import { Breadcrumb } from '@/components/modulr/Breadcrumb'
import { PageHero } from '@/components/modulr/PageHero'
import { SanityResourcePosts } from '@/components/modulr/SanityResourcePosts'

export const metadata: Metadata = { title: 'Newsroom' }

export default async function NewsroomPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Newsroom' }]} />
      <PageHero
        eyebrow="Newsroom"
        title={
          <>
            News and
            <br />
            media coverage
          </>
        }
        description="The latest announcements, press coverage and company updates from Modulr."
      />
      <div className="page-content">
        <div className="filter-row">
          <span className="fl">Filter</span>
          <select className="fsel" aria-label="Type">
            <option>All types</option>
            <option>Press</option>
            <option>Media</option>
          </select>
          <div className="fdiv" />
          <span className="fcount">
            Showing <strong>12</strong> articles
          </span>
        </div>
        <SanityResourcePosts section="newsroom" layout="newsroom" />
      </div>
    </>
  )
}
