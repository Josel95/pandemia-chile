import React, { FC } from 'react'

import { View } from 'react-native'

import { Card, Icon, Text } from 'react-native-elements'

import { Paso } from '../Paso'

import { styles } from './styles'

interface Props {
    comuna: string
    paso: number
    isCurrentLocation: boolean
}

export const ComunaListItem: FC<Props> = ({ comuna, paso, isCurrentLocation }) => {
    return (
        <Card containerStyle={styles.card} wrapperStyle={styles.container}>
            <View style={styles.name}>
                <Text style={styles.text}>{ comuna }</Text>
                {
                    isCurrentLocation && <Icon name="place"/>
                }
            </View>
            <View>
                <Paso paso={paso}/>
            </View>
        </Card>
    )
}