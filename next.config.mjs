/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blob.v0.dev',
        pathname: '/**',
      },
    ],
  },
  turbopack: {}, // 👈 this silences turbopack warning
}

export default nextConfig
