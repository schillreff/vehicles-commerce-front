import styled from 'styled-components';

export const StyledProductCard = styled.li`
  display: flex;
  flex-direction: column;
  min-height: 348px;
  min-width: 340px;  
  padding: 20px;
  gap: 20px;
  border-radius: 4px;
  background: var(--color-white);
  border: solid 1.5px var(--color-brand1);

  .productButtonsContainer {
    display: flex;
    gap: 25px;
  }

  .productContentContainer {
    display: flex;
    flex-direction: column;
    width: 300px;
    min-height: 348px;
    justify-content: space-between;
  }

  .productImageContainer {
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    background-color: var(--color-gray7);
    border: 1px solid transparent;
    transition: 0.5s;
    height: 152px;
    max-width: 100%;
    position: relative;

    img {
      width: 180px;
      transition: 0.5s;
    }

    .productIsActiveContainer {
      position: absolute;
      top: 11px;
      left: 16px;
      background: var(--color-brand1);
      padding: 0px 8px;
    }

    .productIsInactiveContainer {
      position: absolute;
      top: 11px;
      left: 16px;
      background: var(--color-gray4);
      padding: 0px 8px;
    }
  }

  :hover {
    cursor: pointer;

    .productImageContainer {
      border-color: var(--color-brand1);
      transition: 0.5s;

      img {
        transform: scale(1.2);
        transition: 0.5s;
      }
    }
  }

  .productTitleContainer {
    width: 33ch;

    .productTitle {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .productDescriptionContainer {
    width: 90%;
    height: 48px;
    .productDescription {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  .productUserImageContainer {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 8px;

    .productUserName {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }

  .productInfoContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .productVehicleInfo {
      display: flex;
      align-items: center;
      gap: 12px;

      .productInfo {
        padding: 4px 8px;
        background-color: var(--color-brand4);
        border-radius: 4px;
      }
    }
  }
`;
