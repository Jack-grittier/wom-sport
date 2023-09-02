import { Box } from '@chakra-ui/react'

interface SectionProps {
  id: string
  children: React.ReactNode
}

export default function Section({ id, children }: SectionProps) {
  return (
    <Box as='section' id={id} my={5}>
      {children}
    </Box>
  )
}
