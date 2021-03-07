import React, { FC, Fragment, useEffect, useState } from 'react'

import { Text, View } from 'react-native'

import { useRoute } from '@react-navigation/native'

import { useSelector } from 'react-redux'

import { State } from '../../types/State'

import { Comuna } from '../../types/Comuna'

import { ComunaDetailHeader } from '../../components/ComunaDetailHeader'

import { QuarantineDays } from '../../components/QuarantineDays'

import { Stats } from '../../components/Stats'

import { ComunaList } from '../../components/ComunaList'

import { useComuna } from '../../hooks/useComuna'

import { comunaCodes } from '../../comunaCodes'

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

    const { comuna, getComunaData } = useComuna()

    const comunaStore = useSelector((state: State) => state.comuna.comuna)

    const [selectedComuna, setSelectedComuna] = useState<Comuna | undefined>(undefined)

    useEffect(() => {
        if(comunaStore?.id === params.id) {
            setSelectedComuna(comunaStore)
        }
    }, [])

    useEffect(() => {
        const comunaName = comunaCodes[+params.id].toLowerCase()
        getComunaData(comunaName)
    }, [params])

    useEffect(() => {
        if(comuna) {
            setSelectedComuna(comuna)
        }
    }, [comuna])

    if(!selectedComuna) {
        return <Text>Ha ocurrido un error</Text>
    }

    return (
        <Fragment>
            <ComunaDetailHeader 
                comunaName={selectedComuna.name} 
                paso={selectedComuna.paso} 
                isCurrentLocation={selectedComuna.id === comunaStore?.id} />
    
            <View style={styles.quarantineDaysContainer}>
                <QuarantineDays paso={selectedComuna.paso} />
            </View>

            <View style={styles.statsContainer}>
                <Stats 
                    deaths={selectedComuna.deadByComuna}
                    active={selectedComuna.activeCases}
                    total={selectedComuna.totalCases} />
            </View>

            <View style={styles.nearComunasContainer}>
                <Text style={styles.nearComunasTitle}>Comunas Cercanas</Text>
                <ComunaList comuna={selectedComuna}/>
            </View>
        </Fragment>
    )
}