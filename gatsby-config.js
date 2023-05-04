/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "High Country Digital",
    description:
      "Increase your website speed and boost your conversion rates.  Reduce your website load time by 50% or more, guaranteed.",
    author: "Dan Ramos",
    twitterUsername: "dan.ramos",
    facebookUsername: "",
    instagramUsername: "",
    linkedinUsername: "high-country-digital",
    image: "/telluride.jpg",
    siteUrl: "https://www.highcountrydigital.io",
    developerName: "Dan Ramos",
    developerUrl: "https://www.highcountrydigital.io",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
