/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Payroll",
    author: "Alex Lee",
    company: {
      link: "https://www.qln.com/",
      name: "Quantum Learning Network"
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `src`, `data`)
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Source Sans Pro"]
        }
      }
    },
    "gatsby-plugin-sass",
    `gatsby-transformer-json`
  ]
};
