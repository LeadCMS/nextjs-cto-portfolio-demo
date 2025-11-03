/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Enable static export for production
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
}

export default nextConfig
