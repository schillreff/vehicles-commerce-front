import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: block;
  justify-content: center;
  align-items: center;
  padding: 80px 8px;
  overflow: auto;
  background: rgba(0, 0, 0, 0.5);

  animation: fadeIn 0.5s;

  .container-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: zoomIn 0.5s;

    .container-modal__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 520px;
      padding: 16px;
      border-radius: 8px;
      gap: 24px;
      background-color: var(--color-white);

      .container-modal__content__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }

      .container-modal__content__close {
        display: flex;
        &:hover {
          background: var(--color-gray6);
          border-radius: 4px;
          cursor: pointer;
        }
      }
    }
  }
`;
