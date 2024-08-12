import styled from 'styled-components';

export const StyledProductList = styled.ul`
  display: flex;
  overflow-x: scroll;
  align-items: center;
  gap: 12px;
  padding-bottom: 10px;

  animation: fadeInLeft 1s;

  @media (min-width: 768px) {
    gap: 48px;
  }
`;
