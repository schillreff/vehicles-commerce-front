import { useContext } from 'react';
import { Modal } from '..';
import { AnnouncementContext } from '../../../contexts/Announcement';
import { StyledText, StyledTitle } from '../../../styles/Typography/typography';
import { Button } from '../../Button';
import { StyledDeleteAnnouncement } from './style';

export const DeleteAnnoucementForm = () => {
  const {
    modalAnnouncement,
    setModalAnnouncement,
    announcementIdToDelete,
    deleteAnnouncement,
  } = useContext(AnnouncementContext);

  return (
    <Modal
      title='Exluir anúncio'
      closeModal={setModalAnnouncement}
      modal={{ ...modalAnnouncement, deleteAnnouncement: false }}
    >
      <StyledDeleteAnnouncement>
        <StyledTitle
          tag='h6'
          style='heading-7'
          weight='500'
          color='--color-gray0'
        >
          Tem certeza que deseja remover esse anúncio?
        </StyledTitle>

        <StyledText tag='p' weight='400' style='body-1' color='--color-gray2'>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          conta e removerá seus dados de nossos servidores.
        </StyledText>

        <div className='delete-announcement-form__buttons'>
          <Button
            type='button'
            $size='big'
            $color='--color-gray0'
            $backgroundColor='--color-gray10'
            $borderColor='--color-gray4'
            $hoverColor='--color-white'
            $hoverBackgroundColor='--color-gray1'
            $hoverBorderColor='--color-gray1'
            onClick={() =>
              setModalAnnouncement({
                ...modalAnnouncement,
                deleteAnnouncement: false,
              })
            }
          >
            Cancelar
          </Button>

          <Button
            type='submit'
            $size='big'
            $backgroundColor='--color-alert3'
            $color='--color-alert1'
            $borderColor='--color-alert3'
            $hoverBackgroundColor='--color-alert1'
            $hoverColor='--color-gray10'
            $hoverBorderColor='--color-alert1'
            onClick={() => deleteAnnouncement(announcementIdToDelete)}
          >
            Sim, excluir anúncio
          </Button>
        </div>
      </StyledDeleteAnnouncement>
    </Modal>
  );
};
