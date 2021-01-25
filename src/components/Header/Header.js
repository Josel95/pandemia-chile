import React from 'react'

import { Paso } from '../Paso/Paso'

import { Icon } from 'react-native-elements'

import { Container, ComunaText, HeaderTitle, ComunaName } from './styles'

export const Header = ({ currentComuna, onReload }) => {

    const handleReloadClick = () => {
        if(onReload){
            onReload()
        }
    }

    return (
        <Container>
            <HeaderTitle>
                <ComunaText>Comuna</ComunaText>
                <Icon onPress={handleReloadClick} name="cached" color="#B3E5FC"/>
            </HeaderTitle>

            <ComunaName>
                {currentComuna.name}
            </ComunaName>

            <Paso number={currentComuna.paso}></Paso>
        </Container>
    )
}