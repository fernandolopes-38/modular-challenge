import styled from 'styled-components';

export const Container = styled.div`
  grid-area: c;

  padding: 2rem;
  background: var(--card);

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-title);
    margin-bottom: 25px;
  }

  p.summary {
    margin-bottom: 20px;
    font: 400 1rem Arial, sans-serif;
  }

  a {
    display: flex;
    align-items: center;
    color: var(--link-green);

    span {
      margin-left: 10px;
    }
  }
`;
