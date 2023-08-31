import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import Tags from '../../components/tags'
import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
  PostAndMorePostsData,
  PreviewPostData,
} from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'
import { ParsedUrlQuery } from 'querystring'

interface PostProps {
  post: PostAndMorePostsData['post']
  posts?: PostAndMorePostsData['posts']
  preview: boolean
}

export default function Post({
  post,
  posts,
  preview,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>
                {`${post.title} | Next.js Blog Example with ${CMS_NAME}`}
              </title>
              <meta
                property='og:image'
                content={post.featuredImage?.node.sourceUrl}
              />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.featuredImage}
              date={post.date}
              author={post.author}
              categories={post.categories}
            />
            <PostBody content={post.content} />
            <footer>
              {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
            </footer>
          </article>

          <SectionSeparator />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </>
      )}
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

  const postAndMorePosts = await getPostAndMorePosts(id, previewData)

  if (!postAndMorePosts.post) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      preview,
      post: postAndMorePosts.post,
      posts: postAndMorePosts.posts,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  }
}
