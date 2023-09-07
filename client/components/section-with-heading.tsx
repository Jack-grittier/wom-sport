import { Heading } from '@chakra-ui/react'
import Section, { SectionProps } from './section'

interface SectionWithHeadingProps extends SectionProps {
  title: string
}

export default function SectionWithHeading({
  id,
  title,
  children,
  ...props
}: SectionWithHeadingProps) {
  const headingId = id + '-heading'
  return (
    <Section id={id} aria-labelledby={headingId} {...props}>
      <Heading id={headingId}>{title}</Heading>
      {children}
    </Section>
  )
}
