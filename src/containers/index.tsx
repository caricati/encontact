import React from 'react'
import usePrepareReducer from '../store/use-prepare-reducer'
import { StoreProvider } from '../store/store-context'
import Messages from './messages'
import Login from './login'

const PrivateSection = () => <Messages />

const PublicSection = () => <Login />

export default function Containers() {
  const [store, dispatch] = usePrepareReducer()

  console.log(store.auth.isLoggedIn)

  return (
    <StoreProvider value={{ store, dispatch }}>
      {store.auth.isLoggedIn ? <PrivateSection /> : <PublicSection />}
    </StoreProvider>
  )
}
