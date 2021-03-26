import styled from 'styled-components';

export const Container = styled.div`
  grid-area: d;

  padding: 2rem;
  background: var(--card);

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-title);
    margin-bottom: 25px;
  }
`;

export const FeaturedProjectContainer = styled.div`
  text-align: center;

  padding-bottom: 30px;
  margin-bottom: 60px;

  border-bottom: 1px solid lightgray;

  img {
    width: 100%;
  }

  h3 {
    font-size: 20px;
    font-weight: 700;
    color: var(--text-subtitle);
    margin-bottom: 5px;
  }

  h4 {
    font: 300 16px Aria, sans-serif;
    color: var(--text-subtitle);
    margin-bottom: 20px;
  }

  p {
    text-align: left;
    font: 400 16px Aria, sans-serif;
    margin: 25px 0;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 12rem;
    height: 2.2rem;
    border: 0;
    border-radius: 0.25rem;

    background: var(--light-blue);
    color: #fff;

    font-size: 0.8rem;
    font-weight: 600;

    padding: 0 1.1rem;
    margin: 0 auto;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ProjectContainer = styled.div`
  padding: 10px;

  img {
    width: 35rem;
  }
`;
