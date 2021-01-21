import React, { useState, useEffect } from 'react';

import { Text } from 'react-native'

import { ViewStyled } from './styles'

import { useComuna } from './hooks/useComuna'

import { Header } from './components/Header/Header'

import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function App() {

    const comuna = useComuna()

    const [currentComuna, setCurrentComuna] = useState({})

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

    useEffect(() => {
        if (comuna) {
            setCurrentComuna(comuna)
        }
    }, [comuna])

    if (!currentComuna || !fontsLoaded) {
        return (
            <ViewStyled>
                <Text>Cargando...</Text>
            </ViewStyled>
        )
    }

    return (
        <ViewStyled>
            <Header currentComuna={currentComuna}/>
        </ViewStyled>
    );
}
