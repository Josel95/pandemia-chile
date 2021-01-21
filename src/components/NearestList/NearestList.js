import React from 'react'

import { Scroll } from './styles'

import { NearestListItem } from './NearestListItem'

export const NearestList = ({ comunas = [] }) => {

    return (
        <Scroll>
            {
                comunas.map(comuna => <NearestListItem key={comuna.name} comuna={comuna} />)
            }
        </Scroll>
    )
} 