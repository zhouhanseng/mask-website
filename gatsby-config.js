module.exports = {
  siteMetadata: {
    siteUrl: `https://mask.io`,
    title: "Mask Network",
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-cname",
    "gatsby-plugin-use-query-params",
    "gatsby-plugin-react-helmet",
  ],
  pathPrefix: "/mask-website",
};
