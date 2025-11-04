// next.config.ts
import createMDX from '@next/mdx';

const withMDX = createMDX({ extension: /\.mdx?$/ });

const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: true, // Generates projects/tagpoint/index.html instead of projects/tagpoint.html

  // Next 16: use `turbopack` (not `experimental.turbo`)
  turbopack: {
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.mdx', '.md'],
  },

  // So you can import .mdx anywhere
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);
