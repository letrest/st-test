// This file was automatically added by edgio init.
// You should commit this file to source control.
const { withEdgio } = require('@edgio/next/config')

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/commerce/:name',
        destination: '/commerce',
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'edgio-community-ecommerce-api-example-default.layer0-limelight.link',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'simpletire.s3.amazonaws.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.simpletire.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'uat-static-assets.thriveworks.com',
        pathname: '**',
      },
    ],
  },
}

module.exports = (phase, config) =>
  withEdgio({
    ...nextConfig,
  })
