import React from 'react';

import styled from 'styled-components'

import { Comuna } from './components/Comuna/Comuna'

import { Paso } from './components/Paso/Paso'

import { ComunaList } from './components/ComunaList/ComunaList'

const ViewStyled = styled.View`
    display: flex;
    align-items: center;
    padding-top: 50px;
    height: 100%;
    /* background-color: salmon; */
`

const CurrentComuna = styled.View`
    flex: 30%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: purple; */
`

const NearbyComunas = styled.View`
    flex: 70%;
    width: 100%;
    display: flex;
    align-items: center;
    /* background-color: pink; */
`

const NearbyComunasTitle = styled.Text`
    font-size: 27px;
    padding: 15px 0; 
`

export default function App() {
    return (
        <ViewStyled>
            <CurrentComuna>
                <Comuna comuna={'San Miguel'} />
                <Paso paso={2} />
            </CurrentComuna>

            <NearbyComunas>
                <NearbyComunasTitle>Comunas cercanas</NearbyComunasTitle>
                <ComunaList />
            </NearbyComunas>
        </ViewStyled>
    );
}
