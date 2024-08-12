import styled from 'styled-components';

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 60px;

  .container-page {
    gap: 60px;
  }

  @media (max-width: 768px) {
    padding: 0 0 0 10px;
  }
`;
