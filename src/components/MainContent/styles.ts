import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-areas:
    'a a a a b'
    'a a a a c'
    'd d d d c'
    'd d d d c'
    'd d d d .'
    'd d d d .';

  gap: 2rem;

  padding: 3.5rem;

  @media (max-width: 720px) {
  }
`;
