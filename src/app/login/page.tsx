'use client'

import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@mui/material'
import { useRouter } from 'next/navigation'
import { type ChangeEvent, type FormEvent, useState, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/redux/hooks'
import { changeLogIn } from '@/app/redux/slices/mainSlice'

import './LoginPage.css'
import { getIsLogged } from '../redux/slices/selectors'

const tempUserCreds = {
  login: 'user',
  password: 'asdq124asrqw'
}

export default function Login () {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const isLogged = useAppSelector(getIsLogged)

  useEffect(() => {
    if (isLogged) {
      router.push('/contacts')
    }
  }, [isLogged])

  const [creds, setCreds] = useState({
    login: '',
    password: ''
  })

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = target.value
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const ariaLabel = target.getAttribute('aria-label') ?? ''

    setCreds({
      ...creds,
      [ariaLabel]: value
    })
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (
      creds.login === tempUserCreds.login &&
      creds.password === tempUserCreds.password
    ) {
      dispatch(changeLogIn(true))
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          paddingTop: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography component="h1" variant="h5">
          Введите логин и пароль
        </Typography>
        <Box component="form" sx={{ mt: 1 }} onSubmit={onSubmit}>
          <TextField
            value={creds.login}
            margin="normal"
            fullWidth
            label="Username"
            inputProps={{ 'aria-label': 'login' }}
            onChange={onChange}
          />
          <TextField
            value={creds.password}
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            inputProps={{ 'aria-label': 'password' }}
            onChange={onChange}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
