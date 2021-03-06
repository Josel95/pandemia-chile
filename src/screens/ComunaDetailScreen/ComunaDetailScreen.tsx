import React, { FC } from 'react'

import { Text } from 'react-native'

import { useRoute } from '@react-navigation/native'

import { styles } from './styles'

interface RouteProp {
    key: string
    name: string
    params: {
        id: string
    }
}

export const ComunaDetailScreen: FC = () => {
    const { params } = useRoute<RouteProp>()

    return (
        <Text>Comuna {params.id}</Text>
    )
}