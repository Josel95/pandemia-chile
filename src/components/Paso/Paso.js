import React from 'react'

import { View, PasoView, TextBig, TitleView, TextNormal } from './styles'

import { PASOS } from './data'

export const PasoNumber = ({ paso }) => {

    const background = PASOS[paso].backgroundDark || "#FFFFFF"

    const font = PASOS[paso].font || "#000000"

    return (
        <PasoView backgroundColor={background}>
            <TextBig fontColor={font}>{paso}</TextBig>
        </PasoView>
    )
}

export const PasoTitle = ({ paso }) => {

    const name = PASOS[paso].name || ""

    const background = PASOS[paso].background || "#FFFFFF"

    const fontColor = PASOS[paso].fontTitle || "#000000"

    return (
        <TitleView backgroundColor={background}>
            <TextNormal fontColor={fontColor}>{name}</TextNormal>
        </TitleView>
    )
}

export const Paso = ({
    paso
}) => {

    const pasoData = PASOS[paso]

    if (!pasoData) {
        return null
    }

    return (
        <View>
            <PasoNumber paso={paso} />
            <PasoTitle paso={paso} />
        </View>
    )
} 