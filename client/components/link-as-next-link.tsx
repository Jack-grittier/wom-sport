import { Link, LinkProps } from '@chakra-ui/next-js'
import NextLink from 'next/link'

export default function LinkAsNextLink({ children, ...props }: LinkProps) {
  return (
    <Link as={NextLink} {...props}>
      {children}
    </Link>
  )
}
