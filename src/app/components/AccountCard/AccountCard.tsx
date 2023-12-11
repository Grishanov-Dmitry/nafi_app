import { type ChangeEvent, useState } from 'react'

import TextField from '@mui/material/TextField'
import CloseIcon from '@mui/icons-material/Close'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@mui/material'
import uniqid from 'uniqid'

import { type IAccount } from '@/app/types'
import { useAppDispatch } from '@/app/redux/hooks'
import { accountRoles, accountStatuses } from '@/app/constants'
import { PasswordField } from '../PasswordField/PasswordField'
import { useSnackbar } from '@/app/layout'

type IFormData = Omit<IAccount, 'id'> & {
  passwordSecond: string
}

interface IAccountCard {
  activeAccount: IAccount | null
  isShow: boolean
  toggleAccountCardShow: () => void
}

const initAccount = {
  id: uniqid(),
  fullName: '',
  email: '',
  password: '',
  role: accountRoles.user,
  status: accountStatuses.active
}

export const AccountCard = ({ activeAccount, isShow, toggleAccountCardShow }: IAccountCard) => {
  const dispatch = useAppDispatch()

  const [formData, setFormData] = useState<IFormData>({
    ...activeAccount ?? initAccount,
    passwordSecond: activeAccount?.password ?? ''
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event)

    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const { handleOpenSnackbar } = useSnackbar()

  const onSave = () => {
    if (formData.password !== formData.passwordSecond) {
      handleOpenSnackbar('Пароли не совпадают')
      return
    }

    const isRequiredFilled = Object.keys(formData).every((key) => {
      if (key === 'id') {
        return true
      }
      return formData[key].length > 0
    })

    if (!isRequiredFilled) {
      handleOpenSnackbar('Пожалуйста, заполните все поля')
    } else {
      console.log('Save a new account')
      toggleAccountCardShow()
    }
  }

  const deleteAccount = () => {
    console.log('Delete')
    toggleAccountCardShow()
  }

  return (
    <Dialog maxWidth="md" fullWidth open={isShow} className="p-1">
      <DialogContent className="p-7 flex flex-col">
        <Typography variant="h4">Учетная запись</Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={() => {
            toggleAccountCardShow()
          }}
          aria-label="close"
          style={{ position: 'absolute', top: 20, right: 50 }}
        ><CloseIcon/></IconButton>
        <Box display='flex' flexWrap='wrap' marginBottom={10} >
          <TextField
            className='w-80 mx-8 mb-4'
            label="ФИО"
            variant="outlined"
            name='fullName'
            value={formData.fullName}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            className='w-80 mx-8 mb-4'
            label="Email"
            variant="outlined"
            name='email'
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />
          <PasswordField
            className='w-80 mx-8 mb-8'
            label="Пароль"
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
          <PasswordField
            className='w-80 mx-8 mb-8'
            label="Повтор пароля"
            name='passwordSecond'
            value={formData.passwordSecond}
            onChange={handleChange}
          />

          <FormControl>
            <InputLabel id="demo-simple-select-label">Роль</InputLabel>
            <Select
              className='w-80 mx-8 mb-6'
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.role}
              label="Роль"
              name='role'
              onChange={handleChange}
            >
              <MenuItem value={accountRoles.user}>Пользователь</MenuItem>
              <MenuItem value={accountRoles.admin}>Администратор</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="demo-simple-select-label-2">Статус</InputLabel>
            <Select
              className='w-80 mx-8 mb-6'
              labelId="demo-simple-select-label-2"
              id="demo-simple-select"
              value={formData.status}
              label="Статус"
              name='status'
              onChange={handleChange}
            >
              <MenuItem value={accountStatuses.active}>Активный</MenuItem>
              <MenuItem value={accountStatuses.blocked}>Заблокирован</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <DialogActions className="flex justify-between alain-center">
          {activeAccount !== null && <Button color="secondary" onClick={deleteAccount}>Delete</Button>}
          <Button color="primary" onClick={onSave} className="ml-auto">
            Save
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}
