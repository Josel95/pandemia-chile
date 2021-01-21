import React from 'react'

import { Container, Name } from './styles'

import colors from '../colors.json'

const names = {
    1: "Cuarentena",
    2: "Transición",
    3: "Preparación",
    4: "Apertura Inicial",
    5: "Apertura Avanzada"
}

export const PasoName = ({ number = 1 }) => {

    const { nameBackground, nameFont } = colors[number]

    return (
        <Container background={nameBackground}>
            <Name color={nameFont}>{names[number] || "Error"}</Name>
        </Container>
    )
}