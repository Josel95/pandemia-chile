import { createStore, combineReducers } from 'redux'

import { comunaReducer } from './reducers/comunasReducer'

const reducers = combineReducers({
    comuna: comunaReducer
})

export const store = createStore(reducers)