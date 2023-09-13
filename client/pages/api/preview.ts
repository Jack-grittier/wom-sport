import type { NextApiRequest, NextApiResponse } from 'next'
import { getPreviewPost } from '../../lib/api'
import { PostIdType, PreviewPostQueryVariables } from '../../lib/gql/graphql'

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { secret, db_id, slug } = req.query

  // Check that a well-formed db_id or slug was provided
  let queryVariables: PreviewPostQueryVariables
  if (typeof db_id === 'string' && !slug) {
    queryVariables = {
      id: db_id,
      idType: PostIdType.DatabaseId,
    }
  } else if (typeof slug === 'string' && !db_id) {
    queryVariables = {
      id: slug,
      idType: PostIdType.Slug,
    }
  } else {
    res.status(400).json({ message: 'Provide one of db_id or slug' })
    return
  }

  // Check the secret and next parameters
  // This secret should only be known by this API route
  if (
    !process.env.WORDPRESS_PREVIEW_SECRET ||
    secret !== process.env.WORDPRESS_PREVIEW_SECRET
  ) {
    res.status(401).json({ message: 'Invalid preview secret' })
    return
  }

  // Fetch WordPress to check if the provided `id` or `slug` exists
  const post = await getPreviewPost(queryVariables)

  // If the post doesn't exist prevent preview mode from being enabled
  if (!post) {
    res.status(401).json({ message: 'Post not found' })
    return
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({ post })

  // Redirect to the path from the fetched post
  // We don't redirect to `req.query.slug` as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/posts/${post.slug ?? post.databaseId}` })
  res.end()
}
