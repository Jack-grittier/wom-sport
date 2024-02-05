import { GraphQLClient, Variables } from 'graphql-request'
import { graphql } from '../lib/gql'
import {
  PostIdType,
  PreviewPostQueryVariables,
  PostsForNewsQueryVariables,
  TypedDocumentString,
  LanguageCodeEnum,
} from './gql/graphql'

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`,
}

const graphQLClient = new GraphQLClient(process.env.WORDPRESS_API_URL, {
  headers,
})

async function fetchAPI<TResult, TVariables extends Variables>(
  query: TypedDocumentString<TResult, TVariables>,
  variables?: TVariables,
) {
  try {
    const data = await graphQLClient.request<TResult>(
      query.toString() as string,
      variables,
    )
    return data
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch API')
  }
}

export async function getPreviewPost({
  id,
  idType,
}: PreviewPostQueryVariables) {
  const document = graphql(`
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }
  `)
  const data = await fetchAPI(document, { id, idType })
  return data.post
}

export async function getPostsForNews({
  language,
}: PostsForNewsQueryVariables) {
  const document = graphql(`
    query PostsForNews($language: LanguageCodeFilterEnum!) {
      posts(
        where: { language: $language, orderby: { field: DATE, order: DESC } }
      ) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            language {
              code
            }
          }
        }
      }
    }
  `)
  const data = await fetchAPI(document, { language })
  return data?.posts.edges.map((edge) => edge.node)
}

export async function getVideosForResources() {
  const document = graphql(`
    query VideosForResources {
      videos(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            excerpt
            date
            embedUrl
            title
          }
        }
      }
    }
  `)
  const data = await fetchAPI(document)
  return data?.videos.edges.map((edge) => edge.node)
}

export async function getPost(
  id: number | string,
  language: LanguageCodeEnum,
  previewData?: { post: PreviewPostData },
) {
  const postPreview = previewData?.post
  // The slug may be the id of an unpublished post
  const isSamePost =
    typeof id === 'number'
      ? id === postPreview?.databaseId
      : id === postPreview?.slug
  const isDraft = isSamePost && postPreview?.status === 'draft'
  // const isRevision = isSamePost && postPreview?.status === 'publish'

  const document = graphql(`
    query PostBySlug(
      $id: ID!
      $idType: PostIdType!
      $language: LanguageCodeEnum!
    ) {
      post(id: $id, idType: $idType) {
        translation(language: $language) {
          title
          excerpt
          slug
          date
          content
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `)
  const data = await fetchAPI(document, {
    id: isDraft ? postPreview.databaseId : id,
    idType: isDraft ? PostIdType.DatabaseId : PostIdType.Slug,
    language,
  })
  if (data.post.translation) {
    // Draft posts may not have an slug
    if (isDraft) data.post.translation.slug = String(postPreview.databaseId)
    // Apply a revision (changes in a published post)
    // if (isRevision && data.post.revisions) {
    //   const revision = data.post.revisions.edges[0]?.node

    //   if (revision) Object.assign(data.post, revision)
    //   delete data.post.revisions
    // }
  }
  return data?.post.translation
}

export async function getPostAndMorePosts(
  id: number | string,
  previewData?: { post: PreviewPostData },
) {
  const postPreview = previewData?.post
  // The slug may be the id of an unpublished post
  const isSamePost =
    typeof id === 'number'
      ? id === postPreview?.databaseId
      : id === postPreview?.slug
  const isDraft = isSamePost && postPreview?.status === 'draft'
  const isRevision = isSamePost && postPreview?.status === 'publish'

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const authorFieldsFragment = graphql(`
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
  `)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const postFieldsFragment = graphql(`
    fragment PostFields on Post {
      title
      content
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
  `)
  // original example had revision fields only if isRevision was true
  // but this doesn't work with graphql-codegen, so revisions are
  // always queried
  const document = graphql(`
    query PostBySlug_($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        revisions(
          first: 1
          where: { orderby: { field: MODIFIED, order: DESC } }
        ) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `)

  const data = await fetchAPI(document, {
    id: isDraft ? postPreview.databaseId : id,
    idType: isDraft ? PostIdType.DatabaseId : PostIdType.Slug,
  })
  if (data.post) {
    // Draft posts may not have an slug
    if (isDraft) data.post.slug = String(postPreview.databaseId)
    // Apply a revision (changes in a published post)
    if (isRevision && data.post.revisions) {
      const revision = data.post.revisions.edges[0]?.node

      if (revision) Object.assign(data.post, revision)
      delete data.post.revisions
    }
  }

  if (data.posts) {
    // Filter out the main post
    data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== id)
    // If there are still 3 posts, remove the last one
    if (data.posts.edges.length > 2) data.posts.edges.pop()
  }

  return data
}

export type PreviewPostData = Awaited<ReturnType<typeof getPreviewPost>>
export type PostsForNewsData = Awaited<ReturnType<typeof getPostsForNews>>
export type PostData = Awaited<ReturnType<typeof getPost>>
export type VideosForResourcesData = Awaited<
  ReturnType<typeof getVideosForResources>
>
export type PostAndMorePostsData = Awaited<
  ReturnType<typeof getPostAndMorePosts>
>
