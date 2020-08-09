import React from 'react'
import { ThemeProvider } from 'styled-components'

import Login from './login'
import Messages from './messages'
import usePrepareReducer from '../store/use-prepare-reducer'
import { darkMode, lightMode, GlobalStyles } from '../theme'
import { StoreProvider } from '../store/store-context'

const PrivateSection = () => <Messages />

const PublicSection = () => <Login />

export default function Containers() {
  const [store, dispatch] = usePrepareReducer()
  const themeMode = store.theme.mode === 'light' ? lightMode : darkMode
  return (
    <StoreProvider value={{ store, dispatch }}>
      <ThemeProvider theme={themeMode}>
        {store.auth.isLoggedIn ? <PrivateSection /> : <PublicSection />}
        <GlobalStyles />
      </ThemeProvider>
    </StoreProvider>
  )
}
