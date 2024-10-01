import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import { PostCard } from '@/components/PostCard'
import { Button } from '@/components/ui/button'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { Github } from 'lucide-react'
import Link from 'next/link'

const posts = allPosts.sort((a, b) =>
  compareDesc(new Date(a.date), new Date(b.date)),
)
const meta = {
  title: 'Blog',
  description: 'I like to blog about web development',
  url: `${WEBSITE_HOST_URL}/blog`,
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
  alternates: {
    canonical: meta.url,
  },
}

export default function Blog() {
  return (
    <div className="space-y-7">
      <h1>Blog</h1>
      <div className="mt-10 space-y-12 border-t border-gray-200 pt-10 dark:border-gray-700">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  )
}