/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { jsx, Styled } from "theme-ui"
import { default as GatsbyImg } from "gatsby-image"

import SEO from "../components/seo"
import PageLayout from "../components/layouts/page"
import SkillsGrid from "../components/skills-grid"
import ArticlesGrid from "../components/articles-grid"
// @ts-ignore
import superSaiyan from "../../content/assets/super-saiyan.webp"

const Img = styled(GatsbyImg)``

const AboutImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 300px;
  height: 300px;

  img,
  ${Img} {
    position: absolute !important;
    width: 300px;
    border-radius: 5px;
    transition: opacity 0.2s;
  }

  img {
    opacity: 0;
  }

  &:hover {
    ${Img} {
      opacity: 0;
    }

    img {
      opacity: 100;
    }
  }
`

const IndexPage: React.FC<any> = ({ data }) => (
  <PageLayout>
    <SEO title="Chris Hayes | Senior Software Engineer" />
    <section sx={{ my: [5, 6], fontSize: [2, 3] }}>
      <Styled.h1 sx={{ fontSize: [6, 7, 86] }}>
        I am a self taught software engineer with a passion for the web 👨🏼‍💻
      </Styled.h1>
      <p sx={{ display: ["inline", "block"], my: 0 }}>
        Hailing from Toronto, ON, I specialize in building frontend web
        applications.
      </p>{" "}
      <p sx={{ display: ["inline", "block"], my: 0 }}>
        I employ a strong product focus and a keen eye for good design and UX.
      </p>{" "}
      <p sx={{ display: ["inline", "block"], my: 0 }}>
        I've also been known to dabble in <del>dark arts</del> backend
        development.
      </p>
    </section>
    <section
      sx={{
        display: "grid",
        gridTemplateAreas: [
          `"header""content""image"`,
          `"header header""content image"`,
        ],
        my: [5, 6],
      }}
    >
      <Styled.h2
        sx={{
          gridArea: "header",
          mt: 0,
        }}
      >
        <span sx={{ fontFamily: "monospace", color: "primary" }}>01.</span>{" "}
        About Me
      </Styled.h2>
      <div
        sx={{
          gridArea: "content",
          maxWidth: ["100%", "35rem"],
        }}
      >
        <p sx={{ mt: 0 }}>
          When I was thirteen I had a passion: Dragonball Z. It motivated me to
          build my first website, which was a catalog of animated DBZ GIFs I
          borrowed from around the internet. I've been building for the web ever
          since.
        </p>
        <p>
          Today I work as a Senior Software Engineer at{" "}
          <Styled.a href="https://www.yolk.ai/" target="_blank" rel="noopener">
            Yolk AI
          </Styled.a>{" "}
          where I build applications that enrich people's work lives.
        </p>
        <p>Here are some of the tools and techniques I use on the daily:</p>
        <SkillsGrid sx={{ mt: 4 }} />
      </div>
      <AboutImage
        sx={{
          gridArea: "image",
          justifySelf: ["center", "default"],
          ml: [0, 4],
          mt: [4, 0],
        }}
      >
        <Img fixed={data.me.childImageSharp.fixed} alt="Me looking at camera" />
        <img src={superSaiyan} alt="Me going Super Saiyan" />
      </AboutImage>
    </section>
    <section sx={{ my: [5, 6] }}>
      <Styled.h2 sx={{ mb: 4 }}>
        <span sx={{ fontFamily: "monospace", color: "primary" }}>02.</span>{" "}
        Recent Articles
      </Styled.h2>
      <ArticlesGrid />
    </section>
  </PageLayout>
)

export default IndexPage

export const query = graphql`
  query {
    me: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
