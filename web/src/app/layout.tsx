import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity/visual-editing'
import { Inter, Inter_Tight } from 'next/font/google'
import type { Metadata } from 'next'

import { DisableDraftMode } from '@/components/disable-draft-mode'
import { SanityLive } from '@/sanity/lib/live'

import './globals.css'
import './modulr.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: {
    default: 'Modulr Resource Centre',
    template: '%s · Modulr Resource Centre',
  },
  description:
    'Resource Centre — insights, customer stories, whitepapers, videos, newsroom, product updates, glossary and more.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className="antialiased">
        {children}
        <SanityLive />
        {(await draftMode()).isEnabled && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}
      </body>
    </html>
  )
}
