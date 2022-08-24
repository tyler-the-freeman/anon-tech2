module.exports = {
  siteMetadata: {
    title: "Anon Tech",
    titleTemplate: "%s · Anon Tech",
    description: "Complete Security & Technology Integration",
    // url: "https://smartprokc.com", // no trailing slash!
    // siteUrl: "https://smartprokc.com", // no trailing slash!
    image: "/images/logos/SPT-Logo-White.png",
    owner: "Anon Tech",
    author: `yesnotnode`,
    basePath: "/",
    nav: [
      { path: "/", name: "Home" },
      { path: "/#about", name: "About" },
      { path: "/#contact", name: "Contact" },
      { path: "/#security", name: "Security" },
      { path: "/#technology", name: "Technology" },
      { path: "/#c-suite", name: "C-Suite" },
    ],
  },
  plugins: [
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anon Tech`,
        short_name: `Anon Tech`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#00ffe5`,
        display: `standalone`,
        icon: `src/images/logos/SPT-Favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: false, // optional parameter to include script in development
        id: 2540442,
        sv: 6,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        color: "#00ffe5",
        // Height of the scroll indicator
        height: "3px",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-211979030-1", // Google Analytics / GA
          "G-S8DQ1EJF0H",
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
};
