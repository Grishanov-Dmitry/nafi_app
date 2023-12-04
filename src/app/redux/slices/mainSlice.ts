import { type IContact } from '@/app/types'
import { createSlice } from '@reduxjs/toolkit'

import contacts from './contactList.json'

export interface IState {
  isLogged: boolean
  userName: string
  contacts: IContact[]
  activeContactId: string | null
  collectionItems: IContact[] | []
}

const initialState: IState = {
  isLogged: false,
  userName: 'Тимур Аймалетдинов',
  contacts,
  activeContactId: null,
  collectionItems: []
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
    saveNewContacts (state, { payload }) {
      state.contacts = [...state.contacts, ...payload]
    },
    setCollectionItems (state, { payload }) {
      state.collectionItems = payload
    }
  }
})

export const { setUserName, changeLogIn, setActiveContactId, saveNewContacts, setCollectionItems } = commonSlice.actions

export default commonSlice.reducer
