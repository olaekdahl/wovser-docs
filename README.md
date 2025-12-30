# Wovser.AI Documentation Site

This is the end-user documentation for Wovser.AI, built with [Mintlify](https://mintlify.com).

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

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

## Structure

```
docs-site/
├── mint.json              # Mintlify configuration
├── introduction.mdx       # Homepage
├── quickstart.mdx         # Getting started guide
├── concepts.mdx           # Core concepts
├── hosts/                 # Documentation for quiz/assessment creators
│   ├── overview.mdx
│   ├── creating-quizzes.mdx
│   ├── creating-assessments.mdx
│   ├── code-challenges.mdx
│   ├── live-sessions.mdx
│   └── analytics.mdx
├── players/               # Documentation for participants
│   ├── overview.mdx
│   ├── joining-sessions.mdx
│   ├── taking-assessments.mdx
│   └── code-challenge-tips.mdx
├── integrations/          # Integration guides
│   ├── overview.mdx
│   ├── canvas-lms.mdx
│   ├── sso-saml.mdx
│   └── ...
├── api-reference/         # API documentation
│   ├── introduction.mdx
│   ├── authentication.mdx
│   └── ...
└── support/               # Help & troubleshooting
    ├── faq.mdx
    ├── troubleshooting.mdx
    └── contact.mdx
```

## Adding Content

### New Page

1. Create a new `.mdx` file in the appropriate folder
2. Add frontmatter:
   ```mdx
   ---
   title: 'Page Title'
   description: 'Brief description'
   ---
   ```
3. Add the page to `mint.json` navigation

### Components

Mintlify provides rich components:

- `<Card>` - Linked cards
- `<CardGroup>` - Grid of cards
- `<Accordion>` - Collapsible content
- `<Tabs>` - Tabbed content
- `<Steps>` - Numbered steps
- `<CodeGroup>` - Multi-language code blocks
- `<Frame>` - Image frames
- `<Tip>`, `<Warning>`, `<Info>` - Callouts

See [Mintlify Components](https://mintlify.com/docs/components) for full list.

## Deployment

### Mintlify Cloud (Recommended)

1. Connect your GitHub repo to Mintlify
2. Push changes to trigger auto-deployment
3. Custom domain: `docs.wovser.ai`

### Self-Hosted

```bash
npm run build
# Deploy the output to your hosting provider
```

## Contributing

1. Create a feature branch
2. Make changes
3. Preview locally with `npm run dev`
4. Submit PR for review

## Resources

- [Mintlify Documentation](https://mintlify.com/docs)
- [MDX Syntax](https://mdxjs.com/)
- [Mintlify Components](https://mintlify.com/docs/components)
