import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: {
    default: 'Wovser.AI Docs',
    template: '%s - Wovser.AI Docs'
  },
  description: 'The AI-powered skills assessment platform',
}

const logo = (
  <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '1.2rem' }}>
    <img src="/logo/wovser-logo.svg" alt="Wovser.AI" style={{ height: '24px' }} />
  </span>
)

const banner = (
  <Banner storageKey="wovser-launch-banner">
    <a href="https://wovser.ai" target="_blank" rel="noreferrer">
      🎉 Wovser.AI is now available! Try it free →
    </a>
  </Banner>
)

const navbar = (
  <Navbar
    logo={logo}
    projectLink="https://github.com/olaekdahl/wovser-docs"
  />
)

const footer = (
  <Footer>
    © {new Date().getFullYear()} Wovser.AI. All rights reserved.
  </Footer>
)

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          footer={footer}
          docsRepositoryBase="https://github.com/olaekdahl/wovser-docs/tree/main/docs-site"
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
          toc={{ backToTop: true }}
          feedback={{ content: 'Question? Give us feedback →' }}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
