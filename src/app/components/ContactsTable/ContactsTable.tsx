'use client'

import { useState } from 'react'
import { Button } from '@mui/material'
import { DataGrid, GridActionsCellItem, type GridColDef, type GridRowSelectionModel } from '@mui/x-data-grid'

import { useAppDispatch, useAppSelector } from '@/app/redux/hooks'
import { getContacts } from '@/app/redux/slices/selectors'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import { tableColumns } from '../../constants'
import { setActiveContactId, setCollectionItems } from '@/app/redux/slices/mainSlice'
import { type IContact } from '@/app/types'
import { useSnackbar } from '@/app/layout'

export const ContactsTable = () => {
  const dispatch = useAppDispatch()
  const [selectedRows, setSelectedRows] = useState<IContact[]>([])

  const contacts = useAppSelector(getContacts)

  const columns: GridColDef[] = [
    ...tableColumns,
    {
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
          onClick={() => dispatch(setActiveContactId(params.id))}
          showInMenu
          key={12}
        />
      ]
    }
  ]

  const handleSelectionModelChange = (selectedIDs: GridRowSelectionModel) => {
    const selectedRows = contacts.filter((row: IContact) =>
      selectedIDs.includes(row.id)
    )

    setSelectedRows(selectedRows)
  }

  const { handleOpenSnackbar } = useSnackbar()

  const addToCollection = () => {
    dispatch(setCollectionItems(selectedRows))
    handleOpenSnackbar(`В подборку добавлено контактов: ${selectedRows.length} `)
  }

  return (
    <div className='flex-1 w-full overflow-auto px-4 flex flex-col'>
      <Button className='ml-auto mb-5' variant="contained" component="span" onClick={addToCollection}>Добавить в подборку</Button>

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
        onRowSelectionModelChange={handleSelectionModelChange}
      />
    </div>
  )
}
