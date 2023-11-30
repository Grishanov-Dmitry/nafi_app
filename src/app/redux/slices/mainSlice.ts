import { type IContact } from '@/app/types'
import { createSlice } from '@reduxjs/toolkit'

import contacts from './contactList.json'

export interface IState {
  isLogged: boolean
  userName: string
  contacts: IContact[]
  activeContactId: string | null
}

const initialState: IState = {
  isLogged: false,
  userName: 'Тимур Аймалетдинов',
  contacts,
  activeContactId: null
}

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setUserName (state, { payload }) {
      state.userName = payload
    },
    changeLogIn (state, { payload }) {
      state.isLogged = payload
    },
    setActiveContactId (state, { payload }) {
      state.activeContactId = payload
    },
    saveNewContact (state, { payload }) {
      state.contacts = [...state.contacts, payload]
    }
  }
})

export const { setUserName, changeLogIn, setActiveContactId, saveNewContact } = commonSlice.actions

export default commonSlice.reducer
