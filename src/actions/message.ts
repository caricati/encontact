import axios from 'axios'
import { useCallback } from 'react'
import useStore from '../store/use-store'
import { Types } from '../reducers/message'

const MENU_URL =
  'http://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact/menus'

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
