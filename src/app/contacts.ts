import { type ITableField } from './types'

export const sources = {
  contacts: 'контакты'
}

export const tableFields: ITableField[] = [
  {
    label: 'ФИО',
    name: 'name'
  },
  {
    label: 'Организация',
    name: 'organization'
  },
  {
    label: 'Должность',
    name: 'position'
  },
  {
    label: 'Экспертиза',
    name: 'expertise'
  },
  {
    label: 'Телефон',
    name: 'phone'
  },
  {
    label: 'Телефон 2',
    name: 'phoneSecond'
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email'
  },
  {
    label: 'Email 2',
    name: 'emailSecond',
    type: 'email'
  }
]
