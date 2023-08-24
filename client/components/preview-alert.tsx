import NextLink from 'next/link'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Link,
} from '@chakra-ui/react'

export default function PreviewAlert() {
  return (
    <Alert status="warning" justifyContent="center">
      <AlertIcon />
      <Box>
        <AlertTitle>This is a page preview.</AlertTitle>
        <AlertDescription>
          <Link as={NextLink} href="/api/exit-preview" color="blue.600">
            Click here
          </Link>{' '}
          to exit preview mode.
        </AlertDescription>
      </Box>
    </Alert>
  )
}
