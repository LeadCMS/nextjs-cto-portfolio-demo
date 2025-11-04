# LeadCMS + Next.js Portfolio Demo

**A demonstration project showcasing Next.js static site integration with LeadCMS headless CMS.**

This portfolio site for CTO Peter L. serves as a practical example of how to:
- ✅ Build a static Next.js site powered by LeadCMS
- ✅ Separate content (MDX/JSON) from presentation (React components)
- ✅ Use MDX components for rich, editable content
- ✅ Deploy as a fully static site with zero runtime dependencies
- ✅ Set up CI/CD with GitHub Actions and Docker

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
- `pnpm run pull` - Fetch latest content from LeadCMS
- `pnpm run start` - Start production server

## Environment Variables

Required environment variables in `.env`:

```bash
LEADCMS_API_KEY=your-api-key
LEADCMS_URL=https://your-leadcms-instance.com
LEADCMS_DEFAULT_LANGUAGE=en
```

**Note:** This demo uses `https://cms.liapin.space` as the LeadCMS instance.

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

- Vercel
- Netlify
- AWS S3 + CloudFront
- Any web server (nginx, Apache, etc.)

The `out/` directory contains all static files ready to be served.

## About This Demo

This project demonstrates:

1. **LeadCMS Integration** - Content managed in LeadCMS, synced via SDK
2. **Static Generation** - Full static export with `output: "export"`
3. **MDX Components** - Rich content composition with custom React components
4. **Template System** - Different layouts for different content types
5. **CI/CD Pipeline** - Automated builds and Docker images with GitHub Actions
6. **Best Practices** - No hardcoded content, fail-fast builds, semantic components

**Live Site:** https://liapin.space (Portfolio of CTO Peter L.)

## Learn More

- [LeadCMS Documentation](https://leadcms.ai/docs/)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [MDX Documentation](https://mdxjs.com/)

## License

This demo project is open source and available for learning purposes.
