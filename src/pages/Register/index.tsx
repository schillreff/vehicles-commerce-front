import { yupResolver } from '@hookform/resolvers/yup';
import { ChangeEvent, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { StyledForm, StyledOption, StyledSelect } from '../../components/Form';
import { InputLabel } from '../../components/Form/InputLabel';
import { TextareaLabel } from '../../components/Form/TextareaLabel';
import { UserContext } from '../../contexts/User';
import { ISignUp } from '../../contexts/User/interfaces';
import { StyledText, StyledTitle } from '../../styles/Typography/typography';
import { cepMask, cpfMask, phoneMask } from '../../validators/masks';
import { schema } from '../../validators/registerUser';
import { StyledRegister } from './styles';

export const Register = () => {
  const { signUp, userInputValues, inputChange } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const [selected, setSelected] = useState<string>('false');
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  };

  return (
    <StyledRegister>
      <StyledForm onSubmit={handleSubmit(signUp)}>
        <StyledTitle
          tag='h5'
          style='heading-5'
          weight='500'
          color='--color-gray0'
        >
          Cadastrar
        </StyledTitle>

        <InputLabel
          label='Nome *'
          id='fullName'
          placeholder='Ex: Leandro Santos'
          type='text'
          {...register('fullName')}
          error={errors.fullName?.message}
        />

        <InputLabel
          label='Email *'
          id='email'
          placeholder='Ex: email@mail.com'
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
          {...register('description')}
          error={errors.description?.message}
        />

        <StyledText tag='p' style='body-2' weight='500' color='--color-gray0'>
          Infomações de endereço
        </StyledText>

        <InputLabel
          label='CEP *'
          id='cep'
          placeholder='00000-000'
          type='text'
          {...register('address.cep')}
          value={cepMask(userInputValues.cep)}
          onChange={inputChange}
          error={errors.address?.cep?.message}
        />

        <div className='register__small-inputs'>
          <InputLabel
            label='Estado *'
            id='state'
            placeholder='Digitar Estado'
            type='text'
            {...register('address.state')}
            error={errors.address?.state?.message}
          />

          <InputLabel
            label='Cidade *'
            id='city'
            placeholder='Digitar Cidade'
            type='text'
            {...register('address.city')}
            error={errors.address?.city?.message}
          />
        </div>

        <InputLabel
          label='Rua *'
          id='road'
          placeholder='Digitar Rua'
          type='text'
          {...register('address.road')}
          error={errors.address?.road?.message}
        />

        <div className='register__small-inputs'>
          <InputLabel
            label='Número *'
            id='number'
            placeholder='Digitar número'
            type='text'
            {...register('address.number')}
            error={errors.address?.number?.message}
          />

          <InputLabel
            label='Complemento'
            id='complement'
            placeholder='Ex: apart 307'
            type='text'
            {...register('address.complement')}
            error={errors.address?.complement?.message}
          />
        </div>

        <StyledText tag='p' style='body-2' weight='500' color='--color-gray0'>
          Tipo de conta
        </StyledText>

        <StyledSelect
          id='isSeller'
          multiple
          {...register('isSeller')}
          value={[selected]}
          onChange={handleChange}
        >
          <StyledOption value='false'>Comprador</StyledOption>
          <StyledOption value='true'>Anunciante</StyledOption>
        </StyledSelect>

        <InputLabel
          label='Senha *'
          id='password'
          placeholder='Digitar senha'
          type='password'
          {...register('password')}
          error={errors.password?.message}
        />

        <InputLabel
          label='Confirmar Senha *'
          id='confirmPassword'
          placeholder='Digitar senha'
          type='password'
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
        />

        <Button
          type='submit'
          size='big'
          width='100%'
          backgroundColor='--color-brand1'
          color='--color-white'
          borderColor='--color-brand1'
          hoverBackgroundColor='--color-brand4'
          hoverColor='--color-brand1'
          hoverBorderColor='--color-brand4'
        >
          Finalizar Cadastro
        </Button>
      </StyledForm>
    </StyledRegister>
  );
};
