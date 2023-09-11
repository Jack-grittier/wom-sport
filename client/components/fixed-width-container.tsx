import { Box, BoxProps } from '@chakra-ui/react'

export default function FixedWidthContainer({ children, ...props }: BoxProps) {
  return (
    <Box maxW='80rem' w='full' px={6} {...props}>
      {children}
    </Box>
  )
}
