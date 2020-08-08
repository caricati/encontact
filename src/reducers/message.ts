export enum Types {
  FETCH_MENU_MESSAGES = 'FETCH_MENU_MESSAGES',
}

export const messageStore = {
  message: {
    menu: []
  },
}

export default (state = messageStore, action: { type: string, payload: any }) => {
  switch (action.type) {
    case Types.FETCH_MENU_MESSAGES:
      return {
        ...state,
        menu: action.payload,
      }
    default:
      return state
  }
}