import { type RootState } from '../store'

const getCommonState = (state: RootState) => state.common

export const getIsLogged = (state: RootState) => getCommonState(state).isLogged

export const getUserName = (state: RootState) => getCommonState(state).userName

export const getContacts = (state: RootState) => getCommonState(state).contacts
export const getActiveContactId = (state: RootState) => getCommonState(state).activeContactId
export const getActiveContact = (state: RootState) => {
  const activeContactId = getActiveContactId(state)
  const contacts = getContacts(state)

  return contacts.find((contact) => contact.id === activeContactId)
}

export const getCollectionItems = (state: RootState) => getCommonState(state).collectionItems
