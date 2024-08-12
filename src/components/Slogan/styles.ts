import styled from 'styled-components';

export const StyledSlogan = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 581px;
  background: var(--color-brand2);

  .slogan-content {
    display: flex;
    max-width: 748px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 50px;
    margin: 12px;

    .slogan-content__buttons {
      display: flex;
      gap: 30px;
    }
  }

  @media (max-width: 768px) {
    .slogan-content__buttons {
      width: 100%;
      max-width: 300px;
      flex-direction: column;
    }
  }
`;
