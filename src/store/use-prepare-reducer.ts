import { useReducer } from 'react'
import reducer, { initialState } from '../reducers'

export default (): any[] => useReducer(reducer, initialState)
