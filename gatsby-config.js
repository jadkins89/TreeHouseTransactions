module.exports = {
  siteMetadata: {
    title: `TreeHouse Transactions`,
    description: `TreeHouse Transactions is a Transaction Coordinator business covering California, Arizona, and Colorado.`,
    author: `Deena Adkins`,
    url: `treehousetransactions.com`,
    image: `${__dirname}/src/images/blossom-plant.jpg`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TreeHouse Transactions`,
        short_name: `TreeHouse Transactions`,
        start_url: `/`,
        background_color: `rgba(46, 49, 49, 1)`,
        theme_color: `#00aba9`,
        display: `minimal-ui`,
        icon: `src/images/treehouse-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
