import React from 'react'

import { Paso } from '../Paso/Paso'

import { Container, ComunaText, HeaderTitle, ComunaName } from './styles'

export const Header = ({ currentComuna }) => {
    return (
        <Container>
            <HeaderTitle>
                <ComunaText>Comuna</ComunaText>
            </HeaderTitle>

            <ComunaName>
                {currentComuna.name}
            </ComunaName>

            <Paso number={currentComuna.paso}></Paso>
        </Container>
    )
}