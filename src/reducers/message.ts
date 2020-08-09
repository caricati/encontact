export enum Types {
  FETCH_MENU_MESSAGES = 'FETCH_MENU_MESSAGES',
  FETCH_MESSAGES_LIST = 'FETCH_MESSAGES_LIST',
  ARCHIVE_MESSAGES_IDS = 'ARCHIVE_MESSAGES_IDS',
}

export const messageStore = {
  message: {
    menu: [],
    archiveByIds: [],
    selected: null,
  },
}

export default (state = messageStore, action: { type: string, payload: any }) => {
  switch (action.type) {
    case Types.FETCH_MENU_MESSAGES:
      return {
        ...state,
        menu: action.payload,
      }
    case Types.FETCH_MESSAGES_LIST:
      return {
        ...state,
        selected: action.payload,
      }
    case Types.ARCHIVE_MESSAGES_IDS:
      return {
        ...state,
        archiveByIds: action.payload,
      }
    default:
      return state
  }
}