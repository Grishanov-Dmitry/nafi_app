import React, { useState } from 'react'
import TextField, { type BaseTextFieldProps } from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

interface IPasswordField {
  label: string
  onChange: () => void
}

type IPasswordFieldProps = BaseTextFieldProps & IPasswordField

export const PasswordField = ({ label, onChange, ...props }: IPasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <TextField
      type={showPassword ? 'text' : 'password'}
      label={label}
      onChange={onChange}
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword} edge="end">
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        )
      }}
      {...props}
    />
  )
}
