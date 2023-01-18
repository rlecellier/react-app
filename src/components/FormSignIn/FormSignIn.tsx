import { yupResolver } from '@hookform/resolvers/yup'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router'

import InputText from 'ui-kit/InputText'

import { IFormSignInValues } from './types'
import validationSchema from './validationSchema'

const FormSignIn = () => {
  const navigate = useNavigate()
  const form = useForm<IFormSignInValues>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const {
    handleSubmit,
    formState: { errors },
  } = form

  const onSubmit = (values: IFormSignInValues) => {
    // eslint-disable-next-line no-console
    console.log('submited values:', values)
    navigate('/home')
  }

  return (
    <FormProvider {...form}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{ mt: 1 }}
      >
        <InputText
          fullWidth
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          errorMessage={errors.email?.message}
        />
        <InputText
          fullWidth
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          errorMessage={errors.password?.message}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </FormProvider>
  )
}

export default FormSignIn
