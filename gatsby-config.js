/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Paayroll",
    author: "Alex Lee",
    company: {
      link: "https://www.qln.com/",
      name: "Quantum Learning Network"
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    "gatsby-plugin-sass",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
};
