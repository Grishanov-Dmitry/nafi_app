/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import Button from '@mui/material/Button'
import { Stack } from '@mui/material'
import uniqid from 'uniqid'
import * as XLSX from 'xlsx'

import './AddContactBlock.css'
import { saveNewContacts, setActiveContactId } from '@/app/redux/slices/mainSlice'
import { useAppDispatch } from '@/app/redux/hooks'
import { fieldsFromFile, defaultContact } from '../../constants'
import { type IContact } from '@/app/types'

export const AddContactBlock = () => {
  const dispatch = useAppDispatch()

  const handleFileChange = async (e) => {
    const file = e.target.files[0]

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const data = new Uint8Array(e.target.result)
        const workbook = XLSX.read(data, { type: 'array' })

        const sheetName = workbook.SheetNames[0]
        const sheet = workbook.Sheets[sheetName]
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' })

        const newContactList = [] as IContact[]

        jsonData.forEach((row, index) => {
          const newContact: IContact = { ...defaultContact }

          if (index === 0) {
            // First are headers list
            return
          }
          Object.keys(fieldsFromFile).forEach((item, i) => {
            if (item === 'shareDisabled') {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              newContact[item] = row[i].toLowerCase() === 'да'
            } else {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              newContact[item] = row[i]
            }
          })

          newContact.id = uniqid()
          newContact.source = 'contact'

          newContactList.push(newContact)
        })

        dispatch(saveNewContacts(newContactList))
      }

      reader.readAsArrayBuffer(file)
    }
  }

  return (
    <div className="addContactBlock">
      <Stack spacing={2} paddingBottom={3} direction="column" >
        <Button size='small' variant="contained" onClick={() => dispatch(setActiveContactId(uniqid()))}>Добавить Контакт</Button>
        <label style={{ display: 'inline-block', position: 'relative' }}>
          <Button variant="contained" component="span">Импортировать Контакты</Button>
          <input
            type="file"
            style={{ display: 'none' }}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onChange={handleFileChange}
          />
        </label>
      </Stack>
    </div>
  )
}
