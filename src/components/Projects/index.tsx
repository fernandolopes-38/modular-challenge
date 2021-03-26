import { Container, FeaturedProjectContainer } from './styles'
import { Project } from '../../types';
import { ProjectCard } from '../ProjectCard';

import { AiOutlineLike } from 'react-icons/ai'

interface ProjectsProps {
  latestProject: Project | undefined;
  projects: Project[] | undefined;
}

export const Projects = ({ latestProject, projects }: ProjectsProps) => {
  console.log('latestProject', latestProject);
  console.log('projects', projects);
  return (
    <Container>
      <h2>Latest Projects</h2>
      
      {latestProject && 
        <FeaturedProjectContainer>  
          <h3>{latestProject.title}</h3>
          <h4>{latestProject.subtitle}</h4>
          <img src={`/img/${latestProject.picture}`} alt="Project"/>
          <p>{latestProject.description}</p>
          <button type="button">
            <AiOutlineLike />
            BACK MY PROJECT
          </button>
        </FeaturedProjectContainer>
      }

      <>
        {projects &&  
          projects.map(project =>
            <ProjectCard project={project} />
          )}
      </>
      
    </Container>
  )
}
