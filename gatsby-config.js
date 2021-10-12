module.exports = {
  siteMetadata: {
    siteUrl: `https://mask.io`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-cname",
    "gatsby-plugin-use-query-params",
  ],
  pathPrefix: "/mask-website",
};
