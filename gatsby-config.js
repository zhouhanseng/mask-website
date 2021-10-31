module.exports = {
  siteMetadata: {
    siteUrl: `https://mask.io`,
    title: "Mask Network",
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 80,
      },
    },
    `gatsby-transformer-sharp`,
    "gatsby-plugin-cname",
    "gatsby-plugin-use-query-params",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include:  /\.svg$/ // See below to configure properly
        }
      }
    }
  ],
  pathPrefix: "/mask-website",
}
