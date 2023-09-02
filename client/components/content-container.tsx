import { Box } from '@chakra-ui/react'

export default function ContentContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box maxW='80rem' px={6}>
      {children}
    </Box>
  )
}
