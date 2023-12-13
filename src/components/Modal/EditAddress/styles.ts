import styled from 'styled-components';

export const StyledEditAddress = styled.div`
  display: flex;
  width: 100%;

  .edit-address-form {
    min-width: 100%;
    margin-top: 20px;
    padding: 0;

    .edit-address__small-inputs {
      display: flex;
      gap: 8px;
    }
    .edit-address-form__buttons {
      display: flex;
      align-self: flex-end;
      gap: 16px;
    }
  }
`;
