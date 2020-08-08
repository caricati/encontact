import auth, { authStore } from './auth'

export const initialState = {
  ...authStore,
}

export default (state: any, action: { type: string, payload: any }): any => ({
  auth: auth(state.auth, action),
})
