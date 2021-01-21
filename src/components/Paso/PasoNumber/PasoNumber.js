import React from 'react'

import { Container, PasoText, Number } from './styles'

import colors from '../colors.json'

export const PasoNumber = ({ number = 1 }) => {

    const { numberBackground, numberFont } = colors[number]

    return (
        <Container background={numberBackground}>
            <PasoText color={numberFont}>Paso</PasoText>
            <Number color={numberFont}>{number}</Number>
        </Container>
    )
}