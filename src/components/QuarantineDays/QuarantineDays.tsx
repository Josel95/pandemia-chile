import React, { FC } from 'react'

import { View, Text } from 'react-native'

import { styles } from './styles'

interface Props {
    paso: number
}

export const QuarantineDays: FC<Props> = ({ paso }) => {

    const daysStyles = [
        styles.day, 
        paso === 1 ? styles.redDay : styles.greenDay
    ]

    const weekendStyles = [
        styles.day,
        paso === 1 || paso === 2 ? styles.redDay : styles.greenDay
    ]

    return (
        <View style={styles.container}>
            <Text style={daysStyles}>L</Text>
            <Text style={daysStyles}>M</Text>
            <Text style={daysStyles}>M</Text>
            <Text style={daysStyles}>J</Text>
            <Text style={daysStyles}>V</Text>
            <Text style={weekendStyles}>S</Text>
            <Text style={weekendStyles}>D</Text>
        </ View>
    )
}