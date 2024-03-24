import Head from 'next/head'

import { Text, Flex } from '@chakra-ui/react'

import Layout from '../components/layout'
import Section from '../components/section'
import SectionWithHeading from '../components/section-with-heading'
import FixedWidthContainer from '../components/fixed-width-container'
import Banner from '../components/banner'

import Partners from '../components/partners'
import { useRouter } from 'next/router'
import { localeToCode } from '../lib/util'
import { descriptions, headings, titles } from '../lib/localized-strings'

// TODO: Send a PR to chakra to update docs about next/image and next/link
// (image should say next / image includes nextjs image opt, link should use import from chakra-ui/next-js
// TODO: Open issue about src type autocomplete in chakra image (should accept StaticImageData)

interface IndexProps {
  preview: boolean
}

export default function Index({ preview }: IndexProps) {
  const { locale } = useRouter()
  const languageCode = localeToCode(locale)
  return (
    <Layout preview={preview}>
      <Head>
        <title>{`WomEmpSports ${titles.home[languageCode]}`}</title>
      </Head>
      <Flex
        align='center'
        as='article'
        direction='column'
        alignItems='stretch'
        w='full'
      >
        <Banner />
        <FixedWidthContainer alignSelf='center'>
          <SectionWithHeading
            id='project-description'
            title={headings.description[languageCode]}
          >
            {descriptions[languageCode].split('\n').map((paragraph, i) => (
              <Text key={i}>{paragraph}</Text>
            ))}
          </SectionWithHeading>
          <SectionWithHeading
            id='partners'
            title={headings.partners[languageCode]}
          >
            <Section id='partners-description-list'>
              <Partners />
            </Section>
          </SectionWithHeading>
        </FixedWidthContainer>
      </Flex>
    </Layout>
  )
}
