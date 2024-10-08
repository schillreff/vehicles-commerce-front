import { useContext } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FiClock } from 'react-icons/fi';
import { AnnouncementContext } from '../../../../contexts/Announcement';
import { UserContext } from '../../../../contexts/User';
import {
  StyledText,
  StyledTitle,
} from '../../../../styles/Typography/typography';
import { dateFormatter } from '../../../../utils/dateFormatter';
import { splitName } from '../../../../utils/nameInitials';
import { Button } from '../../../Button';
import { UserImage } from '../../../UserImage';
import { IAuctionCardProps } from './interfaces';
import { StyledAuctionCard } from './styles';

export const AuctionCard = ({ auction, viewButtons }: IAuctionCardProps) => {
  const { setAnnouncement, modalAnnouncement, setModalAnnouncement } =
    useContext(AnnouncementContext);

  const { navigateTo } = useContext(UserContext);

  return (
    <StyledAuctionCard $imageUrl={auction.coverImage}>
      <div className='auction-content'>
        <div className='auction-content__time'>
          <FiClock color='var(--color-brand1)' size={20} />
          <StyledText
            tag='p'
            style='body-1'
            weight='500'
            color='--color-gray10'
          >
            {dateFormatter(auction.updatedAt)}
          </StyledText>
        </div>

        <StyledTitle
          className='auction-content__title'
          tag='h6'
          style='heading-6'
          weight='600'
          color='--color-gray10'
        >
          {auction.title}
        </StyledTitle>

        <StyledText
          className='auction-content__description'
          tag='p'
          style='body-1'
          weight='400'
          color='--color-gray5'
        >
          {auction.description}
        </StyledText>

        <div className='auction-content__author'>
          <div className='auction-content__author__icon'>
            <UserImage name={auction.User.fullName} size='32px' />
          </div>
          <StyledText tag='p' style='body-2' weight='500' color='--color-white'>
            {splitName(auction.User.fullName)}
          </StyledText>
        </div>

        <div className='auction-content__info'>
          <div className='auction-content__info__year-mileage'>
            <StyledText
              className='auction-content__info__year'
              tag='p'
              style='body-2'
              weight='500'
              color='--color-brand1'
            >
              {auction.year}
            </StyledText>
            <StyledText
              className='auction-content__info__mileage'
              tag='p'
              style='body-2'
              weight='500'
              color='--color-brand1'
            >
              {auction.mileage} KM
            </StyledText>
          </div>
          <StyledTitle
            className='auction-content__price'
            tag='h6'
            style='heading-7'
            weight='500'
            color='--color-white'
          >
            {`R$ ${auction.price}`}
          </StyledTitle>
        </div>
      </div>

      <div className='auction-nav'>
        {viewButtons ? (
          <div className='auction-nav__buttons'>
            <Button
              type='button'
              $size='big'
              $width='fit-content'
              $backgroundColor='--color-brand1'
              $color='--color-gray10'
              $borderColor='--color-gray10'
              $hoverBackgroundColor='--color-brand3'
              $hoverColor='--color-gray10'
              $hoverBorderColor='--color-gray10'
              onClick={() => {
                setAnnouncement(auction);
                setModalAnnouncement({
                  ...modalAnnouncement,
                  updateAnnouncement: true,
                });
              }}
            >
              Editar
            </Button>

            <Button
              type='button'
              $size='big'
              $width='fit-content'
              $backgroundColor='--color-brand1'
              $color='--color-gray10'
              $borderColor='--color-gray10'
              $hoverBackgroundColor='--color-brand3'
              $hoverColor='--color-gray10'
              $hoverBorderColor='--color-gray10'
              onClick={() => {
                setAnnouncement(auction);
                navigateTo(`/product?announcement=${auction.id}`);
              }}
            >
              Ver como
            </Button>
          </div>
        ) : (
          <div
            className='auction-nav__product'
            onClick={() => {
              navigateTo(`/product?announcement=${auction.id}`);
            }}
          >
            <StyledText
              tag='p'
              style='body-1'
              weight='600'
              color='--color-white'
            >
              Acessar página do leilão
            </StyledText>
            <BsArrowRight color='var(--color-white)' size={24} />
          </div>
        )}
      </div>
    </StyledAuctionCard>
  );
};
