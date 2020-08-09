import React from 'react'
import Select from '../../components/select'
import useStore from '../../store/use-store'
import { useToggleThemeMode } from '../../actions/theme'

export default function SwitchTheme() {
  const { store } = useStore()
  const toggleTheme = useToggleThemeMode()
  return (
    <Select
      value={store.theme.mode}
      onChange={toggleTheme}
      options={[
        {value: 'dark', label: 'Dark' },
        {value: 'light', label: 'Light' },
      ]}
    />
  )
}
