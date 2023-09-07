import { Flex, FlexProps } from '@chakra-ui/react'

export interface SectionProps extends FlexProps {
  id: string
}

export default function Section({ id, children, ...props }: SectionProps) {
  return (
    <Flex as='section' id={id} my={5} direction='column' {...props}>
      {children}
    </Flex>
  )
}
