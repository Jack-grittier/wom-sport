import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
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

interface PostProps {
  post: PostData
  preview: boolean
}

export default function Post({
  post,
  preview,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    // <Layout preview={preview}>
    //   {router.isFallback ? (
    //     <PostTitle>Loading…</PostTitle>
    //   ) : (
    //     <>
    //       <article>
    //         <Head>
    //           <title>
    //             {`${post.title} | Next.js Blog Example with ${CMS_NAME}`}
    //           </title>
    //           <meta
    //             property='og:image'
    //             content={post.featuredImage?.node.sourceUrl}
    //           />
    //         </Head>
    //         <PostHeader
    //           title={post.title}
    //           coverImage={post.featuredImage}
    //           date={post.date}
    //           author={post.author}
    //           categories={post.categories}
    //         />
    //         <PostBody content={post.content} />
    //         <footer>
    //           {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
    //         </footer>
    //       </article>

    //       <SectionSeparator />
    //       {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    //     </>
    //   )}
    // </Layout>
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

interface Context {
  params: ParsedUrlQuery
  preview: boolean
  previewData: { post: PreviewPostData }
}

export const getStaticProps: GetStaticProps<PostProps> = async ({
  params,
  preview = false,
  previewData,
}: Context) => {
  // TODO: refactor out with preview.ts?
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

  const post = await getPost(id, previewData)

  if (!post) {
    return {
      notFound: true,
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

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getPostsForNews()

  return {
    paths: allPosts.map((post) => `/posts/${post.slug}`) || [],
    fallback: true,
  }
}
