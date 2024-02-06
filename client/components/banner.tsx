import { Flex, FlexProps } from '@chakra-ui/react'
import { Image, ImageProps } from '@chakra-ui/next-js'
import NextImage, { StaticImageData } from 'next/image'

import logoBanner from '../public/images/banner.svg'
const defaultBanner = logoBanner as StaticImageData

interface BannerProps extends FlexProps {
  src?: ImageProps['src']
  alt?: ImageProps['alt']
  imageProps?: Partial<ImageProps>
}

export default function Banner({
  src = defaultBanner,
  alt = 'WomEmpSports Logo Banner',
  imageProps,
  ...props
}: BannerProps) {
  const sx = imageProps?.sx ?? { objectFit: 'contain' }
  return (
    <Flex
      w='full'
      pb={10}
      overflow='hidden'
      justify='center'
      as='header'
      position='relative'
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        minW='5xl'
        as={NextImage}
        sx={sx}
        {...imageProps}
        priority={true}
      />
    </Flex>
  )
}
