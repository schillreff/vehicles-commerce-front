import styled from 'styled-components';

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  height: 100%;
  margin: 100px 0;

  animation: fadeIn 0.8s;


  .form-login__recover-password {
    position: relative;
    bottom: 10px;
    display: flex;
    justify-content: flex-end;
    .form-login__recover-password__link {
      padding: 0px 8px;
      border-radius: 4px;
      &:hover {
        background: var(--color-brand4);
      }
    }
  }

  .form-login__account {
    text-align: center;
  }
`;
