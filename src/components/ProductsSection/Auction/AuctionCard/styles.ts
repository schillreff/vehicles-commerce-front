import styled from 'styled-components';

interface IAuctionCardProps {
  $imageUrl: string;
}

export const StyledAuctionCard = styled.li<IAuctionCardProps>`
  display: flex;
  flex-direction: column;
  min-width: 735px;

  .auction-content {
    display: flex;
    flex-direction: column;
    max-width: 735px;
    padding: 24px 36px;
    border-radius: 4px 4px 0px 0px;
    gap: 1rem;
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.29) 0%,
        #000000 100%
      ),
      url(${(props) => props.$imageUrl});
    background-size: 100% auto;
    background-position: center;
    background-repeat: no-repeat;
    .auction-content__time {
      display: flex;
      max-width: fit-content;
      align-items: center;
      border-radius: 32px;
      padding: 8px 8px;
      gap: 14px;
      margin-bottom: 50px;
      background: var(--color-whiteFixed);
    }

    .auction-content__title {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .auction-content__description {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .auction-content__author {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .auction-content__info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      .auction-content__info__year-mileage {
        display: flex;
        gap: 12px;

        .auction-content__info__year,
        .auction-content__info__mileage {
          display: flex;
          padding: 4px 8px;
          border-radius: 4px;
          background: var(--color-brand4);
        }
      }
    }

    @media (max-width: 768px) {
      padding: 33px 22px;
      height: 470px;

      .auction-content__info {
        flex-direction: column;
        align-items: start;
      }

      .auction-content__time {
        margin-bottom: 25px;
      }

      .auction-content__description {
        -webkit-line-clamp: 3;
        line-clamp: 3;
      }
    }
  }

  .auction-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 61px;
    border-radius: 0px 0px 4px 4px;
    background: var(--color-brand1);
    padding: 0px 36px;

    @media (max-width: 755px) {
      padding: 0px 22px;
    }

    .auction-nav__buttons {
      display: flex;
      width: 100%;
      justify-content: center;
      gap: 25px;
    }

    .auction-nav__product {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }
  }

  &:hover {
    .auction-content {
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.71) 0%,
          #000000 100%
        ),
        url(${(props) => props.$imageUrl});
    }

    .auction-nav {
      .auction-nav__product {
        animation: fadeInLeft 0.8s;
      }
      background: var(--color-brand2);
    }
  }

  @media (max-width: 768px) {
    min-width: 300px;
  }
`;
