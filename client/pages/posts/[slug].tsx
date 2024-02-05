import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import Layout from '../../components/layout'

import { AspectRatio, Flex } from '@chakra-ui/react'

import FixedWidthContainer from '../../components/fixed-width-container'
import Banner from '../../components/banner'

import {
  getPostsForNews,
  getPost,
  PostData,
  PreviewPostData,
} from '../../lib/api'

import { ParsedUrlQuery } from 'querystring'
import SectionWithHeading from '../../components/section-with-heading'
import { LanguageCodeEnum, LanguageCodeFilterEnum } from '../../lib/gql/graphql'

interface PostProps {
  post: PostData
  preview: boolean
}

export default function Post({
  post,
  preview,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // const router = useRouter()
  const { isFallback } = useRouter()
  // TODO: Add better redirect page for missing translations
  if (!isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Head>
        <title>{`WomEmpSports Home`}</title>
      </Head>
      <Flex align='center' as='article' direction='column' w='full'>
        <AspectRatio maxW='full' w='full' ratio={32 / 9}>
          <Banner
            src={post.featuredImage?.node.sourceUrl}
            alt={post.featuredImage?.node.altText}
            imageProps={{ fill: true, sx: { objectFit: 'cover' } }}
          />
        </AspectRatio>
        <FixedWidthContainer>
          <SectionWithHeading id='article-body' title={post.title}>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </SectionWithHeading>
        </FixedWidthContainer>
      </Flex>
    </Layout>
  )
}

interface PreviewData {
  post: PreviewPostData
}
interface Params extends ParsedUrlQuery {
  db_id: string
  slug: string
}
export const getStaticProps: GetStaticProps<PostProps> = async ({
  params,
  preview = false,
  previewData,
  locale,
  defaultLocale,
}: GetStaticPropsContext<Params, PreviewData>) => {
  // TODO: refactor out with preview.ts?
  // TODO: preview only works for drafts, not revisions
  const { slug, db_id } = params
  let id: string | number
  // Check that a well-formed db_id or slug was provided
  if (typeof db_id === 'string' && !slug) {
    id = parseInt(db_id)
  } else if (typeof slug === 'string' && !db_id) {
    id = slug
  } else {
    return {
      notFound: true,
    }
  }

  const languageCode = locale.toUpperCase() as LanguageCodeEnum
  const defaultLanguageCode = defaultLocale.toUpperCase() as LanguageCodeEnum

  let post = await getPost(id, languageCode, previewData)

  if (!post) {
    post = await getPost(id, defaultLanguageCode, previewData)
    // TODO: Add better redirect page
    if (!post) {
      return {
        notFound: true,
      }
    }
  }
  return {
    props: {
      preview,
      post,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = (async ({ locales }) => {
  const allPosts = await getPostsForNews({
    language: LanguageCodeFilterEnum.All,
  })
  // console.log(allPosts)
  const paths =
    allPosts.map((post) => ({
      params: {
        slug: post.slug,
      },
      locale: post.language.code.toLowerCase(),
    })) || []
  // console.log(paths)

  const allLocalizedPaths = [
    ...paths.flatMap((path) => {
      return locales.map((locale) => {
        return {
          ...path,
          locale,
        }
      })
    }),
  ]
  // console.log(nestedPaths)
  return {
    paths: allLocalizedPaths,
    fallback: false,
  }
}) satisfies GetStaticPaths
