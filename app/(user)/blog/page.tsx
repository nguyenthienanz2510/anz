import React from 'react'
import { previewData } from 'next/headers'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'
import PreviewSuspense from '@/components/Blog/PreviewSuspense'
import PreviewBlogList from '@/components/Blog/PreviewBlogList'
import BlogList from '@/components/Blog/BlogList'

const query = groq`
  *[_type == "post"]{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`

type Props = {}

export default async function page({}: Props) {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role='status'>
            <p>Loading Preview Data...</p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    )
  }

  const posts = await client.fetch(query)
  return (
    <React.Fragment>
      <BlogList posts={posts} />
    </React.Fragment>
  )
}
