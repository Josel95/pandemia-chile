import { createStore, combineReducers } from 'redux'

import { State } from '../types/State'

import { ActionComuna } from '../types/ActionComuna'

import { ActionSearch } from '../types/ActionSearch'

import { comunaReducer } from './reducers/comunasReducer'

import { searchReducer } from './reducers/searchReducer'

const reducers = combineReducers<State | {}, ActionComuna | ActionSearch>({
    comuna: comunaReducer,
    search: searchReducer
})

export const store = createStore(reducers)