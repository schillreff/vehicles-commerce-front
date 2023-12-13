import * as yup from 'yup';

export const schema = yup.object().shape({
  cep: yup
    .string()
    .min(9, 'Cep precisa ter o formato 00000-000')
    .required('CEP é obrigatório'),
  state: yup.string().required('Estado é obrigatório'),
  city: yup.string().required('Cidade é obrigatório'),
  road: yup.string().required('Rua é obrigatório'),
  number: yup.string().required('Número é obrigatório'),
  complement: yup.string().notRequired(),
});
