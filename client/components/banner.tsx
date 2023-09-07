import { Flex } from '@chakra-ui/react'
import { Image, ImageProps } from '@chakra-ui/next-js'
import NextImage from 'next/image'

export default function Banner({ src, alt }: ImageProps) {
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
        src={src}
        alt={alt}
        minW='5xl'
        as={NextImage}
        sx={{ objectFit: 'contain' }}
      />
    </Flex>
  )
}
