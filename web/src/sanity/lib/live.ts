import { defineLive } from 'next-sanity/live'

import { client } from './client'
import { getSanityReadToken } from './token'

const readToken = getSanityReadToken()

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ apiVersion: '2026-02-01' }),
  serverToken: readToken ?? false,
  browserToken: readToken ?? false,
})
