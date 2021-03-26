import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  margin-top: 25px;

  img {
    height: 11rem;
    /* height: 12rem; */
  }

  main {
    margin-left: 15px;

    h3 {
      font-size: 18px;
      color: var(--text-subtitle);
      margin-bottom: 15px;
    }

    p {
      font: 400 16px Arial, sans-serif;
      margin-bottom: 15px;
    }

    a {
      display: flex;
      align-items: center;
      color: var(--link-green);

      span {
        margin-left: 10px;
      }
    }
  }
`;
