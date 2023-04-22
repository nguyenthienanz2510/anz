/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'links.papareact.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'scontent.fsgn5-11.fna.fbcdn.net',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'd1ubwt7z1ubyyw.cloudfront.net',
        port: ''
      }
    ]
  }
}

module.exports = nextConfig
