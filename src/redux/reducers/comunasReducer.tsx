import { Action } from '../../types/Action'

import { Comuna } from '../../types/Comuna'

import { ComunaState } from '../../types/ComunaState'

import { SET_COMUNA } from '../actions/comunasActions'

const initialState: ComunaState = {
    comuna: {
        "latitude": -32.514166666666668,
        "deadByComuna": 258,
        "id": "13130",
        "nearComunas": [
            {
                "id": "13129",
                "paso": 2,
                "deadByComuna": 235,
                "activeCases": 115,
                "latitude": -32.509,
                "longitude": -69.372,
                "totalCases": 6996,
                "name": "San Joaquín"
            },
            {
                "activeCases": 112,
                "longitude": -69.36633333333333,
                "id": "13121",
                "deadByComuna": 293,
                "name": "Pedro Aguirre Cerda",
                "totalCases": 6142,
                "latitude": -32.533666666666662,
                "paso": 2
            },
            {
                "name": "Macul",
                "paso": 3,
                "latitude": -32.513,
                "deadByComuna": 223,
                "activeCases": 145,
                "totalCases": 7297,
                "longitude": -69.396,
                "id": "13118"
            },
            {
                "totalCases": 4947,
                "deadByComuna": 182,
                "longitude": -69.336999999999989,
                "name": "La Cisterna",
                "paso": 2,
                "latitude": -32.471000000000004,
                "activeCases": 138,
                "id": "13109"
            },
            {
                "id": "13131",
                "deadByComuna": 242,
                "activeCases": 68,
                "latitude": -32.466666666666669,
                "name": "San Ramón",
                "longitude": -69.35833333333332,
                "paso": 3,
                "totalCases": 5900
            },
            {
                "latitude": -32.478,
                "paso": 3,
                "totalCases": 6060,
                "activeCases": 75,
                "id": "13116",
                "name": "Lo Espejo",
                "longitude": -69.313,
                "deadByComuna": 295
            },
            {
                "totalCases": 22584,
                "name": "Santiago",
                "deadByComuna": 394,
                "latitude": -32.562777777777782,
                "id": "13101",
                "paso": 3,
                "activeCases": 469,
                "longitude": -69.342777777777769
            },
            {
                "id": "13106",
                "totalCases": 9051,
                "longitude": -69.301,
                "activeCases": 202,
                "paso": 3,
                "latitude": -32.541,
                "deadByComuna": 209,
                "name": "Estación Central"
            },
            {
                "latitude": -32.546,
                "paso": 3,
                "activeCases": 283,
                "name": "Ñuñoa",
                "totalCases": 8907,
                "deadByComuna": 391,
                "longitude": -69.396,
                "id": "13120"
            },
            {
                "name": "La Granja",
                "longitude": -69.375,
                "totalCases": 9274,
                "id": "13111",
                "activeCases": 117,
                "latitude": -32.466666666666669,
                "deadByComuna": 283,
                "paso": 3
            },
            {
                "deadByComuna": 220,
                "paso": 3,
                "id": "13123",
                "activeCases": 89,
                "totalCases": 5245,
                "latitude": -32.565000000000005,
                "longitude": -69.384,
                "name": "Providencia"
            },
            {
                "paso": 3,
                "totalCases": 4341,
                "longitude": -69.283333333333331,
                "deadByComuna": 139,
                "activeCases": 83,
                "id": "13102",
                "latitude": -32.5,
                "name": "Cerrillos"
            },
            {
                "longitude": -69.301,
                "activeCases": 139,
                "paso": 2,
                "latitude": -32.573,
                "id": "13126",
                "totalCases": 8658,
                "deadByComuna": 237,
                "name": "Quinta Normal"
            },
            {
                "name": "Independencia",
                "id": "13108",
                "activeCases": 114,
                "latitude": -32.587,
                "totalCases": 8599,
                "longitude": -69.333999999999989,
                "deadByComuna": 346,
                "paso": 3
            },
            {
                "paso": 2,
                "deadByComuna": 217,
                "longitude": -69.274,
                "latitude": -32.555000000000007,
                "totalCases": 6953,
                "id": "13117",
                "activeCases": 132,
                "name": "Lo Prado"
            }
        ],
        "paso": 2,
        "totalCases": 7930,
        "activeCases": 153,
        "name": "San Miguel",
        "longitude": -69.350555555555545
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