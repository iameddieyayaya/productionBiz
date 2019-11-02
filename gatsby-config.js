module.exports = {
  siteMetadata: {
    title: `Noise Group`,
    description: `Professional web content company based in San Diego, California. Specializing in video, drone, and web development`,
    author: `Eduardo Gomez`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-146649191-1",
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: "10731721005.1677ed0.dd3dc2cf7b6649a485faf712d06f4fee",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {},
    },
    "gatsby-plugin-offline",

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
