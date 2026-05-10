import { NextResponse } from 'next/server'
import { defineEnableDraftMode } from 'next-sanity/draft-mode'

import { client } from '@/sanity/lib/client'
import { getSanityReadToken } from '@/sanity/lib/token'

const token = getSanityReadToken()

const enable = token
  ? defineEnableDraftMode({
      client: client.withConfig({ token }),
    }).GET
  : null

export async function GET(request: Request) {
  if (!enable) {
    return NextResponse.json(
      {
        error: 'Missing SANITY_API_READ_TOKEN',
        message:
          'Add a Viewer API token (SANITY_API_READ_TOKEN) to web/.env.local or studio/.env. Create one: sanity.io/manage → your project → API → Tokens. Do not leave the variable blank.',
      },
      { status: 503 }
    )
  }
  return enable(request)
}
