import styled from 'styled-components';

export const StyledFooter = styled.footer`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 140px;
  padding: 45px 60px;
  background-color: var(--color-gray0);

  @media (max-width: 768px) {
    height: 260px;
    padding: 20px 10px;
  }

  .footer--content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1536px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 4px;
      background-color: var(--color-gray1);
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 40px;
    }
  }
`;
