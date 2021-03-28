import { Container, InfosContainer } from './styles'

import { HeaderIcons } from '../HeaderIcons';

import { FaTelegramPlane } from 'react-icons/fa';

export const Header = () => {
  return (
    <Container>
      <div>
        <img src="/img/profile.png" alt="profile avatar"/>
        <InfosContainer>
          <h1>James Lee</h1>
          <h2>Web App Developer</h2>
          <HeaderIcons />
        </InfosContainer>
      </div>
      <button type="button">
        <FaTelegramPlane />
        CONTACT ME
      </button>
    </Container>
  )
}
