import React, { Fragment } from 'react';

import { ViewStyled, NearestTitle } from './styles'

import { useComuna } from './hooks/useComuna'

import { Header } from './components/Header/Header'

import { NearestList } from './components/NearestList/NearestList'

import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

import { LoadingScreen } from './screens/LoadingScreen/LoadingScreen'

export default function App() {

    const [comuna, reload] = useComuna()

    let [fontsLoaded] = useFonts({
        Poppins_400Regular
    })


    return (
        <ViewStyled>
            {
                !comuna || !fontsLoaded ? (<LoadingScreen />) : (
                    <Fragment>
                        <Header currentComuna={comuna} onReload={reload}/>
                        <NearestTitle>Comunas Cercanas</NearestTitle>
                        <NearestList comunas={comuna.nearComunas}/>
                    </Fragment>
                )
            }
        </ViewStyled>
    );
}
