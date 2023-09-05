import { Flex, Image } from '@chakra-ui/react'
import NextImage, { StaticImageData } from 'next/image'

interface BannerProps {
  src: StaticImageData
  alt: string
}

export default function Banner({ src, alt }: BannerProps) {
  return (
    <Flex
      w='100vw'
      pb={10}
      overflow='hidden'
      justify='center'
      as='header'
      position='relative'
    >
      <Image
        src={src as unknown as string}
        alt={alt}
        minW='5xl'
        as={NextImage}
        objectFit='cover'
      />
    </Flex>
  )
}
