import PreviewAlert from './preview-alert'
import Footer from './footer'
import Meta from './meta'
import Header from './header'
import { Flex } from '@chakra-ui/react'
import { LocalizedStrings } from '../lib/localized-strings'

interface LayoutProps {
  preview: boolean
  children: React.ReactNode
  translationsLinks?: Partial<LocalizedStrings>
}

export default function Layout({
  preview,
  children,
  translationsLinks,
}: LayoutProps) {
  return (
    <>
      <Meta />
      {preview && <PreviewAlert />}
      <Header translationsLinks={translationsLinks} />
      <Flex as='main' align='center' direction='column'>
        {children}
      </Flex>
      <Footer />
    </>
  )
}
