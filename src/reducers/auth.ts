export const LOGIN: string = 'LOGIN'
export const LOGOUT: string = 'LOGOUT'

export enum Types {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
  LOGOUT = 'LOGOUT'
}

export const authStore = {
  auth: {
    isLoggedIn: localStorage.getItem('auth') === '1',
    hasError: false,
  },
}

export default (state = authStore, action: { type: string, payload: any }) => {
  switch (action.type) {
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        hasError: false,
      }
    case Types.LOGIN_ERROR:
      return {
        ...state,
        hasError: true,
      }
    case Types.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        hasError: false,
      }
    default:
      return state
  }
}