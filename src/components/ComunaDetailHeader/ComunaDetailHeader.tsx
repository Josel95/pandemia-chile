import React, { FC } from 'react'

import { View } from 'react-native'

import { Text, Icon } from 'react-native-elements'

import { PasoCard } from '../Paso'

import { styles } from './styles'

interface Props {
    comunaName: string
    paso: number
    isCurrentLocation: boolean
}

export const ComunaDetailHeader: FC<Props> = ({ comunaName, paso, isCurrentLocation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.comunaNameContainer}>
                <Text style={styles.comunaName}>{ comunaName }</Text>
                {
                    isCurrentLocation && 
                    <Icon name="place" color='rgba(255, 255, 255, 0.87)'/>
                }
            </View>
            <View style={styles.pasoCardContainer}>
                <PasoCard paso={paso}/>
            </View>
        </View>
    )
}