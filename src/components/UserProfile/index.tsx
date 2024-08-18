import { useContext } from 'react';
import { AnnouncementContext } from '../../contexts/Announcement';
import { StyledText, StyledTitle } from '../../styles/Typography/typography';
import { splitName } from '../../utils/nameInitials';
import { Button } from '../Button';
import { UserImage } from '../UserImage';
import { IUserProfileProps } from './interfaces';
import { StyledUserProfile } from './styles';

export const UserProfile = ({ name, description, viewButton }: IUserProfileProps) => {
  const { modalAnnouncement, setModalAnnouncement } =
    useContext(AnnouncementContext);
  return (
    <StyledUserProfile>
      <div className='user-profile__content'>
        <UserImage name={name} size='104px' fontSize='45px' />
        <div className='user-profile__content__name'>
          <StyledTitle
            tag='h6'
            style='heading-6'
            weight='600'
            color='--color-gray1'
          >
            {splitName(name)}
          </StyledTitle>

          <StyledText
            className='user-profile__content__seller'
            tag='p'
            style='body-2'
            weight='500'
            color='--color-brand1'
          >
            {'Anunciante'}
          </StyledText>
        </div>

        <StyledText
          className='user-profile__content__description'
          tag='p'
          style='body-1'
          weight='400'
          color='--color-gray2'
        >
          {description}
        </StyledText>
        {viewButton && (
          <Button
            type='button'
            $size='big'
            $width='fit-content'
            $color='--color-brand1'
            $backgroundColor='--color-gray10'
            $borderColor='--color-brand1'
            $hoverColor='--color-gray10'
            $hoverBackgroundColor='--color-brand1'
            $hoverBorderColor='--color-brand1'
            onClick={() =>
              setModalAnnouncement({
                ...modalAnnouncement,
                createAnnouncement: true,
              })
            }
          >
            Cadastrar Anúncio
          </Button>
        )}
      </div>
    </StyledUserProfile>
  );
};