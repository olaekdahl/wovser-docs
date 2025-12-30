import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '1.2rem' }}>
      <img src="/logo/wovser-logo.svg" alt="Wovser.AI Docs" style={{ height: '24px' }} />
    </span>
  ),
  project: {
    link: 'https://github.com/olaekdahl/wovser-docs',
  },
  docsRepositoryBase: 'https://github.com/olaekdahl/wovser-docs/tree/main/docs-site',
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} Wovser.AI. All rights reserved.
      </span>
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Wovser.AI Documentation" />
      <meta property="og:description" content="The AI-powered skills assessment platform" />
      <link rel="icon" href="/favicon.png" type="image/png" />
    </>
  ),
  banner: {
    key: 'launch-banner',
    text: (
      <a href="https://wovser.ai" target="_blank" rel="noreferrer">
        🎉 Wovser.AI is now available! Try it free →
      </a>
    ),
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  navigation: {
    prev: true,
    next: true,
  },
  primaryHue: 239, // Indigo
  primarySaturation: 84,
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Wovser.AI Docs'
    }
  },
}

export default config
