import { InferGetStaticPropsType, GetStaticProps } from 'next'
import Head from 'next/head'
import NextImage, { StaticImageData } from 'next/image'

import {
  Card,
  CardBody,
  CardHeader,
  Image,
  SimpleGrid,
  Text,
  LinkBox,
  LinkOverlay,
  Flex,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

import { LoremIpsum } from 'lorem-ipsum'

import Layout from '../components/layout'
import Section from '../components/section'
import SectionWithHeading from '../components/section-with-heading'
import FixedWidthContainer from '../components/fixed-width-container'

import banner from '../public/images/banner.svg'
import amigosDeEuropaLogo from '../public/images/partners/amigos_de_europa-logo.png'
import erasmusLogo from '../public/images/partners/erasmus-logo.png'
import gaLogo from '../public/images/partners/ga-logo.png'
import guaraniLogo from '../public/images/partners/guarani-logo.png'
import iasisLogo from '../public/images/partners/iasis-logo.png'
import perEsempioLogo from '../public/images/partners/per_esempio-logo.png'

// TODO: Send a PR to chakra to update docs about next/image and next/link
// (image should say next / image includes nextjs image opt, link should use import from chakra-ui/next-js
// TODO: Open issue about src type autocomplete in chakra image (should accept StaticImageData)

interface Partner {
  name: string
  logo: StaticImageData | any
  description: string
  url: string
}

interface IndexProps {
  preview: boolean
  projectDescriptionParagraphs: string[]
  partnersIntro: string
  partnersInfo: Partner[]
}

export default function Index({
  preview,
  projectDescriptionParagraphs,
  partnersIntro,
  partnersInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{`WomEmpSports`}</title>
      </Head>
      <Flex align='center' as='article' direction='column'>
        <Flex
          w='100vw'
          pb={10}
          overflow='hidden'
          justify='center'
          as='header'
          position='relative'
        >
          <Image
            src={banner}
            alt='WomEmpSports Banner'
            minW='5xl'
            as={NextImage}
            objectFit='cover'
          />
        </Flex>
        <FixedWidthContainer>
          <SectionWithHeading
            id='project-description'
            title='About This Project'
          >
            {projectDescriptionParagraphs.map((paragraph, i) => (
              <Text key={i}>{paragraph}</Text>
            ))}
          </SectionWithHeading>
          <SectionWithHeading id='partners' title='Our Partners'>
            <Text>{partnersIntro}</Text>
            <Section id='partners-description-grid'>
              <SimpleGrid spacing={4} columns={[1, 2, 3]}>
                {partnersInfo.map((partner) => (
                  <Card
                    boxShadow='var(--chakra-colors-primary-300) 1px 2px 3px 2px'
                    as={LinkBox}
                    key={partner.name}
                  >
                    <CardHeader pb={0}>
                      <LinkOverlay as={Link} href={partner.url}>
                        <Image
                          src={partner.logo}
                          alt={partner.name + ' logo'}
                          as={NextImage}
                          h='100'
                          fit='contain'
                        />
                      </LinkOverlay>
                    </CardHeader>
                    <CardBody>
                      <Text>{partner.description}</Text>
                    </CardBody>
                  </Card>
                ))}
              </SimpleGrid>
            </Section>
          </SectionWithHeading>
        </FixedWidthContainer>
      </Flex>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<IndexProps> = ({
  preview = false,
}) => {
  const lorem = new LoremIpsum()

  const projectDescriptionParagraphs = Array.from({ length: 3 }, () =>
    lorem.generateParagraphs(1),
  )
  const partnersIntro = lorem.generateParagraphs(1)
  const partnersInfo: Partner[] = [
    {
      name: 'Asociación Amigos de Europa',
      logo: amigosDeEuropaLogo,
      description: lorem.generateSentences(2),
      url: 'https://amigosdeeuropa.eu/',
    },
    {
      name: 'Erasmus+ Programme',
      logo: erasmusLogo,
      description: lorem.generateSentences(2),
      url: 'https://erasmus-plus.ec.europa.eu/',
    },
    {
      name: 'Фондация "ДА"',
      logo: gaLogo,
      description: lorem.generateSentences(2),
      url: 'https://dafoundation.bg/',
    },
    {
      name: 'Asociación Guaraní',
      logo: guaraniLogo,
      description: lorem.generateSentences(2),
      url: 'https://www.asociacionguarani.com/',
    },
    {
      name: 'ΑμΚΕ ΙΑΣΙΣ',
      logo: iasisLogo,
      description: lorem.generateSentences(2),
      url: 'https://www.iasismed.eu/',
    },
    {
      name: 'Per Esempio ONLUS',
      logo: perEsempioLogo,
      description: lorem.generateSentences(2),
      url: 'https://peresempionlus.org/',
    },
  ]

  return {
    props: {
      preview,
      projectDescriptionParagraphs,
      partnersIntro,
      partnersInfo,
    },
    revalidate: 10,
  }
}
