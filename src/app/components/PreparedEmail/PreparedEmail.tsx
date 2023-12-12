import { Box, Button, Dialog, DialogActions, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { durations, formatTypes, type IFormData } from '../EmailPrepareDialog/EmailPrepareDialog'
import { useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks'
import { getActiveContact } from '@/app/redux/slices/selectors'
import { setIsOpenEmailCreate } from '@/app/redux/slices/mainSlice'

interface IPreparedEmail {
  formData: IFormData
}

export const PreparedEmail = ({ formData }: IPreparedEmail) => {
  const divRef = useRef()
  const activeContact = useAppSelector(getActiveContact)
  const dispatch = useAppDispatch()

  const createMailtoLink = (innerText: string) => {
    const emailAddress = `${activeContact?.email}, ${activeContact?.emailSecond}`
    const subject = formData.topic
    const emailBody = innerText

    // Encode the email body and subject for the mailto URL
    const encodedBody = encodeURIComponent(emailBody)
    const encodedSubject = encodeURIComponent(subject)

    // Construct the mailto URL
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`

    // Open the mailto URL in a new window
    window.open(mailtoUrl)
  }

  return (
    <Dialog maxWidth="md" fullWidth open={true}>
      <IconButton
        edge="end"
        color="inherit"
        onClick={() => {
          dispatch(setIsOpenEmailCreate(false))
        }}
        aria-label="close"
        style={{ position: 'absolute', top: 5, right: 15 }}
      ><CloseIcon/></IconButton>
      <Box display='flex' flexDirection='column' gap={2} padding={4} ref={divRef}>
        <p><span className='font-black pr-4'>Teма интервью:</span>{formData.topic}</p>
        <p><span className='font-black pr-4'>Дата проведения:</span>{formData.data.format('DD.MM.YYYY')}</p>
        <p><span className='font-black pr-4'>Формат:</span>{formatTypes[formData.formatType]}</p>
        <p><span className='font-black pr-4'>Длительность интервью:</span>{durations[formData.duration]}</p>
        <p><span className='font-black pr-4'>Вознаграждение эксперту:</span>{formData.award}</p>
        <p><span className='font-black pr-4'>Дополнительные требования:</span>{formData.addition}</p>
      </Box>

      <DialogActions className="flex justify-between alain-center">
        <Button color="secondary" onClick={() => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          navigator.clipboard.writeText(divRef.current.innerText)
        }}>В буфер</Button>
        <Button color="primary" className="ml-auto" onClick={() => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
          createMailtoLink(divRef.current.innerText)
        }}>
            Создать email
        </Button>
      </DialogActions>
    </Dialog>
  )
}
