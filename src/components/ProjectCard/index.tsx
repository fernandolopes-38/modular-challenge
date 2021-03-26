import { HiOutlineExternalLink } from 'react-icons/hi'
import { Project } from '../../types'
import { Container } from './styles'

interface ProjectCardProps { 
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Container>
      <img src={`/img/${project.picture}`} alt="Project"/>
      
      <main>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <a href={project.url}>
          <HiOutlineExternalLink />
          <span>Find out more</span>
        </a>
      </main>
    </Container>
  ) 
}
