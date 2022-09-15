import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Ingrese un E-mail valido')
    .required('E-mail es requerido'),
  pass: yup
    .string()
    .min(8, '8 Carateres Minimo')
    .max(50, 'Muy largo!')
    .required('Contraseña es requerido')
})
