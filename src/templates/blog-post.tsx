import React from "react"
import { graphql } from "gatsby"
import { Styled } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layouts/blog"
import SEO from "../components/seo"

const BlogPostTemplate: React.FC<any> = ({
  data: {
    site: { siteMetadata: meta },
    mdx: post,
  },
}) => (
  <Layout>
    <SEO
      title={`${post.frontmatter.title} | ${meta.title}`}
      description={post.frontmatter.description || post.excerpt}
    />
    <Styled.h1>{post.frontmatter.title}</Styled.h1>
    <MDXRenderer>{post.body}</MDXRenderer>
  </Layout>
)

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
