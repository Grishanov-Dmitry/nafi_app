'use client'

import { useState } from 'react'
import { DataGrid, GridActionsCellItem, type GridColDef, type GridRowSelectionModel } from '@mui/x-data-grid'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks'
import { getCollectionItems } from '@/app/redux/slices/selectors'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import { setActiveContactId } from '@/app/redux/slices/mainSlice'
import { type IContact } from '@/app/types'
import { tableColumns } from '../constants'

export default function CollectionPage () {
  const dispatch = useAppDispatch()
  const [selectedRows, setSelectedRows] = useState<IContact[]>([])

  const contacts = useAppSelector(getCollectionItems)

  const columns: GridColDef[] = [
    ...tableColumns,
    {
      field: 'actions',
      type: 'actions',
      width: 80,
      getActions: (params) => [
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
    console.log(selectedRows)

    setSelectedRows(selectedRows)
  }

  return (
    <div className='flex-1 w-full overflow-auto px-4 flex flex-col'>
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
