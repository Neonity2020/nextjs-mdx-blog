import { ThemeProvider } from '@/app/providers'
import { Container } from '@/components/Container'
import Navigation from '@/components/Navigation'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Link from 'next/link'
import './global.css'

const meta = {
  title: 'Neonity - Website',
  description: 'A website for Neonity to share his thoughts.',
  image: `${WEBSITE_HOST_URL}/og-preview.jpg`,
}

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: '%s | Neonity',
  },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: meta.image,
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: meta.image,
    card: 'summary_large_image',
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <header className="py-4">
            <Container>
              <div className="flex items-center justify-between py-6">
                <Navigation />
              </div>
            </Container>
          </header>
          <main className="py-16">
            <Container>{children}</Container>
          </main>
          <footer className="py-16">
            <Container>
              <p>
                Built by{' '}
                <Link className="link" href="https://twitter.com/neonity2022">
                  Neonity
                </Link>
              </p>
            </Container>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
