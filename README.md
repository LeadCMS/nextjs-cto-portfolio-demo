# LeadCMS Portfolio Site

This is a personal portfolio website built with Next.js and LeadCMS, demonstrating the separation of content from presentation.

## Architecture

The site follows the LeadCMS architecture pattern:

- **Content** lives in `.leadcms/content/` as MDX and JSON files
- **Presentation** is handled by React components in `components/`
- **Templates** in `components/templates/` control how different content types are rendered
- **No fallback content** - the build fails if required content is missing

## Content Structure

```
.leadcms/content/
├── metadata.json          # Site-wide metadata
├── header.json           # Header navigation configuration
├── footer.json           # Footer configuration
├── contact-us-form.json  # Contact form configuration
├── home.mdx              # Homepage content
└── projects/             # Project pages
    ├── xltools.mdx
    ├── leadcms.mdx
    └── tagpoint.mdx
```

## MDX Components

The following components are available in MDX files:

- `<HeroSection>` - Hero section with profile image and bio
- `<ProjectCard>` - Individual project card
- `<ProjectGrid>` - Grid container for project cards
- `<ContactSection>` - Contact form section

## Content Types

- **home** - Homepage (uses DefaultTemplate)
- **project** - Project detail pages (uses ProjectTemplate)

## Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production (includes content fetch)
- `pnpm run fetch` - Fetch latest content from LeadCMS
- `pnpm run start` - Start production server

## Environment Variables

Required environment variables in `.env`:

```bash
LEADCMS_API_KEY=your-api-key
LEADCMS_URL=https://cms.liapin.space
LEADCMS_DEFAULT_LANGUAGE=en
```

## Static Export

The site is configured for static export in production:

- All pages are pre-rendered at build time
- Dynamic routes use `generateStaticParams`
- Images are unoptimized for static deployment

## Adding New Content

### Add a New Page

1. Create an MDX file in `.leadcms/content/`
2. Add frontmatter with `title`, `description`, `slug`, and `type`
3. Use existing MDX components to compose the page
4. The page will automatically be generated

### Add a New MDX Component

1. Create component in `components/mdx/`
2. Export from `components/mdx/index.tsx`
3. Register in `components/mdx-components.tsx`
4. Use in MDX files

### Add a New Template

1. Create template in `components/templates/`
2. Register in `components/templates/index.tsx`
3. Use by setting `type` in content frontmatter

## Key Principles

1. **No hardcoded content** - All content comes from `.leadcms/content/`
2. **Content inside tags** - MDX components accept content as children, not JSON props
3. **Fail builds** - Missing content throws errors instead of showing fallbacks
4. **Semantic names** - Components have clear, descriptive names
5. **Static export compatible** - No server-side features, all generated at build time

## Development

Start the development server:

```bash
pnpm run dev
```

Visit http://localhost:3000 to see the site.

## Production Build

Build the site for production:

```bash
pnpm run build
```

This will:
1. Fetch latest content from LeadCMS
2. Generate all static pages
3. Export to the `out/` directory

## Deployment

The site can be deployed to any static hosting service:

- Vercel (recommended)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any web server (nginx, Apache, etc.)

The `out/` directory contains all static files ready to be served.
