import { tableFields } from '@/app/contacts'
import { Button, Checkbox, TextField } from '@mui/material'

export const SearchMenu = () => {
  return <div>
    <h2>Должность, экспертиза, продукт</h2>
    <TextField
      // className={styles.textField}
      label='Поиск'
      variant="outlined"
      name='search'
      value={''}
      // onChange={handleChange}
      margin="normal"
    />

    <h2 className='my-3 font-bold'>Что искать</h2>

    {
      tableFields.map(({ label }) => <div key={label}><Checkbox/> {label}</div>)
    }

    <h2 className='my-3 font-bold'>Где искать</h2>

    <div><Checkbox/>База экспертов</div>

    <Button variant="contained" >Найти</Button>
  </div>
}
