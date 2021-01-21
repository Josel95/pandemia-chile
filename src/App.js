import React, { useState, useEffect } from 'react';

import { Text } from 'react-native'

import { ViewStyled, CurrentComuna, NearbyComunas, NearbyComunasTitle } from './styles'

import { Comuna } from './components/Comuna/Comuna'

import { Paso } from './components/Paso/Paso'

import { ComunaList } from './components/ComunaList/ComunaList'

import { useComuna } from './hooks/useComuna'

export default function App() {
    
    const comuna = useComuna()

    const [currentComuna, setCurrentComuna] = useState({})

    useEffect(() => {
        if (comuna) {
            setCurrentComuna(comuna)
        }
    }, [comuna])

    if(!currentComuna){
        return (
            <ViewStyled>
                <Text>Cargando...</Text>
            </ViewStyled>
        )
    }

    return (
        <ViewStyled>
            <CurrentComuna>
                <Comuna comuna={currentComuna.name} />
                <Paso paso={currentComuna.paso} />
            </CurrentComuna>

            <NearbyComunas>
                <NearbyComunasTitle>Comunas cercanas</NearbyComunasTitle>
                <ComunaList comunas={currentComuna.nearComunas} />
            </NearbyComunas>
        </ViewStyled>
    );
}
