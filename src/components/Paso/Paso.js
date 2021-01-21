import React from 'react'

import { Container } from './styles'

import { PasoNumber } from './PasoNumber/PasoNumber'
import { PasoName } from './PasoName/PasoName'

export const Paso = ({ number }) => {
    return (
        <Container>
            <PasoNumber number={number}/>
            <PasoName number={number} />
        </Container>
    )
}