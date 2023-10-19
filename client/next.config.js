if (!process.env.WORDPRESS_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_URL.
  `)
}

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.WORDPRESS_URL,
        pathname: '/wp-content/uploads/**',
      },
      // uncomment for unsecured dev environment
      // {
      //   protocol: 'http',
      //   hostname: process.env.WORDPRESS_URL,
      //   pathname: '/wp-content/uploads/**',
      // },
    ],
  },
  i18n: {
    locales: ['bg', 'el', 'en', 'es', 'it'],
    defaultLocale: 'en',
  },
}
