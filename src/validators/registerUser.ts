import * as yup from 'yup';

export const schema = yup.object().shape({
  fullName: yup.string().required('Nome é obrigatório'),
  email: yup
    .string()
    .email('Precisa ser um email válido')
    .required('Email obrigatório'),
  password: yup
    .string()
    .required('Senha é obrigatório')
    .min(8, 'A senha deve ter no mínimo 8 caracteres'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
    .required('Comfirmar senha é obrigatório'),
  cpf: yup
    .string()
    .min(14, 'CPF precisa ser no formato 000.000.000-00')
    .required('CPF é obrigatório'),
  phone: yup
    .string()
    .min(14, 'Telefone precisa ser no formato (00) 0000-0000')
    .required('Telefone é obrigatório'),
  dateOfBirth: yup.string().required('Data de nascimento é obrigatória'),
  description: yup.string().required('Descrição é obrigatória'),
  address: yup.object().shape({
    cep: yup
      .string()
      .min(9, 'Cep precisa ter o formato 00000-000')
      .required('CEP é obrigatório'),
    state: yup.string().required('Estado é obrigatório'),
    city: yup.string().required('Cidade é obrigatório'),
    road: yup.string().required('Rua é obrigatório'),
    number: yup.string().required('Número é obrigatório'),
    complement: yup.string().notRequired(),
  }),
  isSeller: yup.boolean(),
});
