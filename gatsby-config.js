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
        id: "G-2XCS4Y99TG",
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
        // Defaults to false
        enableWebVitalsTracking: true,
        selfHostedOrigin:
          "https://www.googletagmanager.com/gtag/js?id=G-2XCS4Y99TG",
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
