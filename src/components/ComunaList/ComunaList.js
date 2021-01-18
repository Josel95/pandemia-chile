import React from 'react'

import { PasoNumber } from '../Paso/Paso'

import { Scroll, ComunaItemContainer, ComunaItemText } from './styles'

const ComunaItem = ({ comuna }) => {
    return (
        <ComunaItemContainer>
            <ComunaItemText>{comuna}</ComunaItemText>
            <PasoNumber paso={2} />
        </ComunaItemContainer>
    )
}

export const ComunaList = ({ comunas = [] }) => {

    return (
        <Scroll>
            {
                comunas.map(comuna => <ComunaItem key={comuna} comuna={comuna} />)
            }
        </Scroll>
    )
} 