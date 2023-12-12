import { type IContact } from '@/app/types'
import { createSlice } from '@reduxjs/toolkit'

import contacts from './contactList.json'

export interface IState {
  isLogged: boolean
  userName: string
  contacts: IContact[]
  activeContactId: string | null
  collectionItems: IContact[] | []
  activeTab: number
  isOpenEmailCreate: boolean
}

const initialState: IState = {
  isLogged: false,
  userName: 'Тимур Аймалетдинов',
  contacts,
  activeContactId: null,
  collectionItems: [],
  activeTab: 0,
  isOpenEmailCreate: false
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
    },
    clearCollectionItems (state) {
      state.collectionItems = []
    },
    deleteFromCollectionById (state, { payload }) {
      state.collectionItems = state.collectionItems.filter((item) => item.id !== payload)
    },
    setActiveTab (state, { payload }: { payload: number }) {
      state.activeTab = payload
    },
    setIsOpenEmailCreate (state, { payload }: { payload: boolean }) {
      state.isOpenEmailCreate = payload
    }
  }
})

export const {
  setUserName,
  changeLogIn,
  setActiveContactId,
  saveNewContacts,
  setCollectionItems,
  clearCollectionItems,
  setActiveTab,
  deleteFromCollectionById,
  setIsOpenEmailCreate
} = commonSlice.actions

export default commonSlice.reducer
