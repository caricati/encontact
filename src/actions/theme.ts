import { useCallback } from 'react'
import useStore from '../store/use-store'
import { Types } from '../reducers/theme'

export const useToggleThemeMode = () => {
  const { dispatch, store } = useStore()

  return useCallback(() => {
    dispatch({
      type: Types.CHANGE_THEME_MODE,
      payload: store.theme.mode === 'light' ? 'dark' : 'light',
    })
  }, [store, dispatch])
}
