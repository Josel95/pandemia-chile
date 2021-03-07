import { ActionComuna } from '../../types/ActionComuna'

import { Comuna } from '../../types/Comuna'

export const SET_COMUNA = 'SET_COMUNA'

export const setComuna = (comuna: Comuna, isCurrentComuna: boolean): ActionComuna => {
    return {
        type: SET_COMUNA,
        isCurrentComuna,
        payload: comuna
    }
}