import { InferGetStaticPropsType, GetStaticProps } from 'next'
import Head from 'next/head'
import NextImage, { StaticImageData } from 'next/image'

import {
  Card,
  CardBody,
  CardHeader,
  SimpleGrid,
  Text,
  LinkOverlay,
  Flex,
  Heading,
  CardFooter,
  LinkBoxProps,
  LinkBox,
} from '@chakra-ui/react'
import { Link, Image } from '@chakra-ui/next-js'

import sanitizeHtml from 'sanitize-html'

import Layout from '../components/layout'
import Section from '../components/section'
import SectionWithHeading from '../components/section-with-heading'
import FixedWidthContainer from '../components/fixed-width-container'
import Banner from '../components/banner'
import Date from '../components/date'

import banner from '../public/images/banner.svg'

import { PostsForNewsData, getPostsForNews } from '../lib/api'

interface NewsProps {
  preview: boolean
  posts: PostsForNewsData
}

export default function News({
  preview,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const LinkBoxAsArticle = ({ children, ...props }: LinkBoxProps) => (
    <LinkBox as='article' {...props}>
      {children}
    </LinkBox>
  )
  return (
    <Layout preview={preview}>
      <Head>
        <title>{`WomEmpSports News`}</title>
      </Head>
      <Flex align='center' direction='column'>
        <Banner src={banner as StaticImageData} alt='WomEmpSports Banner' />
        <FixedWidthContainer>
          <SectionWithHeading id='news' title='News'>
            <Section id='article-grid'>
              <SimpleGrid
                columns={[1, null, 2, 3]}
                gap={[6, null, null, null, 12]}
                justifyItems={'center'}
              >
                {posts.map((post) => (
                  <Card
                    boxShadow='var(--chakra-colors-primary-700) 1px 2px 6px -2px'
                    as={LinkBoxAsArticle}
                    maxW={400}
                    key={post.slug}
                  >
                    <CardHeader pb={0}>
                      <Heading
                        size='md'
                        fontSize={['lg', 'xl', null, '2xl']}
                        noOfLines={[1, null, null, 2]}
                        pb={0}
                        mb={3}
                        lineHeight={1.5}
                      >
                        <LinkOverlay as={Link} href={`/posts/${post.slug}`}>
                          {post.title}
                        </LinkOverlay>
                      </Heading>
                      {post.featuredImage && (
                        <Image
                          src={post.featuredImage?.node.sourceUrl}
                          alt={post.featuredImage?.node.altText}
                          as={NextImage}
                          sx={{ objectFit: 'contain' }}
                          width={320}
                          height={180}
                          w='100%'
                          h='unset'
                          maxH={180}
                        />
                      )}
                    </CardHeader>
                    <CardBody pb={0}>
                      <Text
                        fontSize={['sm', null, 'md']}
                        noOfLines={[3, 4]}
                        pb={0}
                      >
                        {post.excerpt}
                      </Text>
                    </CardBody>
                    <CardFooter>
                      <Text
                        fontSize={['xs', null, 'sm']}
                        pb={0}
                        color='gray.600'
                      >
                        on <Date dateString={post.date}></Date>
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

export const getStaticProps: GetStaticProps<NewsProps> = async ({
  preview = false,
}) => {
  const posts = await getPostsForNews()
  for (const post of posts) {
    post.excerpt = sanitizeHtml(post.excerpt, {
      allowedAttributes: {},
      allowedTags: [],
      disallowedTagsMode: 'discard',
    })
  }

  return {
    props: {
      preview,
      posts,
    },
    revalidate: 10,
  }
}
