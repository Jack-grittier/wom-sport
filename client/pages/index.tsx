import Head from 'next/head'
import { InferGetStaticPropsType, GetStaticProps } from 'next'
import Layout from '../components/layout'
import { Image } from '@chakra-ui/react'
import NextImage, { StaticImageData } from 'next/image'

import banner from '../public/images/banner.svg'

// TODO: Send a PR to chakra to update docs about next/image and next/link
// (image should say next / image includes nextjs image opt, link should use import from chakra-ui/next-js
// TODO: Open issue about src type autocomplete in chakra image (should accept StaticImageData)

export default function Index({
  preview,
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
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<{ preview: boolean }> = ({
  preview = false,
}) => {
  return {
    props: { preview },
    revalidate: 10,
  }
}
