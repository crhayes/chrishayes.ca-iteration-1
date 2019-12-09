/** @jsx jsx */
import React from "react"
import styled from "../styled"
import { jsx, Styled } from "theme-ui"

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

const ArticlesGrid: React.FC<Props> = ({ className }) => (
  <Articles className={className}>
    <Article>
      <Styled.h2 as="div" sx={{ mb: 0 }}>
        Mocking Apollo queries in Jest tests
      </Styled.h2>
      <p sx={{ mb: 0 }}>
        Lorem Khaled Ipsum is a major key to success. You should never complain,
        complaining is a weak emotion, you got life, we breathing, we blessed.
        Special cloth alert. Find peace, life is like a water fall, you’ve gotta
        flow. I’m giving you cloth talk, cloth.
      </p>
    </Article>
    <Article>
      <Styled.h4 as="div" sx={{ mb: 0 }}>
        Deploying web fonts to Netlify
      </Styled.h4>
      <p sx={{ mb: 0, fontSize: 1 }}>
        Lorem Khaled Ipsum is a major key to success. You should never
        complain...
      </p>
    </Article>
    <Article>
      <Styled.h4 as="div" sx={{ mb: 0 }}>
        Developing with a product mindset
      </Styled.h4>
      <p sx={{ mb: 0, fontSize: 1 }}>
        Lorem Khaled Ipsum is a major key to success. You should never
        complain...
      </p>
    </Article>
    <Article>
      <Styled.h4 as="div" sx={{ mb: 0 }}>
        Using gherkin and cucumber tests from product
      </Styled.h4>
      <p sx={{ mb: 0, fontSize: 1 }}>
        Lorem Khaled Ipsum is a major key to success. You should never
        complain...
      </p>
    </Article>
    <Article>
      <Styled.h4 as="div" sx={{ mb: 0 }}>
        Surviving Bazel
      </Styled.h4>
      <p sx={{ mb: 0, fontSize: 1 }}>
        Lorem Khaled Ipsum is a major key to success. You should never
        complain...
      </p>
    </Article>
    <Article>
      <Styled.h4 as="div" sx={{ mb: 0 }}>
        CSS grid the easy way
      </Styled.h4>
      <p sx={{ mb: 0, fontSize: 1 }}>
        Lorem Khaled Ipsum is a major key to success. You should never
        complain...
      </p>
    </Article>
  </Articles>
)

export default ArticlesGrid
