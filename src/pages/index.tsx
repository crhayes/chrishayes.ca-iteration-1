/** @jsx jsx */
import { jsx } from "theme-ui"
import { Styled } from "theme-ui"
import styled from "@emotion/styled"

import SEO from "../components/seo"
import PageLayout from "../components/layouts/page"
import SkillsGrid from "../components/skills-grid"
import ArticlesGrid from "../components/articles-grid"

const AboutImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 300px;
  height: 300px;

  img {
    transition: opacity 0.2s;
    position: absolute;
  }

  img:nth-of-type(2) {
    opacity: 0;
  }

  &:hover {
    img:nth-of-type(1) {
      opacity: 0;
    }

    img:nth-of-type(2) {
      opacity: 100;
    }
  }
`

export default () => (
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
          <Styled.a href="https://yolka.ai">Yolk AI</Styled.a> where I build
          applications that enrich people's work lives.
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
        <img
          src="https://instagram.fyzd1-2.fna.fbcdn.net/v/t51.2885-15/e35/34846526_225937448215681_9029055694770274304_n.jpg?_nc_ht=instagram.fyzd1-2.fna.fbcdn.net&_nc_cat=101&oh=54f249f91457712db9dfd12373f2008a&oe=5E8C5981"
          alt="Me looking at camera"
          sx={{
            width: 300,
            borderRadius: 5,
          }}
        />
        <img
          src="https://thumbs.gfycat.com/WellmadeGreenHumpbackwhale-small.gif"
          alt="Me going Super Saiyan"
          sx={{
            width: 300,
            borderRadius: 5,
          }}
        />
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
