import * as yup from 'yup';

export const schema = yup.object().shape({
  fullName: yup.string().required('Nome é obrigatório'),
  email: yup
    .string()
    .email('Precisa ser um email válido')
    .required('Email obrigatório'),
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
});
