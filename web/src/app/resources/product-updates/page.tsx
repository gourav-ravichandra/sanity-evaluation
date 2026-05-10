import type { Metadata } from 'next'

import { Breadcrumb } from '@/components/modulr/Breadcrumb'
import { PageHero } from '@/components/modulr/PageHero'
import { SanityResourcePosts } from '@/components/modulr/SanityResourcePosts'

export const metadata: Metadata = { title: 'Product updates' }

export default async function ProductUpdatesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Product updates' }]} />
      <PageHero
        eyebrow="Product updates"
        title={
          <>
            What&apos;s new
            <br />
            in Modulr
          </>
        }
        description="The latest feature releases, improvements and API updates from the Modulr platform."
      />
      <div className="page-content">
        <SanityResourcePosts section="product-updates" layout="updates" />
        <div className="nlblock" style={{ marginTop: 32 }}>
          <div>
            <h3>Subscribe to ModConnect</h3>
            <p>Get Modulr product updates delivered monthly.</p>
          </div>
          <div className="nlform">
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
