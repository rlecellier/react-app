import * as yup from 'yup'

const validationSchema = {
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
}

export default yup.object(validationSchema).required()
