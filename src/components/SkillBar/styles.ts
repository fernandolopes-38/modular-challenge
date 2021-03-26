import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 25px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 8px;

    h3 {
      font-size: 18px;
      font-weight: 600;
      color: gray;
    }

    p {
      font-size: 14px;
      font-weight: 300;
      color: lightgray;
    }
  }
`;

export const ProgressBarContainer = styled.div`
  position: relative;
  height: 18px;
  background: #e9eaea;
`;

export const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  background: var(--skillbar-green);

  width: 50%;
`;
