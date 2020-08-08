import useStore from '../store/use-store'
import { Types } from '../reducers/auth'

export const useMakeLogin = () => {
  const { dispatch } = useStore()

  return (username: string, password: string): Promise<{ ok: boolean }> => {
    return new Promise((resolve, reject) => {
      if (username === 'admin' && password === 'admin') {
        localStorage.setItem('auth', '1')
        resolve({ ok: true })
        return dispatch({ type: Types.LOGIN_SUCCESS })
      }
      reject({ ok: false })
      return dispatch({ type: Types.LOGIN_ERROR })
    })
  }
}

export const useLogout = () => {
  const { dispatch } = useStore()

  return () => {
    localStorage.removeItem('auth')
    dispatch({ type: Types.LOGOUT })
  }
}
