/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['images.unsplash.com', 'github.com', 'instagram.fudr1-1.fna.fbcdn.net']
  }
}

module.exports = nextConfig
