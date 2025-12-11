// next.config.ts
import type { NextConfig } from 'next'
import withBundleAnalyzer from '@next/bundle-analyzer'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  generateEtags: false,
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.pyramidsfreight.com',
        pathname: '/storage/uploads/**',
      },
    ],
  },

  serverExternalPackages: ['mongoose', 'lodash', 'exceljs', 'pdf-lib'],

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ]
  },

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    cpus: 4,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },

  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  env: {
    MAX_SSR_COMPONENTS: '50',
    API_TIMEOUT: '10000',
    CACHE_TTL: '300000',
  },
}

// Bundle analyzer
export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig)
