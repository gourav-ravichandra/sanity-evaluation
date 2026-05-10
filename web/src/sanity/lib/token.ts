/** Viewer token for draft content, live preview, and /api/draft-mode/enable. Empty strings are ignored. */
export function getSanityReadToken(): string | undefined {
  const raw =
    process.env.SANITY_API_READ_TOKEN?.trim() ||
    process.env.SANITY_READ_TOKEN?.trim()
  return raw || undefined
}
