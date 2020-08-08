import auth, { authStore } from './auth'
import message, { messageStore } from './message'

export const initialState = {
  ...authStore,
  ...messageStore,
}

export default (state: any, action: { type: string, payload: any }): any => ({
  auth: auth(state.auth, action),
  message: message(state.message, action),
})
