import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 14rem;

  color: white;
  font-size: 1.1rem;
`;

export const IconContainer = styled.div`
  height: 35px;
  width: 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--icon-background);
  border-radius: 50%;

  cursor: pointer;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
