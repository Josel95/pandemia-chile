import React, { FC } from 'react'

import { View, Text } from 'react-native'

import { styles } from './styles'

interface Props {
    deaths: number
    active: number
    total: number
}

export const Stats: FC<Props> = ({ deaths, active, total }) => {

    const stats = [
        { title: 'Fallecidos', value: deaths },
        { title: 'Activos', value: active },
        { title: 'Totales', value: total },
    ]

    return (
        <View style={styles.container}>
            {
                stats.map((stat, index) => (
                    <View key={`${index}`} style={styles.statContainer}>
                        <Text style={styles.statTitle}>{stat.title}</Text>
                        <Text style={styles.statValue}>{stat.value}</Text>
                    </View>
                ))
            }
        </View>
    )
}