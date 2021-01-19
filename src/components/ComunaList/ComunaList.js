import React from 'react'

import { PasoNumber } from '../Paso/Paso'

import { Scroll, ComunaItemContainer, ComunaItemText } from './styles'

const ComunaItem = ({ comuna }) => {
    return (
        <ComunaItemContainer>
            <ComunaItemText>{comuna.name}</ComunaItemText>
            <PasoNumber paso={comuna.paso} />
        </ComunaItemContainer>
    )
}

export const ComunaList = ({ comunas = [] }) => {

    return (
        <Scroll>
            {
                comunas.map(comuna => <ComunaItem key={comuna.name} comuna={comuna} />)
            }
        </Scroll>
    )
} 