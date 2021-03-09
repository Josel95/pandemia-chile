import React, { FC, Fragment, useEffect, useState } from 'react'

import { Text, View } from 'react-native'

import { useRoute, useNavigation } from '@react-navigation/native'

import { useSelector } from 'react-redux'

import { State } from '../../types/State'

import { Comuna } from '../../types/Comuna'

import { ComunaDetailHeader } from '../../components/ComunaDetailHeader'

import { QuarantineDays } from '../../components/QuarantineDays'

import { Stats } from '../../components/Stats'


import { ComunaList } from '../../components/ComunaList'

import { Loading } from '../../components/Loading'

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

    const navigation = useNavigation()

    const { comuna, error, loading, isCurrent, getComuna } = useComuna()

    useEffect(() => {
        if(loading) {
            return
        }

        if(error) {
            navigation.navigate('Error')
            return
        }
    }, [error, loading])

    useEffect(() => {
        const comunaName = comunaCodes[+params.id].toLowerCase()
        getComuna(comunaName)
    }, [params])

    if(loading || !comuna) {
        return <Loading />
    }

    return (
        <Fragment>
            <ComunaDetailHeader 
                comunaName={comuna.name} 
                paso={comuna.paso} 
                isCurrentLocation={isCurrent} />
    
            <View style={styles.quarantineDaysContainer}>
                <QuarantineDays paso={comuna.paso} />
            </View>

            <View style={styles.statsContainer}>
                <Stats 
                    deaths={comuna.deadByComuna}
                    active={comuna.activeCases}
                    total={comuna.totalCases} />
            </View>

            <View style={styles.nearComunasContainer}>
                <Text style={styles.nearComunasTitle}>Comunas Cercanas</Text>
                <ComunaList comuna={comuna}/>
            </View>
        </Fragment>
    )
}