import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'

const meta = {
  title: 'About Me',
  description: 'I like to blog about web development',
  url: `${WEBSITE_HOST_URL}/about`,
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

export default function About() {
  return (
    <div className="space-y-7">
      <h1>About</h1>
      <p>Welcome to the about page</p>
      <p>Who am I?</p>
      <p>Neonity is a part of me, a cyber avatar.</p>
      <p>I am a full stack developer, a maker, and a dreamer.</p>
      <p>I love to build things.</p>
      <p>NeoMatrix is my blog project.</p>
    </div>
  )
}
