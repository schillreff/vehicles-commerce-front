import styled from 'styled-components';

export const StyledDeleteAnnouncement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  p {
    text-align: justify;
  }

  .delete-announcement-form__buttons {
    display: flex;
    align-self: flex-end;
    gap: 16px;
  }
`;
