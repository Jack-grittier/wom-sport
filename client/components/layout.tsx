import PreviewAlert from './preview-alert'
import Footer from './footer'
import Meta from './meta'
import Header from './header'
import { Flex } from '@chakra-ui/react'

interface LayoutProps {
  preview: boolean
  children: React.ReactNode
}

export default function Layout({ preview, children }: LayoutProps) {
  return (
    <>
      <Meta />
      {preview && <PreviewAlert />}
      <Header />
      <Flex as='main' align='center' direction='column'>
        {children}
      </Flex>
      <Footer />
    </>
  )
}
