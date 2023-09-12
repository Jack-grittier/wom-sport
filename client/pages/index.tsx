import { InferGetStaticPropsType, GetStaticProps } from 'next'
import Head from 'next/head'
import { StaticImageData } from 'next/image'

import { Text, Flex } from '@chakra-ui/react'

import Layout from '../components/layout'
import Section from '../components/section'
import SectionWithHeading from '../components/section-with-heading'
import FixedWidthContainer from '../components/fixed-width-container'
import Banner from '../components/banner'

import banner from '../public/images/banner.svg'
import Partners from '../components/partners'
import { useRouter } from 'next/router'
import { LOCALE_TYPE } from '../lib/constants'

// TODO: Send a PR to chakra to update docs about next/image and next/link
// (image should say next / image includes nextjs image opt, link should use import from chakra-ui/next-js
// TODO: Open issue about src type autocomplete in chakra image (should accept StaticImageData)

const projectDescription: Partial<Record<LOCALE_TYPE, string>> = {
  en: `WES - WomenEmpSport is a project developed under the Erasmus+ programme.
  The main objective of the project is the social inclusion and empowerment of women in vulnerable situations through the promotion of personal and sporting skills. All the activities of the project are focused on this objective, addressing different aspects and two of the main actors involved in the sector: both the professionals working for the inclusion of these women and the women at risk of exclusion themselves.
  `,
  it: `WES - WomenEmpSport è un progetto sviluppato nell'ambito del programma Erasmus+.
  Obiettivo principale del progetto è l'inclusione sociale e l'empowerment delle donne in situazioni vulnerabili attraverso la promozione delle competenze personali e sportive. Tutte le attività del progetto si concentrano su questo obiettivo, affrontando diversi aspetti e mettendo al centro due dei principali attori coinvolti nel settore: le/i professioniste/i che lavorano per l'inclusione delle donne e  le donne stesse a rischio di esclusione.
  `,
}

interface IndexProps {
  preview: boolean
}

export default function Index({ preview }: IndexProps) {
  const locale = useRouter().locale as LOCALE_TYPE
  const description = projectDescription[locale] ?? projectDescription.en
  const descriptionParagraphs = description.split('\n')
  return (
    <Layout preview={preview}>
      <Head>
        <title>{`WomEmpSports Home`}</title>
      </Head>
      <Flex align='center' as='article' direction='column'>
        <Banner src={banner as StaticImageData} alt='WomEmpSports Banner' />
        <FixedWidthContainer>
          <SectionWithHeading
            id='project-description'
            title='About This Project'
          >
            {descriptionParagraphs.map((paragraph, i) => (
              <Text key={i}>{paragraph}</Text>
            ))}
          </SectionWithHeading>
          <SectionWithHeading id='partners' title='Our Partners'>
            <Section id='partners-description-list'>
              <Partners locale={locale} />
            </Section>
          </SectionWithHeading>
        </FixedWidthContainer>
      </Flex>
    </Layout>
  )
}
