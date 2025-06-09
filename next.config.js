/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable server-side features since we're doing static export
  trailingSlash: true,
  distDir: 'out',
  basePath: '/bench-project',
};

module.exports = nextConfig;
