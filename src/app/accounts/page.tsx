'use client'

import { useState } from 'react'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import ModeEditIcon from '@mui/icons-material/ModeEdit'

import type { IAccount } from '../types'
import { accountRoles, accountStatuses } from '../constants'
import { AccountCard } from '../components/AccountCard/AccountCard'
import { Button } from '@mui/material'

const tableColumns = [
  {
    field: 'fullName',
    headerName: 'ФИО',
    width: 150
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150
  },
  {
    field: 'role',
    headerName: 'Роль',
    width: 150
  },
  {
    field: 'status',
    headerName: 'Статус',
    width: 150
  }
]

const accounts: IAccount[] = [
  {
    id: 3,
    fullName: 'Алексей Кор',
    email: 'alex@gmail.com',
    password: '123',
    role: accountRoles.admin,
    status: accountStatuses.active
  },
  {
    id: 5,
    fullName: 'Соня Ток',
    email: 'alex@gmail.com',
    password: '245',
    role: accountRoles.user,
    status: accountStatuses.blocked
  }
]

export default function AccountsPage () {
  const [showAccountCard, setShowAccountCard] = useState<boolean>(false)
  const [activeAccount, setActiveAccount] = useState<IAccount | null>(null)

  const toggleAccountCardShow = () => {
    setShowAccountCard(!showAccountCard)
    setActiveAccount(null)
  }

  const columns = [...tableColumns, {
    field: 'actions',
    type: 'actions',
    width: 80,
    getActions: (params) => [
      // <GridActionsCellItem
      //   icon={<GridDeleteIcon />}
      //   label="Delete"
      //   // onClick={deleteUser(params.id)}
      //   key={1}
      // />,
      <GridActionsCellItem
        icon={<ModeEditIcon />}
        label="Изменить"
        onClick={() => {
          setShowAccountCard(!showAccountCard)
          setActiveAccount(params.row)
        }}
        showInMenu
        key={12}
      />
    ]
  }]

  const addUser = () => {
    setShowAccountCard(!showAccountCard)
  }

  return (
    <div className='flex justify-center flex-col items-center'>
      <h1 className='my-6'>УЧЕТНЫЕ ЗАПИСИ</h1>

      <DataGrid
        sx={{
          background: 'white',
          padding: '12px',
          '& .MuiDataGrid-main': {
            height: '300px'
          }
        }}
        columns={columns}
        rows={accounts}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
      />

      <Button variant="contained" sx={{ mt: 5 }} onClick={addUser}>
        Добавить пользователя
      </Button>
      {showAccountCard && <AccountCard activeAccount={activeAccount} isShow={showAccountCard} toggleAccountCardShow={toggleAccountCardShow} />}
    </div>
  )
}
