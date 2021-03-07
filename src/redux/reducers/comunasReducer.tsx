import { Action } from '../../types/Action'

import { Comuna } from '../../types/Comuna'

import { ComunaState } from '../../types/ComunaState'

import { SET_COMUNA } from '../actions/comunasActions'

const initialState = {}

export const comunaReducer = (state: ComunaState | {} = initialState, action: Action<Comuna>): ComunaState | {} => {

    if(action.type === SET_COMUNA) {
        return {
            comuna: action.payload,
            isCurrentComuna: action.isCurrentComuna
        }
    }

    return state
}