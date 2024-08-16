import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { StyledForm } from '../../components/Form';
import { InputLabel } from '../../components/Form/InputLabel';
import { UserContext } from '../../contexts/User';
import { IRecoverPassword } from '../../contexts/User/interfaces';
import { StyledTitle } from '../../styles/Typography/typography';
import { schema } from '../../validators/recoverPassword';
import { StyledRecoverPassword } from './styles';

export const RecoverPassword = () => {
  const { recoverPassword, searchParams } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRecoverPassword>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  return (
    <StyledRecoverPassword>
      <StyledForm
        onSubmit={handleSubmit((data) =>
          recoverPassword(data, searchParams.get('token')),
        )}
      >
        <StyledTitle
          tag='h5'
          style='heading-5'
          weight='500'
          color='--color-gray0'
        >
          Alterar Senha
        </StyledTitle>

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
          Alterar
        </Button>
      </StyledForm>
    </StyledRecoverPassword>
  );
};
