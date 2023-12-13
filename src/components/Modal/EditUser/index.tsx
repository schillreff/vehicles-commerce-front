import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from '..';
import { UserContext } from '../../../contexts/User';
import { IEditUser } from '../../../contexts/User/interfaces';
import { schema } from '../../../validators/editUser';
import { cpfMask, phoneMask } from '../../../validators/masks';
import { Button } from '../../Button';
import { StyledForm } from '../../Form';
import { InputLabel } from '../../Form/InputLabel';
import { TextareaLabel } from '../../Form/TextareaLabel';
import { IEditUserFormProps } from './interfaces';
import { StyledEditUser } from './styles';

export const EditUserForm = ({ user }: IEditUserFormProps) => {
  const { modalUser, setModalUser, editUser, userInputValues, inputChange } =
    useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditUser>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  return (
    <Modal
      title='Editar Usuário'
      closeModal={setModalUser}
      modal={{ ...modalUser, editUser: false }}
    >
      <StyledEditUser>
        <StyledForm
          className='edit-user-form'
          onSubmit={handleSubmit(editUser)}
        >
          <InputLabel
            label='Nome *'
            id='fullName'
            placeholder='Ex: Leandro Santos'
            defaultValue={user.fullName}
            type='text'
            {...register('fullName')}
            error={errors.fullName?.message}
          />

          <InputLabel
            label='Email *'
            id='email'
            placeholder='Ex: email@mail.com'
            defaultValue={user.email}
            type='email'
            {...register('email')}
            error={errors.email?.message}
          />

          <InputLabel
            label='CPF *'
            id='cpf'
            placeholder='000.000.000-00'
            type='text'
            {...register('cpf')}
            value={cpfMask(userInputValues.cpf)}
            onChange={inputChange}
            error={errors.cpf?.message}
          />

          <InputLabel
            label='Telefone *'
            id='phone'
            placeholder='(00) 00000-0000'
            type='text'
            {...register('phone')}
            value={phoneMask(userInputValues.phone)}
            onChange={inputChange}
            error={errors.phone?.message}
          />

          <InputLabel
            label='Data de nascimento *'
            id='dateOfBirth'
            placeholder='2000-02-10'
            defaultValue={new Date(user.dateOfBirth).toLocaleDateString(
              'fr-ca',
            )}
            type='date'
            min='1900-01-01'
            max={new Date().toLocaleDateString('fr-ca')}
            {...register('dateOfBirth')}
            error={errors.dateOfBirth?.message}
          />

          <TextareaLabel
            label='Descrição *'
            id='description'
            placeholder='Digitar descrição'
            defaultValue={user.description}
            {...register('description')}
            error={errors.description?.message}
          />

          <div className='edit-user-form__buttons'>
            <Button
              type='button'
              size='big'
              color='--color-gray0'
              backgroundColor='--color-gray10'
              borderColor='--color-gray4'
              hoverColor='--color-white'
              hoverBackgroundColor='--color-gray1'
              hoverBorderColor='--color-gray1'
              onClick={() =>
                setModalUser({
                  ...modalUser,
                  editUser: false,
                  deleteUser: true,
                })
              }
            >
              Excluir
            </Button>

            <Button
              type='submit'
              size='big'
              backgroundColor='--color-brand1'
              color='--color-white'
              borderColor='--color-brand1'
              hoverBackgroundColor='--color-brand4'
              hoverColor='--color-brand1'
              hoverBorderColor='--color-brand4'
            >
              Salvar
            </Button>
          </div>
        </StyledForm>
      </StyledEditUser>
    </Modal>
  );
};
