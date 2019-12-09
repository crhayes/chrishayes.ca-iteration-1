/** @jsx jsx */
import React from "react"
import Img from "gatsby-image"
import { jsx, Styled } from "theme-ui"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import ScreenReaderOnly from "../components/sr-only"
import BlogLayout from "../components/layouts/blog"

interface ArticleProps {
  slug: string
  title: string
  date: string
  description: string
}

const Article: React.FC<ArticleProps> = ({
  slug,
  title,
  date,
  description,
}) => (
  <section sx={{ mb: 4 }}>
    <Styled.h2 sx={{ mb: 2 }}>
      <Link to={slug} sx={{ variant: "links.text", mb: 4 }}>
        {title}
      </Link>
    </Styled.h2>
    <small>{date}</small>
    <p sx={{ mt: 0 }}>{description}...</p>
  </section>
)

const ArticlesPage: React.FC<any> = ({
  data: {
    me: {
      childImageSharp: { fixed: me },
    },
    allMdx: { edges: articles },
  },
}) => (
  <BlogLayout>
    <SEO title="Articles | Chris Hayes" />
    <ScreenReaderOnly as="h1">Articles</ScreenReaderOnly>
    <header
      sx={{
        display: "grid",
        gridTemplateColumns: "min-content 1fr",
        gridGap: 4,
        alignItems: "center",
        my: 5,
      }}
    >
      <Img
        fixed={me}
        alt="Me, looking at the camera"
        sx={{ width: 100, borderRadius: "50%" }}
      />
      <div sx={{ fontSize: 3 }}>
        Written by Chris Hayes, a Senior Software Engineer working at{" "}
        <Styled.a href="https://www.yolk.ai/" target="_blank" rel="noopener">
          Yolk AI
        </Styled.a>{" "}
        in Toronto, ON.
      </div>
    </header>
    {articles.map(({ node: article }: any) => (
      <Article
        key={article.id}
        slug={article.fields.slug}
        title={article.frontmatter.title}
        date={article.frontmatter.date}
        description={article.frontmatter.description || article.excerpt}
      />
    ))}
  </BlogLayout>
)

export default ArticlesPage

export const query = graphql`
  query {
    me: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          body
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
