import axios from 'axios'
import { useCallback } from 'react'
import useStore from '../store/use-store'
import { Types } from '../reducers/message'

const MENU_URL =
  'http://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact/menus'

const BASE_ITEMS_URL =
  'http://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact/items/'

export const useFetchMenuMessage = () => {
  const { dispatch } = useStore()

  return useCallback(
    () =>
      axios
        .get(MENU_URL)
        .then(({ data }) =>
          dispatch({ type: Types.FETCH_MENU_MESSAGES, payload: data }),
        ),
    [dispatch],
  )
}

export const useFetchMessages = () => {
  const { dispatch } = useStore()

  return useCallback(
    ({ id }) =>
      axios
        .get(`${BASE_ITEMS_URL}/${id}`)
        .then(({ data }) =>
          dispatch({ type: Types.FETCH_MESSAGES_LIST, payload: data }),
        ),
    [dispatch],
  )
}

export const useArchiveMessageListIds = () => {
  const { dispatch } = useStore()

  return useCallback(
    (payload: string[]) =>
      dispatch({ type: Types.ARCHIVE_MESSAGES_IDS, payload }),
    [dispatch],
  )
}

export const useArchiveMessages = () => {
  const {
    dispatch,
    store: { message },
  } = useStore()

  return (ids: string[]) =>
    new Promise((resolve) => {
      dispatch({
        type: Types.FETCH_MESSAGES_LIST,
        payload: {
          ...message.selected,
          subMenuItems: message.selected?.subMenuItems.filter(
            ({ id }: { id: string }) => !ids.includes(id),
          ),
        },
      })
      resolve({ ok: true })
    })
}
