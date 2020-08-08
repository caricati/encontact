import { createContext } from 'react'

type ContextType = {
  dispatch(args: { type: string, payload?: any }): void
  store: any
}

const context: ContextType = {
  dispatch: () => {},
  store: null,
}

const Store = createContext(context)

export const StoreProvider = Store.Provider
export default Store
