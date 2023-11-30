import Button from '@mui/material/Button'
import { Stack } from '@mui/material'
import uniqid from 'uniqid'

import './AddContactBlock.css'
import { setActiveContactId } from '@/app/redux/slices/mainSlice'
import { useAppDispatch } from '@/app/redux/hooks'

export const AddContactBlock = () => {
  const dispatch = useAppDispatch()

  return (
    <div className="addContactBlock">
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => dispatch(setActiveContactId(uniqid()))}>Добавить Контакт</Button>
        <Button variant="contained">Импортировать Контакты</Button>
      </Stack>
    </div>
  )
}
