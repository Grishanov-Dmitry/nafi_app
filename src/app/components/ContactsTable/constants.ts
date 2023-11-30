import { type GridColDef } from '@mui/x-data-grid'

export const tableColumns: GridColDef[] = [
  { field: 'name', headerName: 'ФИО', width: 200 },
  { field: 'organization', headerName: 'Организация', width: 150 },
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
  }
]
