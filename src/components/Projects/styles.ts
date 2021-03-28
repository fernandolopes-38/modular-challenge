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

  padding-bottom: 70px;
  margin-bottom: 50px;

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
    font: 400 1rem Aria, sans-serif;
    margin: 25px 0;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 220px;
    height: 38px;
    border: 0;
    border-radius: 0.25rem;

    background: var(--light-blue);
    color: #fff;

    font-weight: 600;

    padding: 0 18px;
    margin: 0 auto;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
