const repoBasePath = process.env.GITHUB_ACTIONS ? '/Carnival' : '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: repoBasePath,
  assetPrefix: repoBasePath ? `${repoBasePath}/` : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      }
    ]
  }
};
export default nextConfig;
