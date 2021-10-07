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
  ],
  pathPrefix: "/mask-website",
};
