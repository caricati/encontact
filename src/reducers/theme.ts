export enum Types {
  CHANGE_THEME_MODE = 'CHANGE_THEME_MODE',
}

export const themeStore = {
  theme: {
    mode: 'light',
  },
}

export default (state = themeStore, action: { type: string, payload: any }) => {
  switch (action.type) {
    case Types.CHANGE_THEME_MODE:
      return {
        ...state,
        mode: action.payload,
      }
    default:
      return state
  }
}