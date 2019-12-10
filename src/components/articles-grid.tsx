/** @jsx jsx */
import React from "react"
import styled from "../styled"
import { jsx, Styled } from "theme-ui"
import { graphql, Link, useStaticQuery } from "gatsby"

const Articles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(min-content, 14em);
  }
`

const Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 35px;
  border-radius: 5px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.muted};

  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    &:first-of-type {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
    }
  }
`

interface Props {
  className?: string
}

const ArticlesGrid: React.FC<Props> = ({ className }) => {
  const {
    allMdx: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 6) {
          edges {
            node {
              id
              excerpt
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
  )
  const articles = edges.map((e: any) => e.node)
  return (
    <Articles className={className}>
      {articles.map((article: any, index: number) => {
        const Heading = index === 0 ? Styled.h2 : Styled.h4
        return (
          <Article key={article.id}>
            <Heading sx={{ mb: 0 }}>
              <Link to={article.fields.slug} sx={{ variant: "links.text" }}>
                {article.frontmatter.title}
              </Link>
            </Heading>
            <small>{article.frontmatter.date}</small>
            <p sx={{ mb: 0, fontSize: 1 }}>
              {article.frontmatter.description || article.excerpt}
            </p>
          </Article>
        )
      })}
    </Articles>
  )
}

export default ArticlesGrid
