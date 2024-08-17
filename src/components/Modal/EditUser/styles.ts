import styled from 'styled-components';

export const StyledEditUser = styled.div`
  display: flex;
  width: 100%;

  .edit-user-form {
    min-width: 100%;
    margin-top: 20px;
    padding: 0;

    .edit-user__small-inputs {
      display: flex;
      gap: 8px;
    }
    .edit-user-form__buttons {
      display: flex;
      align-self: flex-end;
      gap: 16px;
    }
  }
`;
