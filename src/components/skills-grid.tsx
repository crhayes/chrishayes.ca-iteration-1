import React from "react"
import styled from "../styled"

const Skills = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  grid-gap: 1rem;
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;

  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: none;
    grid-auto-flow: column;
  }
`

const Icon = styled.span`
  color: ${({ theme }) => theme.colors.primary};

  &:before {
    content: "↳";
  }
`

interface Props {
  className?: string
}

const SkillsGrid: React.FC<Props> = ({ className }) => (
  <Skills className={className}>
    <div>
      <Icon /> JavaScript
    </div>
    <div>
      <Icon /> TypeScript
    </div>
    <div>
      <Icon /> React
    </div>
    <div>
      <Icon /> GraphQL
    </div>
    <div>
      <Icon /> Node.js
    </div>
    <div>
      <Icon /> PHP
    </div>
    <div>
      <Icon /> Laravel
    </div>
    <div>
      <Icon /> Unit Testing
    </div>
    <div>
      <Icon /> User Experience
    </div>
    <div>
      <Icon /> Agile Movements
    </div>
    <div>
      <Icon /> Jest
    </div>
    <div>
      <Icon /> Cypress.io
    </div>
    <div>
      <Icon /> Bash
    </div>
    <div>
      <Icon /> Git &amp; Github
    </div>
    <div>
      <Icon /> Visual Studio Code
    </div>
  </Skills>
)

export default SkillsGrid
