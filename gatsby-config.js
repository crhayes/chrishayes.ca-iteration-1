/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Chris Hayes`,
    author: `Chris Hayes`,
    description: `Chris Hayes is a Senior Software Engineer living and working in Toronto, ON, specialized in building web applications. He employs a strong product focus and a keen eye for good design and UX.`,
    siteUrl: `https://chrishayes.ca`,
    social: {
      twitter: `crhayes_`,
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          blog: require.resolve(`./src/components/layouts/blog.tsx`),
          default: require.resolve(`./src/components/layouts/page.tsx`),
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
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-react-helmet`,
  ],
}
