import { SkillBar } from '../SkillBar'
import { Container } from './styles'

import { HiOutlineExternalLink } from 'react-icons/hi'

export const Skills = () => {
  return (
    <Container>
      <h2>Skill</h2>
      <p className="summary">
        Intro about your skills goes here. 
        Keep the list lean and only show yout primary skillset.
        You can always provide a link to yout Linkedin
        or Codewall profile so people can get more info there.
      </p>

      <SkillBar 
        skill="Python & Django"
        skillLevel="Expert"
        width={90} 
      />
      <SkillBar 
        skill="Javascript & jQuery"
        skillLevel="Expert"
        width={90} 
      />
      <SkillBar 
        skill="HTML5, CSS3, SASS & LESS"
        skillLevel="Expert"
        width={90} 
      />
      <SkillBar 
        skill="Ruby on Rails"
        skillLevel="Pro"
        width={75} 
      />

      <a href="https://coderwall.com/">
        <HiOutlineExternalLink />
        <span>More on Coderwall</span>
      </a>
    </Container>
  )
}
