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
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "G-2XCS4Y99T",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
        // Defaults to gatsby-route-change
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
      },
    },
    {
      resolve: "gatsby-plugin-asset-path",
      options: {
        fileTypes: ["js", "map", "css"],
      },
    },
    `gatsby-transformer-sharp`,
    "gatsby-plugin-cname",
    "gatsby-plugin-use-query-params",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        include: /outsvg/,
      },
    },
  ],
  // assetPrefix: `/gatsby-assets`,
  pathPrefix: "/mask-website",
};
