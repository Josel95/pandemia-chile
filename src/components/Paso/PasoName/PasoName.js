import React from 'react'

import { Container, Name } from './styles'

import colors from '../colors.json'

import names from '../names.json'

export const PasoName = ({ number = 1 }) => {

    const { nameBackground, nameFont } = colors[number]

    return (
        <Container background={nameBackground}>
            <Name color={nameFont}>{names[number] || "Error"}</Name>
        </Container>
    )
}