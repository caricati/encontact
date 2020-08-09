import auth, { authStore } from './auth'
import message, { messageStore } from './message'
import theme, { themeStore } from './theme'

export const initialState = {
  ...authStore,
  ...themeStore,
  ...messageStore,
}

export default (state: any, action: { type: string, payload: any }): any => ({
  auth: auth(state.auth, action),
  message: message(state.message, action),
  theme: theme(state.theme, action),
})
