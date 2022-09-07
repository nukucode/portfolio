/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    concurrentFeatures: false, // <- Turn this option to false
    serverComponents: true,
  },
  swcMinify: true,
  images:{
    domains:['images.unsplash.com', 'cdn.sanity.io', 'avatars.githubusercontent.com', 'github.com', 'instagram.fudr1-1.fna.fbcdn.net']
  },

  env : {
    NEXT_PUBLIC_SANITY_DATASET : 'production',
    NEXT_PUBLIC_SANITY_PROJECTID : '1t6krb1s'
  }
}

module.exports = nextConfig
