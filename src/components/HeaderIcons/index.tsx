import { Container, IconContainer } from './styles'

import { FaTwitter, FaLinkedinIn, FaGithubAlt } from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { ImYahoo2 } from 'react-icons/im';


export const HeaderIcons = () => {
  return (
    <Container>
      <IconContainer>
        <FaTwitter />
      </IconContainer>

      <IconContainer>
        <TiSocialGooglePlus />
      </IconContainer>

      <IconContainer>
        <FaLinkedinIn />
      </IconContainer>

      <IconContainer>
        <FaGithubAlt />
      </IconContainer>

      <IconContainer>
        <ImYahoo2 />
      </IconContainer>
    </Container>
  )
}
