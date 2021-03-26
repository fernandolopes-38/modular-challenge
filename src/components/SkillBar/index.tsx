import { Container, ProgressBar, ProgressBarContainer } from './styles';

interface SkillBarProps {
  skill: string;
  skillLevel: string;
  width: number;
}

export const SkillBar = ({ skill, skillLevel, width }: SkillBarProps) => {
  return (
    <Container>
      <div>
        <h3>{skill}</h3>
        <p>{skillLevel}</p>
      </div>
      <ProgressBarContainer>
        <ProgressBar style={{ width: `${width}%` }}></ProgressBar>
      </ProgressBarContainer>
    </Container>
  )
}
