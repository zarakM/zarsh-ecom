require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Gatsby starter ecommerce',
    author: 'Parminder Sanghera',
    description: 'A starter e-commerce site made using Gatsby.',
    siteUrl: 'https://parmsang.github.io/gatsby-starter-ecommerce/',
  },
  pathPrefix: '/gatsby-starter-ecommerce',
  plugins: [
    {
      resolve: '@pasdo501/gatsby-source-woocommerce',
      options: {
        // Base URL of Wordpress site
        api: '18.196.29.44',
        // username: user
        // password: tgJ1fE9E5UkZ
        protocol: 'http',

        // set to false to not see verbose output during build
        // default: true
        verbose: true,

        // true if using https. otherwise false.
        https: false,
        api_keys: {
          consumer_key: 'ck_45a266a10c5a13e9da70ebdfa439fd94af90452c',
          consumer_secret: 'cs_cc6ebcd3f45162f14aa1af12cafac959e0d11b54',
        },
        // Array of strings with fields you'd like to create nodes for...
        fields: ['products', 'products/categories'],
        // Send the API keys as query string parameters instead of using the authorization header

        // OPTIONAL: Custom Axios config (see https://github.com/axios/axios) - note that this can override other options.
        // axios_config: {
        //   // Axios config options
        // }
      },
    },
    {
      resolve: '@moltin/gatsby-source-moltin',
      options: {
        client_id:
          process.env.MOLTIN_CLIENT_ID ||
          'EdP3Gi1agyUF3yFS7Ngm8iyodLgbSR3wY4ceoJl0d2',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby Shop App',
        short_name: 'Shop App',
        start_url: '/gatsby-starter-ecommerce/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icons: [
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
