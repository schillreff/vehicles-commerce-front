import styled from 'styled-components';

export const StyledSeller = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 60px;

  .container-page {
    margin-top: 250px;
    gap: 60px;
  }

  @media (max-width: 768px) {
    padding: 0 0 0 10px;
  }

  .loading {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
