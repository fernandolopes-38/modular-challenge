import { Container, FeaturedProjectContainer } from './styles'
import { AiOutlineLike } from 'react-icons/ai';

import { ProjectCard } from '../ProjectCard';
import { LoaderSpinner } from '../LoaderSpinner';

import { Project } from '../../types';

interface ProjectsProps {
  fetchError: boolean;
  latestProject: Project | undefined;
  projects: Project[];
}

export const Projects = ({ fetchError, latestProject, projects }: ProjectsProps) => {
  return (
    <Container>
      <h2>Latest Projects</h2>
      
      {latestProject ? 
        <FeaturedProjectContainer>  
          <h3>{latestProject.title}</h3>
          <h4>{latestProject.subtitle}</h4>
          <img src={`/img/${latestProject.picture}`} alt="Project"/>
          <p>{latestProject.description}</p>
          <button type="button">
            <AiOutlineLike />
            BACK MY PROJECT
          </button>
        </FeaturedProjectContainer> :
        fetchError ?
          <h3>None to show</h3> :
          <LoaderSpinner />
      }

      <>
        {projects &&  
          projects.map(project =>
            <ProjectCard key={project.id} project={project} />
          )}
      </>
      
    </Container>
  )
}
