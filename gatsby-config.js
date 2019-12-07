/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          blog: require.resolve("./src/components/layouts/blog.tsx"),
          default: require.resolve("./src/components/layouts/page.tsx"),
        },
        gatsbyRemarkPlugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-preload-fonts`,
  ],
}
