import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { StyledForm } from '../../components/Form';
import { InputLabel } from '../../components/Form/InputLabel';
import { SendEmailRecoverPasswordForm } from '../../components/Modal/SendEmailRecover';
import { UserContext } from '../../contexts/User';
import { ISignIn } from '../../contexts/User/interfaces';
import {
  StyledHiperLink,
  StyledText,
  StyledTitle,
} from '../../styles/Typography/typography';
import { schema } from '../../validators/login';
import { StyledLogin } from './styles';

export const Login = () => {
  const { signIn, modalUser, setModalUser, navigateTo } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  return (
    <>
      {modalUser.recoverPassword && <SendEmailRecoverPasswordForm />}
      <StyledLogin>
        <StyledForm onSubmit={handleSubmit(signIn)}>
          <StyledTitle
            tag='h5'
            style='heading-5'
            weight='500'
            color='--color-gray0'
          >
            Login
          </StyledTitle>

          <InputLabel
            label='Email *'
            id='email'
            placeholder='Digitar email'
            type='email'
            {...register('email')}
            error={errors.email?.message}
          />

          <InputLabel
            label='Senha *'
            id='password'
            placeholder='Digitar senha'
            type='password'
            {...register('password')}
            error={errors.password?.message}
          />

          <div className='form-login__recover-password'>
            <StyledHiperLink
              className='form-login__recover-password__link'
              tag='a'
              style='body-2'
              weight='500'
              color='--color-grey2'
              onClick={() =>
                setModalUser({ ...modalUser, recoverPassword: true })
              }
            >
              Esqueci minha senha
            </StyledHiperLink>
          </div>

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
            Entrar
          </Button>

          <div className='form-login__account'>
            <StyledText
              tag='p'
              style='body-2'
              weight='400'
              color='--color-grey2'
            >
              Ainda não possui conta?
            </StyledText>
          </div>

          <Button
            type='button'
            size='big'
            width='100%'
            color='--color-gray0'
            backgroundColor='--color-gray10'
            borderColor='--color-gray4'
            hoverColor='--color-white'
            hoverBackgroundColor='--color-gray1'
            hoverBorderColor='--color-gray1'
            onClick={() => navigateTo('/register')}
          >
            Cadastrar
          </Button>
        </StyledForm>
      </StyledLogin>
    </>
  );
};
