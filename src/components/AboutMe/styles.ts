import styled from 'styled-components';

export const Container = styled.div`
  grid-area: a;

  padding: 2rem;
  background: var(--card);

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-title);
    margin-bottom: 25px;
  }

  p {
    font: 400 1rem Arial, sans-serif;
  }
`;
