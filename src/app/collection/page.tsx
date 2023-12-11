'use client'

import { DataGrid, GridActionsCellItem, type GridColDef } from '@mui/x-data-grid'
import { Button, DialogActions } from '@mui/material'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import * as XLSX from 'xlsx'

import { useAppDispatch, useAppSelector } from '@/app/redux/hooks'
import { getCollectionItems } from '@/app/redux/slices/selectors'
import { clearCollectionItems, setActiveContactId } from '@/app/redux/slices/mainSlice'
import { fieldsFromFile, tableColumns } from '../constants'
import { type IContact } from '../types'

const downloadHelper = (contacts: IContact[]) => {
  return contacts.map((contact) => {
    const preparedContact: any = {}

    Object.keys(contact).forEach((key) => {
      if (key === 'id') {
        return
      }

      if (typeof contact[key] === 'boolean') {
        preparedContact[fieldsFromFile[key]] = contact[key] ? 'Да' : 'Нет'
        return
      }

      preparedContact[fieldsFromFile[key]] = contact[key]
    })

    return preparedContact
  })
}

export default function CollectionPage () {
  const dispatch = useAppDispatch()
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

  const clearCollection = () => {
    dispatch(clearCollectionItems())
  }

  const preparedContacts = downloadHelper(contacts)

  const handleDownload = () => {
    const ws = XLSX.utils.json_to_sheet(preparedContacts)

    // Create a workbook with a worksheet
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')

    // Save the file
    XLSX.writeFile(wb, 'подборка.xlsx')
  }

  return (
    <div className='flex-1 w-full overflow-auto px-4 flex flex-col'>
      <DialogActions className="flex justify-end alain-center">
        {<Button color="secondary" onClick={clearCollection}>Очистить подборку</Button>}
        <Button color="primary" className="ml-auto" onClick={handleDownload}>
            Экспорт
        </Button>
      </DialogActions>
      <DataGrid
        sx={{
          '& .MuiDataGrid-virtualScroller': {
            minHeight: '300px'
          }
        }}
        rows={contacts}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  )
}
