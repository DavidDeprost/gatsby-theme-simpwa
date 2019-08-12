module.exports = {
  siteMetadata: {
    title: 'Gatsby Theme simPWA',
    author: 'David Deprost',
    description: 'Configurable template for building simple PWA\'s',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['gatsby-theme-simpwa'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-theme-simpwa',
        short_name: 'gatsby-theme-simpwa',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        // Enables 'Add to Homescreen' prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to 'anonymous'
        crossOrigin: 'use-credentials',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
  ],
}
