import { type IContact } from '@/app/types'
import { type GridColDef } from '@mui/x-data-grid'

export const fieldsFromFile = ['name', 'organization', 'position', 'expertise', 'phone', 'phoneSecond', 'email', 'emailSecond', 'shareDisabled', 'comment']

export const tableColumns: GridColDef[] = [
  { field: 'name', headerName: 'ФИО', width: 200 },
  {
    field: 'organization',
    headerName: 'Организация',
    width: 150
  },
  {
    field: 'position',
    headerName: 'Должность',
    width: 150
  },
  {
    field: 'phone',
    headerName: 'Телефон',
    width: 150
  },
  {
    field: 'phoneSecond',
    headerName: 'Телефон доп',
    width: 160
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 160
  },
  {
    field: 'emailSecond',
    headerName: 'Email доп',
    width: 160
  },
  {
    field: 'source',
    headerName: 'Источник',
    width: 160
  },
  {
    field: 'shareDisabled',
    headerName: 'Переданы заказчиком',
    width: 160,
    renderCell: ({ row }) => row.shareDisabled === true ? 'Да' : 'Нет'
  }
]

export const defaultContact: IContact = {
  id: '',
  name: '',
  organization: '',
  position: '',
  expertise: '',
  phone: '',
  phoneSecond: '',
  email: '',
  emailSecond: '',
  shareDisabled: false,
  source: '',
  comment: ''
}
