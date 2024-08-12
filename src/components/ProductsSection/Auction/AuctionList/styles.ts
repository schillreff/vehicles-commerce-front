import styled from 'styled-components';

export const StyledAuctionList = styled.ul`
  display: flex;
  overflow-x: scroll;
  align-items: center;
  gap: 24px;
  padding-bottom: 8px;

  animation: fadeInLeft 1s;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;
