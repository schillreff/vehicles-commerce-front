import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from '..';
import { UserContext } from '../../../contexts/User';
import { ISendEmailRecover } from '../../../contexts/User/interfaces';
import { schema } from '../../../validators/sendEmailRecover';
import { Button } from '../../Button';
import { StyledForm } from '../../Form';
import { InputLabel } from '../../Form/InputLabel';
import { StyledSendEmailRecover } from './styles';

export const SendEmailRecoverPasswordForm = () => {
  const { modalUser, setModalUser, sendEmailRecover } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISendEmailRecover>({
    resolver: yupResolver(schema),
  });

  return (
    <Modal
      title='Enviar email recuperação'
      closeModal={setModalUser}
      modal={{ ...modalUser, recoverPassword: false }}
    >
      <StyledSendEmailRecover>
        <StyledForm
          className='send-email-form'
          onSubmit={handleSubmit(sendEmailRecover)}
        >
          <InputLabel
            label='Email'
            id='email'
            placeholder='Ex: email@mail.com'
            type='email'
            {...register('email')}
            error={errors.email?.message}
          />

          <div className='send-email-form__buttons'>
            <Button
              type='button'
              $size='big'
              $width='100%'
              $color='--color-gray0'
              $backgroundColor='--color-gray10'
              $borderColor='--color-gray4'
              $hoverColor='--color-white'
              $hoverBackgroundColor='--color-gray1'
              $hoverBorderColor='--color-gray1'
              onClick={() =>
                setModalUser({ ...modalUser, recoverPassword: false })
              }
            >
              Cancelar
            </Button>

            <Button
              type='submit'
              $size='big'
              $width='100%'
              $backgroundColor='--color-brand1'
              $color='--color-white'
              $borderColor='--color-brand1'
              $hoverBackgroundColor='--color-brand4'
              $hoverColor='--color-brand1'
              $hoverBorderColor='--color-brand4'
            >
              Enviar
            </Button>
          </div>
        </StyledForm>
      </StyledSendEmailRecover>
    </Modal>
  );
};