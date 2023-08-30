import Head from 'next/head'
import { InferGetStaticPropsType, GetStaticProps } from 'next'
import Layout from '../components/layout'
import { Box, Heading, Image, Text } from '@chakra-ui/react'
import NextImage, { StaticImageData } from 'next/image'

import { LoremIpsum } from 'lorem-ipsum'

import banner from '../public/images/banner.svg'

// TODO: Send a PR to chakra to update docs about next/image and next/link
// (image should say next / image includes nextjs image opt, link should use import from chakra-ui/next-js
// TODO: Open issue about src type autocomplete in chakra image (should accept StaticImageData)

interface Props {
  preview: boolean
  projectDescription: string
}

export default function Index({
  preview,
  projectDescription,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{`WomEmpSports`}</title>
      </Head>
      <Image
        src={banner as StaticImageData}
        alt='WomEmpSports Banner'
        w='full'
        as={NextImage}
      />
      <Box maxW='80rem' px={6}>
        <Box as='section' aria-labelledby='project-description-heading'>
          <Heading id='project-description-heading'>About This Project</Heading>
          <Text>{projectDescription}</Text>
        </Box>
      </Box>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = ({ preview = false }) => {
  const lorem = new LoremIpsum()

  const projectDescription = lorem.generateParagraphs(3)

  return {
    props: { preview, projectDescription },
    revalidate: 10,
  }
}
