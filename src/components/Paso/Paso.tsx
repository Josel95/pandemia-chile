import React, { FC } from 'react'

import { View } from 'react-native'

import { Text } from 'react-native-elements'

import { styles } from './styles'

interface PasoDictionary {
    [key: number]: string
}

const PASOS: PasoDictionary = {
    1: 'Cuarentena',
    2: 'Transición',
    3: 'Preparación',
    4: 'Apertura Inicial',
}

interface Props {
    paso: number
}

export const Paso: FC<Props> = ({ paso }) => {

    const pasoName = PASOS[paso]

    const numberStyle = {
        1: styles.numberPaso1,
        2: styles.numberPaso2,
        3: styles.numberPaso3,
        4: styles.numberPaso4,
    }[paso]

    const textStyle = {
        1: styles.textPaso1,
        2: styles.textPaso2,
        3: styles.textPaso3,
        4: styles.textPaso4,
    }[paso]

    return (
        <View style={styles.container}>
            <Text style={[styles.number, numberStyle]}>{paso}</Text>
            <Text style={[styles.text, textStyle]}>{pasoName}</Text>
        </View>
    )
}