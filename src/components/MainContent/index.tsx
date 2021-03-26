import { useEffect, useState } from 'react'

import { api } from '../../service/api'

import { AboutMe } from '../AboutMe'
import { Infos } from '../Infos'
import { Projects } from '../Projects'
import { Skills } from '../Skills'

import { Container } from './styles'

import { Project } from '../../types'


export const MainContent = () => {
  const [latestProject, setLatestProject] = useState<Project>();
  const [projects, setProjects] = useState<Project[]>();

  useEffect(() => {
    const loadProjects = async () => {
      const featuredProject = await api.get<Project>('/projects/1').then(response => response.data);
      if (featuredProject) setLatestProject(featuredProject);
      const resProjects = await api.get<Project[]>('/projects').then(response => response.data);
      if (resProjects) setProjects(resProjects.filter(project => project.id !== 1));
    }

    loadProjects();
  }, []);

  return (
    <Container>
      <AboutMe />
      <Infos />
      <Skills />
      <Projects latestProject={latestProject} projects={projects}/>
    </Container>
  )
}
