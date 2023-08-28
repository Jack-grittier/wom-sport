import PreviewAlert from './preview-alert'
import Footer from './footer'
import Meta from './meta'
import Header from './header'
import { Box } from '@chakra-ui/react'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      {preview && <PreviewAlert />}
      <Header />
      <Box as='main'>{children}</Box>
      <Footer />
    </>
  )
}
