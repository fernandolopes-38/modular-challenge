import { useEffect, useState } from 'react'

import { api } from '../../service/api'

import { AboutMe } from '../AboutMe'
import { Infos } from '../Infos'
import { Projects } from '../Projects'
import { Skills } from '../Skills'

import { Container } from './styles'

import { Project } from '../../types'


export const MainContent = () => {
  const [latestProject, setLatestProject] = useState<Project | undefined>();
  const [projects, setProjects] = useState<Project[]>([]);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        await Promise.all([
          api.get<Project>('/projects/1').then(response => setLatestProject(response.data)),
          api.get<Project[]>('/projects?id_ne=1').then(response => setProjects(response.data))
        ]);
      } catch (error) {
        setFetchError(true);
      }
    }

    loadProjects();
  }, []);

  return (
    <Container>
      <AboutMe />
      <Infos />
      <Skills />
      <Projects 
        latestProject={latestProject} 
        projects={projects}
        fetchError={fetchError}
      />
    </Container>
  )
}
