import React, { FC, useEffect, useState } from 'react'

import { Text } from 'react-native'

import { useRoute } from '@react-navigation/native'

import { useSelector } from 'react-redux'

import { State } from '../../types/State'

import { Comuna, NearComuna } from '../../types/Comuna'

import { ComunaDetailHeader } from '../../components/ComunaDetailHeader'

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

    const comuna = useSelector((state: State) => state.comuna.comuna)

    const [selectedComuna, setSelectedComuna] = useState<Comuna | NearComuna | undefined>(undefined)

    useEffect(() => {
        if(comuna && comuna?.id !== params.id) {
            const comunaFound = comuna.nearComunas.find(comuna => {
                return comuna.id === params.id
            })
            setSelectedComuna(comunaFound)
        }

        if(comuna?.id === params.id) {
            setSelectedComuna(comuna)
        }
    }, [])

    if(!selectedComuna) {
        return <Text>Ha ocurrido un error</Text>
    }

    return (
        <ComunaDetailHeader 
            comunaName={selectedComuna.name} 
            paso={selectedComuna.paso} 
            isCurrentLocation={false} />
    )
}