/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query PreviewPost($id: ID!, $idType: PostIdType!) {\n      post(id: $id, idType: $idType) {\n        databaseId\n        slug\n        status\n      }\n    }\n  ": types.PreviewPostDocument,
    "\n    query PostsForNews($language: LanguageCodeFilterEnum!) {\n      posts(\n        where: { language: $language, orderby: { field: DATE, order: DESC } }\n      ) {\n        edges {\n          node {\n            title\n            excerpt\n            slug\n            date\n            featuredImage {\n              node {\n                sourceUrl\n                altText\n              }\n            }\n            language {\n              code\n            }\n          }\n        }\n      }\n    }\n  ": types.PostsForNewsDocument,
    "\n    query VideosForResources {\n      videos(first: 20, where: { orderby: { field: DATE, order: DESC } }) {\n        edges {\n          node {\n            excerpt\n            date\n            embedUrl\n            title\n          }\n        }\n      }\n    }\n  ": types.VideosForResourcesDocument,
    "\n    query PostBySlug($id: ID!, $idType: PostIdType!) {\n      post(id: $id, idType: $idType) {\n        title\n        excerpt\n        slug\n        date\n        content\n        featuredImage {\n          node {\n            sourceUrl\n            altText\n          }\n        }\n        translations {\n          slug\n          language {\n            code\n          }\n        }\n        language {\n          code\n        }\n      }\n    }\n  ": types.PostBySlugDocument,
    "\n    fragment AuthorFields on User {\n      name\n      firstName\n      lastName\n      avatar {\n        url\n      }\n    }\n  ": types.AuthorFieldsFragmentDoc,
    "\n    fragment PostFields on Post {\n      title\n      content\n      excerpt\n      slug\n      date\n      featuredImage {\n        node {\n          sourceUrl\n          altText\n        }\n      }\n      author {\n        node {\n          ...AuthorFields\n        }\n      }\n      categories {\n        edges {\n          node {\n            name\n          }\n        }\n      }\n      tags {\n        edges {\n          node {\n            name\n          }\n        }\n      }\n    }\n  ": types.PostFieldsFragmentDoc,
    "\n    query PostBySlug_($id: ID!, $idType: PostIdType!) {\n      post(id: $id, idType: $idType) {\n        ...PostFields\n        revisions(\n          first: 1\n          where: { orderby: { field: MODIFIED, order: DESC } }\n        ) {\n          edges {\n            node {\n              title\n              excerpt\n              content\n              author {\n                node {\n                  ...AuthorFields\n                }\n              }\n            }\n          }\n        }\n      }\n      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {\n        edges {\n          node {\n            ...PostFields\n          }\n        }\n      }\n    }\n  ": types.PostBySlug_Document,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query PreviewPost($id: ID!, $idType: PostIdType!) {\n      post(id: $id, idType: $idType) {\n        databaseId\n        slug\n        status\n      }\n    }\n  "): typeof import('./graphql').PreviewPostDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query PostsForNews($language: LanguageCodeFilterEnum!) {\n      posts(\n        where: { language: $language, orderby: { field: DATE, order: DESC } }\n      ) {\n        edges {\n          node {\n            title\n            excerpt\n            slug\n            date\n            featuredImage {\n              node {\n                sourceUrl\n                altText\n              }\n            }\n            language {\n              code\n            }\n          }\n        }\n      }\n    }\n  "): typeof import('./graphql').PostsForNewsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query VideosForResources {\n      videos(first: 20, where: { orderby: { field: DATE, order: DESC } }) {\n        edges {\n          node {\n            excerpt\n            date\n            embedUrl\n            title\n          }\n        }\n      }\n    }\n  "): typeof import('./graphql').VideosForResourcesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query PostBySlug($id: ID!, $idType: PostIdType!) {\n      post(id: $id, idType: $idType) {\n        title\n        excerpt\n        slug\n        date\n        content\n        featuredImage {\n          node {\n            sourceUrl\n            altText\n          }\n        }\n        translations {\n          slug\n          language {\n            code\n          }\n        }\n        language {\n          code\n        }\n      }\n    }\n  "): typeof import('./graphql').PostBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment AuthorFields on User {\n      name\n      firstName\n      lastName\n      avatar {\n        url\n      }\n    }\n  "): typeof import('./graphql').AuthorFieldsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment PostFields on Post {\n      title\n      content\n      excerpt\n      slug\n      date\n      featuredImage {\n        node {\n          sourceUrl\n          altText\n        }\n      }\n      author {\n        node {\n          ...AuthorFields\n        }\n      }\n      categories {\n        edges {\n          node {\n            name\n          }\n        }\n      }\n      tags {\n        edges {\n          node {\n            name\n          }\n        }\n      }\n    }\n  "): typeof import('./graphql').PostFieldsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query PostBySlug_($id: ID!, $idType: PostIdType!) {\n      post(id: $id, idType: $idType) {\n        ...PostFields\n        revisions(\n          first: 1\n          where: { orderby: { field: MODIFIED, order: DESC } }\n        ) {\n          edges {\n            node {\n              title\n              excerpt\n              content\n              author {\n                node {\n                  ...AuthorFields\n                }\n              }\n            }\n          }\n        }\n      }\n      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {\n        edges {\n          node {\n            ...PostFields\n          }\n        }\n      }\n    }\n  "): typeof import('./graphql').PostBySlug_Document;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
