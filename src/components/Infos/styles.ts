import styled from 'styled-components';

export const Container = styled.div`
  grid-area: b;

  padding: 2rem;
  background: var(--card);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 10rem;

  a {
    display: flex;
    align-items: center;
    color: lightgray;

    /* margin-bottom: 15px; */

    span {
      color: var(--link-green);
      margin-left: 15px;
    }
  }

  p {
    display: flex;
    align-items: center;
    color: lightgray;

    /* margin-bottom: 15px; */

    span {
      color: var(--text-body);
      margin-left: 15px;
    }
  }
`;
