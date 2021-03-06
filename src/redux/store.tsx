import { createStore, combineReducers } from 'redux'

import { State } from '../types/State'

import { comunaReducer } from './reducers/comunasReducer'

const reducers = combineReducers<State>({
    comuna: comunaReducer
})

export const store = createStore(reducers)