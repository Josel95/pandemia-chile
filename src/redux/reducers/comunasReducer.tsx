import { Action } from '../../types/Action'

import { Comuna } from '../../types/Comuna'

import { ComunaState } from '../../types/ComunaState'

import { SET_COMUNA } from '../actions/comunasActions'

const initialState: ComunaState = {
    comuna: {
        id: "13130",
        longitude: -69.350555555555545,
        nearComunas: [
            {
                paso: 2,
                name: "San Joaquín",
                id: "13129"
            },
            {
                id: "13121",
                name: "Pedro Aguirre Cerda",
                paso: 2
            },
            {
                id: "13118",
                paso: 3,
                name: "Macul"
            },
            {
                name: "La Cisterna",
                paso: 2,
                id: "13109"
            },
            {
                name: "San Ramón",
                paso: 3,
                id: "13131"
            },
            {
                paso: 3,
                name: "Lo Espejo",
                id: "13116"
            },
            {
                id: "13101",
                name: "Santiago",
                paso: 3
            },
            {
                paso: 3,
                name: "Estación Central",
                id: "13106"
            },
            {
                paso: 3,
                id: "13120",
                name: "Ñuñoa"
            },
            {
                paso: 3,
                name: "La Granja",
                id: "13111"
            },
            {
                name: "Providencia",
                paso: 3,
                id: "13123"
            },
            {
                id: "13102",
                paso: 3,
                name: "Cerrillos"
            },
            {
                id: "13126",
                name: "Quinta Normal",
                paso: 2
            },
            {
                paso: 3,
                id: "13108",
                name: "Independencia"
            },
            {
                name: "Lo Prado",
                id: "13117",
                paso: 2
            }
        ],
        paso: 2,
        name: "San Miguel",
        totalCases: 7930,
        activeCases: 153,
        dead: 258,
        latitude: -32.514166666666668
    }
}

export const comunaReducer = (state: ComunaState = initialState, action: Action<Comuna>): ComunaState => {

    if(action.type === SET_COMUNA) {
        return {
            comuna: action.payload
        }
    }

    return state
}