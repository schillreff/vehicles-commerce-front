import styled from 'styled-components';

export const StyledUserProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 277px;
  background: var(--color-brand1);
  padding: 0 16px;

  animation: fadeIn 0.5s;

  .user-profile__content {
    position: relative;
    top: 135px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1240px;
    padding: 44px 49px;
    min-height: 327px;
    border-radius: 4px;
    gap: 24px;
    background: var(--color-gray10);

    @media (max-width: 768px) {
      padding: 40px 29px;
    }

    .user-profile__content__name {
      display: flex;
      align-items: center;
      gap: 9px;
      .user-profile__content__seller {
        padding: 4px 8px;
        background: var(--color-brand4);
        border-radius: 4px;
      }
    }

    .user-profile__content__description {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`;
