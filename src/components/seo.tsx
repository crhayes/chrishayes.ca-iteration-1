import React from "react"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

interface Meta {
  name: string
  content: string
}

interface Props {
  title?: string
  description?: string
  lang?: string
  meta?: Meta[]
  keywords?: string[]
}

const SEO: React.FC<Props> = ({
  title,
  description,
  lang = "en",
  meta = [],
  keywords = [],
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      meta={[
        {
          content: metaDescription,
          name: `description`,
        },
        {
          content: metaTitle,
          property: `og:title`,
        },
        {
          content: metaDescription,
          property: `og:description`,
        },
        {
          content: `website`,
          property: `og:type`,
        },
        {
          content: `summary`,
          name: `twitter:card`,
        },
        {
          content: site.siteMetadata.author,
          name: `twitter:creator`,
        },
        {
          content: metaTitle,
          name: `twitter:title`,
        },
        {
          content: metaDescription,
          name: `twitter:description`,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                content: keywords.join(`, `),
                name: `keywords`,
              }
            : []
        )
        .concat(meta)}
    />
  )
}

export default SEO
