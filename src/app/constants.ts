import { type IContact } from '@/app/types'
import { type GridColDef } from '@mui/x-data-grid'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded'

export const fieldsFromFile = {
  name: 'ФИО',
  organization: 'Организация',
  position: 'Должность',
  expertise: 'Экспертиза',
  phone: 'Телефон',
  phoneSecond: 'Телефон доп',
  email: 'Email',
  emailSecond: 'Email доп',
  shareDisabled: 'Переданы заказчиком',
  comment: 'Комментарий',
  source: 'Ресурс'
}

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

export const accountRoles = {
  admin: 'admin',
  user: 'user'
}

export const accountStatuses = {
  active: 'active',
  blocked: 'blocked'
}

export const headerTabs = [
  {
    label: 'контакты',
    href: 'contacts',
    icon: PersonPinIcon,
    id: 0
  },
  {
    label: 'расширенный поиск',
    href: 'search',
    icon: ContentPasteSearchIcon,
    id: 1
  },
  {
    label: 'учетные записи',
    href: 'accounts',
    icon: ManageAccountsIcon,
    id: 2
  },
  {
    label: 'подборка',
    href: 'collection',
    icon: BookmarkAddedIcon,
    id: 3
  }
]
