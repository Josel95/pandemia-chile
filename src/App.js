import React from 'react';

import { ViewStyled, CurrentComuna, NearbyComunas, NearbyComunasTitle } from './styles'

import { Comuna } from './components/Comuna/Comuna'

import { Paso } from './components/Paso/Paso'

import { ComunaList } from './components/ComunaList/ComunaList'

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
