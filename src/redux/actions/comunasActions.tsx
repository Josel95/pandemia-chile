import { Action } from '../../types/Action'

import { Comuna } from '../../types/Comuna'

export const SET_COMUNA = 'SET_COMUNA'

export const setComuna = (comuna: Comuna): Action<Comuna> => {
    return {
        type: SET_COMUNA,
        payload: comuna
    }
}