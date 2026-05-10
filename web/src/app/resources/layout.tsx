import type { ReactNode } from 'react'

/** Sanity-backed section pages refresh periodically so new posts appear without a full redeploy. */
export const revalidate = 60

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return children
}
