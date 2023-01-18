import TextField from '@mui/material/TextField'
import React, { HTMLInputTypeAttribute } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface IInputTextProps {
  name: string
  label: string
  autoComplete?: string
  autoFocus?: boolean
  fullWidth?: boolean
  errorMessage?: string
  type?: HTMLInputTypeAttribute
}

const InputText = ({
  name,
  label,
  autoComplete,
  autoFocus = false,
  fullWidth = false,
  errorMessage,
  type = 'text',
}: IInputTextProps) => {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <TextField
          {...field}
          margin="normal"
          required
          fullWidth={fullWidth}
          id={name}
          label={label}
          name={name}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          error={!!errorMessage}
          helperText={errorMessage}
          type={type}
        />
      )}
    />
  )
}

export default InputText
