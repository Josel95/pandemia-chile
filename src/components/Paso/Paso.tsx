import React, { FC } from 'react'

import { View } from 'react-native'

import { Text } from 'react-native-elements'

import { pasosName, pasosStyles } from './pasosInfo'

import { styles } from './styles'

interface Props {
    paso: number
}

export const Paso: FC<Props> = ({ paso }) => {

    const pasoName = pasosName[paso]

    const style = pasosStyles[paso]

    return (
        <View style={styles.container}>
            <Text style={[styles.number, style.number]}>{paso}</Text>
            <Text style={[styles.text, style.text]}>{pasoName}</Text>
        </View>
    )
}