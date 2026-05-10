import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/image'

type SanityImageSource = Parameters<typeof urlForImage>[0]

type Props = {
  image: SanityImageSource
  alt: string
  priority?: boolean
}

export function PostImage({ image, alt, priority }: Props) {
  const url = urlForImage(image).width(1200).height(630).url()
  return (
    <Image
      src={url}
      alt={alt}
      width={1200}
      height={630}
      className="mt-8 w-full rounded-lg object-cover"
      priority={priority}
      sizes="(max-width: 768px) 100vw, 720px"
    />
  )
}
