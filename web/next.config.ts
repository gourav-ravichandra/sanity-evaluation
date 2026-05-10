import path from 'path'
import { fileURLToPath } from 'url'
import { config as loadEnv } from 'dotenv'
import type { NextConfig } from 'next'

const webDir = path.dirname(fileURLToPath(import.meta.url))
const studioEnv = path.join(webDir, '..', 'studio', '.env')

// Load Studio env first, then web-local overrides (Next also loads .env* from webDir on its own,
// but this lets you keep project/dataset only in studio/.env).
loadEnv({ path: studioEnv })
loadEnv({ path: path.join(webDir, '.env') })
// Prefer web/.env.local over studio/.env when both set a key
loadEnv({ path: path.join(webDir, '.env.local'), override: true })

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() ||
  process.env.SANITY_STUDIO_PROJECT_ID?.trim() ||
  ''

const dataset = (
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  process.env.SANITY_STUDIO_DATASET ||
  'production'
).trim()

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  env: {
    ...(projectId ? { NEXT_PUBLIC_SANITY_PROJECT_ID: projectId } : {}),
    ...(dataset ? { NEXT_PUBLIC_SANITY_DATASET: dataset } : {}),
  },
}

export default nextConfig
