import React from 'react'

import { Container, LoadingText } from './styles'

import CoronaIcon from '../../components/CoronaIcon'

export const LoadingScreen = () => {

    return (
        <Container>
            <CoronaIcon />
            <LoadingText>Cargando</LoadingText>
        </Container>
    )
}