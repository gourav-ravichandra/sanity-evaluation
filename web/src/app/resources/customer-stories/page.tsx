import type { Metadata } from 'next'

import { Breadcrumb } from '@/components/modulr/Breadcrumb'
import { CustomerStoriesView } from '@/components/modulr/CustomerStoriesView'

export const metadata: Metadata = {
  title: 'Customer stories',
}

export default async function CustomerStoriesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Customer stories' }]} />
      <CustomerStoriesView />
    </>
  )
}
