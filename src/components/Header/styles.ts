import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--header);
  padding: 2rem 3rem;
  border-top: 10px solid var(--top-border);

  div {
    display: flex;
    align-items: center;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 10.5rem;
    height: 2.3rem;
    border: 0;
    border-radius: 0.25rem;

    background: var(--green);
    color: #fff;

    font-size: 1rem;
    font-weight: 600;

    padding: 0 1.2rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 720px) {
    flex-direction: column;
    div:first-child {
      flex-direction: column;
    }
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 25px;

  h1 {
    font: 700 38px 'Montserrat', sans-serif;
    color: var(--text-title);
    margin-bottom: 8px;
  }

  h2 {
    font: 400 24px Arial, sans-serif;
    color: var(--subtitle);
    margin-bottom: 8px;
  }

  @media (max-width: 720px) {
    margin: 25px 0;
  }
`;
