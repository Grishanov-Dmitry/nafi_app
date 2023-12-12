import { combineReducers } from 'redux'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

// slices
import mainSliceReducer from './slices/mainSlice'

// ----------------------------------------------------------------------

export const createNoopStorage = () => ({
  async getItem (_key: string) {
    return await Promise.resolve(null)
  },
  // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error, @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async setItem (_key: string, value: any) {
    return await Promise.resolve(value)
  },
  async removeItem (_key: string) {
    await Promise.resolve()
  }
})

export const storage =
  typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage()

export const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: []
}

export const productPersistConfig = {
  key: 'product',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['sortBy', 'checkout']
}

const rootReducer = combineReducers({
  common: mainSliceReducer
})

export default rootReducer
