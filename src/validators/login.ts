import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup
    .string()
    .email('Precisa ser um email válido')
    .required('Email obrigatório'),
  password: yup.string().required('Senha obrigatório'),
});
