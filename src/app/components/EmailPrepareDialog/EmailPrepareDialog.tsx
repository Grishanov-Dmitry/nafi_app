/* eslint-disable indent */
import { type ChangeEvent, useState } from 'react'
import { Dialog, TextField, Select, MenuItem, InputLabel, TextareaAutosize, Box, Button, IconButton } from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import dayjs, { type Dayjs } from 'dayjs'
import CloseIcon from '@mui/icons-material/Close'
import { useAppDispatch } from '@/app/redux/hooks'
import { setActiveContactId, setIsOpenEmailCreate } from '@/app/redux/slices/mainSlice'

export const formatTypes = {
  online: 'Онлайн',
  personal: 'Лично',
  mix: 'Онлайн / Лично'
}

export const durations = {
  short: 'До 40 минут',
  middle: '40-60 минут',
  long: 'Более 60 минут'
}

export interface IFormData {
  topic: string
  formatType: string
  duration: string
  award: string
  addition: string
  data: dayjs.Dayjs
}

interface IEmailPrepareDialog {
  showResult: (data: IFormData) => void
}

export const EmailPrepareDialog = ({ showResult }: IEmailPrepareDialog) => {
  const dispatch = useAppDispatch()

  const [formData, setFormData] = useState<IFormData>({
    topic: 'Мопик',
    formatType: 'online',
    duration: 'short',
    award: '30 $',
    addition: 'Что-то дополнительное',
    data: dayjs(new Date())
  })

  const setCurrentDate = (value: Dayjs) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      data: value
    }))
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  return (
    <Dialog maxWidth="md" fullWidth open={true}>
      <IconButton
        edge="end"
        color="inherit"
        onClick={() => {
          dispatch(setIsOpenEmailCreate(false))
          dispatch(setActiveContactId(null))
        }}
        aria-label="close"
        style={{ position: 'absolute', top: 5, right: 15 }}
      ><CloseIcon/></IconButton>
      <Box display="flex" flexDirection='column' gap={2} padding={4}>
        <Box display="flex" gap={8} justifyContent='space-between' alignItems='center'>
          <TextField
            size='small'
            fullWidth
            label='Тема интервью'
            variant="outlined"
            name='topic'
            value={formData.topic}
            onChange={handleChange}
            margin="normal"
          />
          <DesktopDatePicker
            sx={{
              '& .MuiInputBase-input': {
                padding: '12px'
              },
              '& .MuiFormLabel-root': {
                top: -10
              }
            }}
            label='Дата интервью'
            disablePast
            format="DD.MM.YYYY"
            onChange={(newValue: Dayjs | null) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
            // @ts-ignore
              setCurrentDate(newValue)
            }}
          />
        </Box>

        <Box display="flex">
          <Box>
            <InputLabel id="formatSelect">Формат встречи</InputLabel>
            <Select
              size='small'
              id='formatSelect'
              className='w-80 mx-8 mb-6'
              labelId="demo-simple-select-label-2"
              value={formData.formatType}
              name='formatType'
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
              // @ts-ignore
              onChange={handleChange}
            >
              {Object.keys(formatTypes).map((format) => <MenuItem key={format} value={format}>{formatTypes[format]}</MenuItem>)}
            </Select>
          </Box>
          <Box>
            <InputLabel id="durationSelect">Длительность</InputLabel>
            <Select
              size='small'
              id='durationSelect'
              className='w-80 mx-8 mb-6'
              labelId="demo-simple-select-label-2"
              value={formData.duration}
              name='duration'
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
        // @ts-ignore
              onChange={handleChange}
            >
              {Object.keys(durations).map((duration) => <MenuItem key={duration} value={duration}>{durations[duration]}</MenuItem>)}
            </Select>
          </Box>

        </Box>
        <TextField
          size='small'
          //   className={styles.textField}
          label='Вознаграждение эксперту'
          variant="outlined"
          name='award'
          value={formData.award}
          onChange={handleChange}
          margin="normal"
        />
        <InputLabel id="additionText">Дополнительные требования</InputLabel>
        <TextareaAutosize
          id='additionText'
          name="addition"
          value={formData.addition}
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

        <Button color="primary" className="ml-auto" onClick={() => { showResult(formData) }}>
            Сформировать
        </Button>
      </Box>
    </Dialog>)
}
