import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from '..';
import { UserContext } from '../../../contexts/User';
import { IAddress } from '../../../contexts/User/interfaces';
import { schema } from '../../../validators/editAdress';
import { cepMask } from '../../../validators/masks';
import { Button } from '../../Button';
import { StyledForm } from '../../Form';
import { InputLabel } from '../../Form/InputLabel';
import { IEditAddressFormProps } from './interfaces';
import { StyledEditAddress } from './styles';

export const EditAddressForm = ({ address }: IEditAddressFormProps) => {
  const { modalUser, setModalUser, editAddress, userInputValues, inputChange } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddress>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  return (
    <Modal
      title='Editar Endereço'
      closeModal={setModalUser}
      modal={{ ...modalUser, editAddress: false }}
    >
      <StyledEditAddress>
        <StyledForm
          className='edit-address-form'
          onSubmit={handleSubmit(editAddress)}
        >
          <InputLabel
            label='CEP *'
            id='cep'
            placeholder='00000-000'
            type='text'
            {...register('cep')}
            value={cepMask(userInputValues.cep)}
            onChange={inputChange}
            error={errors.cep?.message}
          />

          <div className='edit-address__small-inputs'>
            <InputLabel
              label='Estado *'
              id='state'
              placeholder='Digitar Estado'
              defaultValue={address.state}
              type='text'
              {...register('state')}
              error={errors.state?.message}
            />

            <InputLabel
              label='Cidade *'
              id='city'
              placeholder='Digitar Cidade'
              defaultValue={address.city}
              type='text'
              {...register('city')}
              error={errors.city?.message}
            />
          </div>

          <InputLabel
            label='Rua *'
            id='road'
            placeholder='Digitar Rua'
            defaultValue={address.road}
            type='text'
            {...register('road')}
            error={errors.road?.message}
          />

          <div className='edit-address__small-inputs'>
            <InputLabel
              label='Número *'
              id='number'
              placeholder='Digitar número'
              defaultValue={address.number}
              type='text'
              {...register('number')}
              error={errors.number?.message}
            />

            <InputLabel
              label='Complemento'
              id='complement'
              placeholder='Ex: apart 307'
              defaultValue={address.complement}
              type='text'
              {...register('complement')}
              error={errors.complement?.message}
            />
          </div>

          <div className='edit-address-form__buttons'>
            <Button
              type='button'
              $size='big'
              $color='--color-gray0'
              $backgroundColor='--color-gray10'
              $borderColor='--color-gray4'
              $hoverColor='--color-white'
              $hoverBackgroundColor='--color-gray1'
              $hoverBorderColor='--color-gray1'
              onClick={() => setModalUser({ ...modalUser, editAddress: false })}
            >
              Cancelar
            </Button>

            <Button
              type='submit'
              $size='big'
              $backgroundColor='--color-brand1'
              $color='--color-white'
              $borderColor='--color-brand1'
              $hoverBackgroundColor='--color-brand4'
              $hoverColor='--color-brand1'
              $hoverBorderColor='--color-brand4'
            >
              Salvar
            </Button>
          </div>
        </StyledForm>
      </StyledEditAddress>
    </Modal>
  );
};
