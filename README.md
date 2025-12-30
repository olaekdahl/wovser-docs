# Wovser.AI Documentation Site

[![pages-build-deployment](https://github.com/olaekdahl/wovser-docs/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/olaekdahl/wovser-docs/actions/workflows/pages/pages-build-deployment)

End-user documentation for Wovser.AI, built with [Nextra](https://nextra.site) (Next.js + MDX).

## Development

### Prerequisites

- Node.js 20+
- npm

### Setup

```bash
cd docs-site
npm install
```

### Local Development

```bash
npm run dev
```

This starts the development server at `http://localhost:3000`.

### Building

```bash
npm run build
```

Static files are generated in `.next/export/`.

## Structure

```text
docs-site/
├── next.config.mjs        # Next.js + Nextra configuration
├── theme.config.tsx       # Nextra theme configuration
├── pages/                 # Documentation pages
│   ├── _meta.json         # Navigation configuration
│   ├── index.mdx          # Homepage
│   ├── quickstart.mdx     # Getting started guide
│   ├── concepts.mdx       # Core concepts
│   ├── hosts/             # Documentation for quiz/assessment creators
│   │   ├── _meta.json
│   │   ├── index.mdx
│   │   ├── creating-quizzes.mdx
│   │   ├── creating-assessments.mdx
│   │   ├── code-challenges.mdx
│   │   ├── live-sessions.mdx
│   │   └── analytics.mdx
│   ├── players/           # Documentation for participants
│   │   ├── _meta.json
│   │   ├── index.mdx
│   │   ├── joining-sessions.mdx
│   │   ├── taking-assessments.mdx
│   │   └── code-challenge-tips.mdx
│   ├── integrations/      # Integration guides
│   │   ├── _meta.json
│   │   └── index.mdx
│   ├── api-reference/     # API documentation
│   │   ├── _meta.json
│   │   ├── index.mdx
│   │   └── authentication.mdx
│   └── support/           # Help & troubleshooting
│       ├── _meta.json
│       ├── faq.mdx
│       ├── troubleshooting.mdx
│       └── contact.mdx
└── public/                # Static assets
    ├── logo/
    ├── favicon.png
    └── favicon.svg
```

## Adding Content

### New Page

1. Create a new `.mdx` file in the appropriate `pages/` folder
2. Add the page to the folder's `_meta.json` for navigation:

   ```json
   {
     "index": "Overview",
     "new-page": "New Page Title"
   }
   ```

### Navigation

Navigation is controlled via `_meta.json` files in each directory:

```json
{
  "index": "Introduction",
  "quickstart": "Quickstart",
  "---": { "type": "separator" },
  "hosts": "For Hosts"
}
```

### Components

Nextra provides rich components via imports:

```mdx
import { Callout, Cards, Card, Steps, Tabs } from 'nextra/components'

<Callout type="info">
  This is an info callout.
</Callout>

<Cards>
  <Card title="Title" href="/path" />
</Cards>

<Steps>
### Step 1
Content here.

### Step 2
More content.
</Steps>

<Tabs items={['Tab 1', 'Tab 2']}>
  <Tabs.Tab>Content 1</Tabs.Tab>
  <Tabs.Tab>Content 2</Tabs.Tab>
</Tabs>
```

**Callout types:** `info`, `warning`, `error`, `default`

See [Nextra Built-in Components](https://nextra.site/docs/guide/built-ins) for the full list.

## Deployment

This site is automatically deployed to GitHub Pages via the `wovser-docs` repository.

### How it works

1. Changes to `docs-site/` in the main repo trigger the sync workflow
2. Content is synced to the [wovser-docs](https://github.com/olaekdahl/wovser-docs) repo
3. GitHub Actions builds and deploys to GitHub Pages
4. Live at: `docs.wovser.ai`

### Manual Deployment

```bash
# Build static files
npm run build

# Static output is in .next/export/
# Deploy this folder to any static hosting provider
```

## Theme Configuration

Edit `theme.config.tsx` to customize:

- Logo and branding
- Navigation links
- Footer content
- SEO defaults
- Sidebar behavior
- Color scheme (primary hue)

## Contributing

1. Create a feature branch
2. Make changes to files in `pages/`
3. Preview locally with `npm run dev`
4. Submit PR for review

## Resources

- [Nextra Documentation](https://nextra.site)
- [Nextra Theme Docs](https://nextra.site/docs/docs-theme/start)
- [MDX Syntax](https://mdxjs.com/)
