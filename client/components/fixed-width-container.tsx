import { Box, BoxProps } from '@chakra-ui/react'

export interface FixedWidthContainerProps extends BoxProps {
  children: React.ReactNode
}

export default function FixedWidthContainer({
  children,
  ...props
}: FixedWidthContainerProps) {
  return (
    <Box maxW='80rem' w='full' px={6} {...props}>
      {children}
    </Box>
  )
}
