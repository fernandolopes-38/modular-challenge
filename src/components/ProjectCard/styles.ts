import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  margin-top: 25px;

  img {
    height: 11rem;
  }

  main {
    margin-left: 15px;

    h3 {
      font-size: 18px;
      color: var(--text-subtitle);
      margin-bottom: 15px;
    }

    p {
      font: 400 1rem Arial, sans-serif;
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

  @media (max-width: 860px) {
    flex-direction: column;

    img {
      width: 100%;
      height: 100%;
    }

    main {
      margin-top: 15px;
      margin-left: 0;
    }
  }
`;
