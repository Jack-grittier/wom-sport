import { Heading } from '@chakra-ui/react'
import Section from './section'

interface SectionWithHeadingProps extends React.ComponentProps<typeof Section> {
  title: string
}

export default function SectionWithHeading({
  id,
  title,
  children,
}: SectionWithHeadingProps) {
  const headingId = id + '-heading'
  return (
    <Section id={id} aria-labelledby={headingId}>
      <Heading id={headingId}>{title}</Heading>
      {children}
    </Section>
  )
}
