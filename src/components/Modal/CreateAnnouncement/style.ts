import styled from 'styled-components';

export const StyledCreateAnnouncement = styled.div`
  display: flex;
  width: 100%;

  .create-announcement-form {
    min-width: 100%;
    margin-top: 20px;
    padding: 0;

    .create-annoucement-form__small-inputs {
      display: flex;
      gap: 8px;
    }
    .create-annoucement-form__buttons {
      display: flex;
      align-self: flex-end;
      gap: 16px;
    }
  }
`;
