import type { Metadata } from 'next'

import { Breadcrumb } from '@/components/modulr/Breadcrumb'
import { PageHero } from '@/components/modulr/PageHero'
import { SanityResourcePosts } from '@/components/modulr/SanityResourcePosts'
import { VerticalPills } from '@/components/modulr/VerticalPills'

export const metadata: Metadata = {
  title: 'Insights & articles',
}

export default async function InsightsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Insights & articles' }]} />
      <PageHero
        eyebrow="Insights & articles"
        title="Blogs, guides and research"
        description="In-depth thinking on payments, embedded finance, regulation and the industries we serve."
        showSearch
        searchPlaceholder="Search insights…"
      />
      <VerticalPills />
      <div className="page-content">
        <div className="filter-row">
          <span className="fl">Filter</span>
          <select className="fsel" aria-label="Content type">
            <option>All types</option>
            <option>Article</option>
            <option>Guide</option>
          </select>
          <select className="fsel" aria-label="Vertical">
            <option>All verticals</option>
            <option>Lending</option>
            <option>Travel</option>
            <option>SME</option>
          </select>
          <div className="fdiv" />
          <span className="fcount">
            Showing <strong>Sanity</strong> results
          </span>
        </div>
        <SanityResourcePosts section="insights" layout="cards" />
        <div className="nlblock">
          <div>
            <h3>Get insights delivered</h3>
            <p>The latest articles, guides and reports straight to your inbox.</p>
          </div>
          <div className="nlform">
            <div className="nlchecks">
              <label className="nlchk">
                <input type="checkbox" defaultChecked /> Insights &amp; articles
              </label>
              <label className="nlchk">
                <input type="checkbox" /> Product updates
              </label>
            </div>
            <div className="nlrow">
              <input className="nlinput" type="email" placeholder="Your work email" />
              <button type="button" className="btn-prim btn-sm">
                Subscribe →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
