import React, { FC } from 'react'

import { View } from 'react-native'

import { Text } from 'react-native-elements'

import { pasosName, pasosCardStyles } from './pasosInfo'

import { stylesCard } from './styles'

interface Props {
    paso: number
}

export const PasoCard: FC<Props> = ({ paso }) => {

    const pasoName = pasosName[paso]

    const styles = pasosCardStyles[paso]

    return (
        <View style={stylesCard.container}>
            <View style={[stylesCard.numberContainer, styles.numberContainer]}>
                <Text style={stylesCard.pasoText}>Paso</Text>
                <Text style={stylesCard.number}>{paso}</Text>
            </View>
            <View style={[stylesCard.textContainer, styles.textContainer]}>
                <Text style={[stylesCard.text, styles.text]}>{pasoName}</Text>
            </View>
        </View>
    )
}