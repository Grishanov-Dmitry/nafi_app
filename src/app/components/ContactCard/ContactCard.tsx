import { type ChangeEvent, useState } from 'react'

import TextField from '@mui/material/TextField'
import CloseIcon from '@mui/icons-material/Close'
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  FormControlLabel,
  IconButton,
  TextareaAutosize,
  Typography
} from '@mui/material'

import styles from './styles.module.css'
import { type IContact } from '@/app/types'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks'
import { getActiveContact, getActiveContactId } from '@/app/redux/slices/selectors'
import { saveNewContacts, setActiveContactId } from '@/app/redux/slices/mainSlice'

interface IField {
  label: string
  name: keyof IContact
  type?: string
}

const fields: IField[] = [
  {
    label: 'ФИО',
    name: 'name'
  },
  {
    label: 'Организация',
    name: 'organization'
  },
  {
    label: 'Должность',
    name: 'position'
  },
  {
    label: 'Экспертиза',
    name: 'expertise'
  },
  {
    label: 'Телефон',
    name: 'phone'
  },
  {
    label: 'Телефон 2',
    name: 'phoneSecond'
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email'
  },
  {
    label: 'Email 2',
    name: 'emailSecond',
    type: 'email'
  }
]

const requiredFields = ['name', 'email', 'phone']

export const ContactCard = () => {
  const activeContact = useAppSelector(getActiveContact)
  const activeContactId = useAppSelector(getActiveContactId)
  const dispatch = useAppDispatch()

  if (activeContactId === null) {
    return null
  }

  const [formData, setFormData] = useState<IContact>(activeContact ?? {
    id: activeContactId,
    name: '',
    organization: '',
    position: '',
    expertise: '',
    phone: '',
    phoneSecond: '',
    email: '',
    emailSecond: '',
    source: '',
    comment: '',
    shareDisabled: false
  })

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      shareDisabled: event.target.checked
    }))
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const onSave = () => {
    const isRequiredFilled = requiredFields.every((field) => formData[field].length > 0)

    if (isRequiredFilled) {
      dispatch(saveNewContacts([formData]))
      dispatch(setActiveContactId(null))
    }
  }

  return (
    <Dialog maxWidth="md" fullWidth open={true} className="p-1">
      <DialogContent className="p-7 flex flex-col">
        <Typography variant="h4">Карточка эксперта</Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={() => {
            dispatch(setActiveContactId(null))
          }}
          aria-label="close"
          style={{ position: 'absolute', top: 20, right: 50 }}
        ><CloseIcon/></IconButton>
        <Box display='flex' flexWrap='wrap' marginBottom={6} >
          {fields.map(({ label, name, type = 'text' }) => (
            <TextField
              key={name}
              className={styles.textField}
              label={label}
              variant="outlined"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              margin="normal"
              type={type}
            />
          ))}
        </Box>

        <FormControlLabel
          control={
            <Checkbox
              onChange={handleCheckboxChange}
              name="hasReadRules"
              color="primary"
            />
          }
          label="Отметьте, если контакты эксперта были переданы Заказчиком и их нельзя использовать для других исследований"
        />

        <Typography variant="caption">
          Укажите дополнительную информацию об эксперте, проекты, в которых он
          давал интервью, историю общения и другую информацию, которую в будущем
          можно учитывать при рекруте
        </Typography>
        <TextareaAutosize
          minRows={10}
          placeholder="Комментарий"
          name="comment"
          value={formData.comment}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
          // @ts-ignore
          onChange={handleChange}
          style={{
            width: '100%',
            marginTop: '16px',
            padding: '8px',
            minHeight: '100px',
            border: '1px solid silver',
            borderRadius: '5px'
          }}
        />

        <DialogActions className="flex justify-between alain-center">
          {activeContact && <Button color="secondary">Delete</Button>}
          <Button color="primary" onClick={onSave} className="ml-auto">
            Save
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}
