import { Reducer } from 'redux'

import { ActionComuna } from '../../types/ActionComuna'

import { ComunaState } from '../../types/ComunaState'

import { SET_COMUNA } from '../actions/comunasActions'

const initialState = {}

export const comunaReducer: Reducer<ComunaState | {}, ActionComuna> = (state: ComunaState | {} = initialState, action: ActionComuna): ComunaState | {} => {

    if(action.type === SET_COMUNA) {
        return {
            comuna: action.payload,
            isCurrentComuna: action.isCurrentComuna
        }
    }

    return state
}