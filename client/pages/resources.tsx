import { InferGetStaticPropsType, GetStaticProps } from 'next'
import Head from 'next/head'
import { StaticImageData } from 'next/image'

import {
  Card,
  CardBody,
  CardHeader,
  SimpleGrid,
  Text,
  Flex,
  CardFooter,
  AspectRatio,
} from '@chakra-ui/react'

import sanitizeHtml from 'sanitize-html'

import Layout from '../components/layout'
import Section from '../components/section'
import SectionWithHeading from '../components/section-with-heading'
import FixedWidthContainer from '../components/fixed-width-container'
import Banner from '../components/banner'
import Date from '../components/date'

import banner from '../public/images/banner.svg'

import { VideosForResourcesData, getVideosForResources } from '../lib/api'

interface ResourcesProps {
  preview: boolean
  videos: VideosForResourcesData
}

export default function Resources({
  preview,
  videos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{`WomEmpSports Resources`}</title>
      </Head>
      <Flex align='center' direction='column'>
        <Banner src={banner as StaticImageData} alt='WomEmpSports Banner' />
        <FixedWidthContainer>
          <SectionWithHeading id='resources' title='Resources'>
            <Section id='video-grid'>
              <SimpleGrid
                columns={[1, null, 2, 3]}
                gap={[6, null, null, null, 12]}
                justifyItems={'center'}
              >
                {videos.map((video) => (
                  <Card
                    boxShadow='var(--chakra-colors-primary-700) 1px 2px 6px -2px'
                    maxW={400}
                    key={video.date}
                    w='100%'
                  >
                    <CardHeader p={0}>
                      <AspectRatio maxW='400px' ratio={16 / 9}>
                        <iframe
                          src={video.embedUrl}
                          title={video.title}
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                          allowFullScreen
                        ></iframe>
                      </AspectRatio>
                    </CardHeader>
                    {video.excerpt && (
                      <CardBody pb={0}>
                        <Text
                          fontSize={['sm', null, 'md']}
                          noOfLines={[3, 4]}
                          pb={0}
                        >
                          {video.excerpt}
                        </Text>
                      </CardBody>
                    )}
                    <CardFooter>
                      <Text
                        fontSize={['xs', null, 'sm']}
                        pb={0}
                        color='gray.600'
                      >
                        on <Date dateString={video.date}></Date>
                      </Text>
                    </CardFooter>
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

export const getStaticProps: GetStaticProps<ResourcesProps> = async ({
  preview = false,
}) => {
  const videos = await getVideosForResources()
  for (const video of videos) {
    video.excerpt = sanitizeHtml(video.excerpt, {
      allowedAttributes: {},
      allowedTags: [],
      disallowedTagsMode: 'discard',
    })
  }

  return {
    props: {
      preview,
      videos,
    },
    revalidate: 10,
  }
}
