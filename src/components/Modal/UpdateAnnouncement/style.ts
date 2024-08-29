import styled from 'styled-components';

export const StyledUpdateAnnouncement = styled.div`
  display: flex;
  width: 100%;

  .update-announcement-form {
    min-width: 100%;
    margin-top: 20px;
    padding: 0;

    .update-annoucement-form__small-inputs {
      display: flex;
      gap: 8px;
    }
    .update-annoucement-form__buttons {
      display: flex;
      align-self: flex-end;
      gap: 16px;
    }
  }
`;
