import React from 'react'

import { View, PasoView, TextBig, TitleView, TextNormal } from './styles'

import { PASOS } from './data'

export const Paso = ({
    paso
}) => {

    const pasoData = PASOS[paso]

    if(!pasoData){
        return null
    }

    return (
        <View>
            <PasoView backgroundColor={pasoData.backgroundDark}>
                <TextBig fontColor={pasoData.font}>{paso}</TextBig>
            </PasoView>
            <TitleView backgroundColor={pasoData.background}>
                <TextNormal fontColor={pasoData.fontTitle}>{pasoData.name}</TextNormal>
            </TitleView>
        </View>
    )
} 