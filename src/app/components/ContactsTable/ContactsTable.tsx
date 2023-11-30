'use client'

import * as React from 'react'
import { DataGrid, GridActionsCellItem, type GridColDef, GridDeleteIcon } from '@mui/x-data-grid'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks'
import { getContacts } from '@/app/redux/slices/selectors'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import { tableColumns } from './constants'
import { setActiveContactId } from '@/app/redux/slices/mainSlice'

export const ContactsTable = () => {
  const dispatch = useAppDispatch()

  const contacts = useAppSelector(getContacts)

  const columns: GridColDef[] = [
    ...tableColumns,
    {
      field: 'actions',
      type: 'actions',
      width: 80,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<GridDeleteIcon />}
          label="Delete"
          // onClick={deleteUser(params.id)}
          key={1}
        />,
        <GridActionsCellItem
          icon={<ModeEditIcon />}
          label="Изменить"
          onClick={() => dispatch(setActiveContactId(params.id))}
          showInMenu
          key={12}
        />
      ]
    }
  ]

  return (
    <div style={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={contacts}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}
