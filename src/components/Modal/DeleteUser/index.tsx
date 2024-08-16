import { useContext } from 'react';
import { Modal } from '..';
import { UserContext } from '../../../contexts/User';
import { StyledText, StyledTitle } from '../../../styles/Typography/typography';
import { Button } from '../../Button';
import { StyledDeleteUser } from './styles';

export const DeleteUserForm = () => {
  const { modalUser, setModalUser, deleteUser } = useContext(UserContext);

  return (
    <Modal
      title='Excluir Conta'
      closeModal={setModalUser}
      modal={{ ...modalUser, deleteUser: false }}
    >
      <StyledDeleteUser>
        <StyledTitle
          tag='h6'
          style='heading-7'
          weight='500'
          color='--color-gray0'
        >
          Tem certeza que deseja remover sua conta?
        </StyledTitle>

        <StyledText tag='p' weight='400' style='body-1' color='--color-gray2'>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          conta e removerá seus dados de nossos servidores.
        </StyledText>

        <div className='delete-user-form__buttons'>
          <Button
            type='button'
            size='big'
            color='--color-gray0'
            backgroundColor='--color-gray10'
            borderColor='--color-gray4'
            hoverColor='--color-white'
            hoverBackgroundColor='--color-gray1'
            hoverBorderColor='--color-gray1'
            onClick={() => setModalUser({ ...modalUser, deleteUser: false })}
          >
            Cancelar
          </Button>

          <Button
            type='submit'
            size='big'
            backgroundColor='--color-alert3'
            color='--color-alert1'
            borderColor='--color-alert3'
            hoverBackgroundColor='--color-alert1'
            hoverColor='--color-gray10'
            hoverBorderColor='--color-alert1'
            onClick={() => deleteUser()}
          >
            Excluir
          </Button>
        </div>
      </StyledDeleteUser>
    </Modal>
  );
};
