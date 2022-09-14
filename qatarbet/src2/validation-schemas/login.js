import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Ingrese un E-mail valido')
    .required('E-mail es requerido'),
  password: yup
    .string()
    .max(500, 'Muy largo!')
    .required('Contraseña es requerido')
})