import Head from 'next/head'
import { InferGetStaticPropsType, GetStaticProps } from 'next'
import Layout from '../components/layout'
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import NextImage, { StaticImageData } from 'next/image'

import { LoremIpsum } from 'lorem-ipsum'

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
}
interface IndexProps {
  preview: boolean
  projectDescription: string
  partnersIntro: string
  partnersInfo: Partner[]
}

export default function Index({
  preview,
  projectDescription,
  partnersIntro,
  partnersInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{`WomEmpSports`}</title>
      </Head>
      <Image src={banner} alt='WomEmpSports Banner' w='full' as={NextImage} />
      <Box maxW='80rem' px={6}>
        <Box as='section' aria-labelledby='project-description-heading'>
          <Heading id='project-description-heading'>About This Project</Heading>
          <Text>{projectDescription}</Text>
        </Box>
        <Box as='section' aria-labelledby='partners-intro-heading'>
          <Heading id='project-description-heading'>Our Partners</Heading>
          <Text>{partnersIntro}</Text>
          <SimpleGrid spacing={4} id='partners-grid' columns={[1, 2, 3]}>
            {partnersInfo.map((partner) => (
              <Card key={partner.name}>
                <CardHeader>
                  <Image
                    src={partner.logo}
                    alt={partner.name + ' logo'}
                    as={NextImage}
                    h='100'
                    fit='contain'
                  />
                </CardHeader>
                <CardBody>
                  <Text>{partner.description}</Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<IndexProps> = ({
  preview = false,
}) => {
  const lorem = new LoremIpsum()

  const projectDescription = lorem.generateParagraphs(3)
  const partnersIntro = lorem.generateParagraphs(1)
  const partnersInfo: Partner[] = [
    {
      name: 'Asociación Amigos de Europa',
      logo: amigosDeEuropaLogo,
      description: lorem.generateSentences(2),
    },
    {
      name: 'Erasmus+ Programme',
      logo: erasmusLogo,
      description: lorem.generateSentences(2),
    },
    {
      name: 'Фондация "ДА"',
      logo: gaLogo,
      description: lorem.generateSentences(2),
    },
    {
      name: 'Asociación Guaraní',
      logo: guaraniLogo,
      description: lorem.generateSentences(2),
    },
    {
      name: 'ΑμΚΕ ΙΑΣΙΣ',
      logo: iasisLogo,
      description: lorem.generateSentences(2),
    },
    {
      name: 'Per Esempio ONLUS',
      logo: perEsempioLogo,
      description: lorem.generateSentences(2),
    },
  ]

  return {
    props: { preview, projectDescription, partnersIntro, partnersInfo },
    revalidate: 10,
  }
}
