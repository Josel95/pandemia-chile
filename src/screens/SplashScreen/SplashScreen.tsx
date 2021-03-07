import React, { FC, useEffect } from 'react'

import { Text, View } from 'react-native'

import { useDispatch } from 'react-redux'

import { useNavigation } from '@react-navigation/native'

import { useLocation, LocationError } from '../../hooks/useLocation'

import { useComuna } from '../../hooks/useComuna'

import { setComuna } from '../../redux/actions/comunasActions'

import { styles } from './styles'

const DEFAULT_COMUNA = 'santiago'

export const SplashScreen: FC = () => {
    const dispatch = useDispatch()

    const navigation = useNavigation()

    const { comunaName, error: locationError, loading: loadingLocation } = useLocation()

    const { comuna, getComunaData, loading: loadingComuna } = useComuna()

    useEffect(() => {
        getComunaData(comunaName || DEFAULT_COMUNA)
    }, [comunaName])

    useEffect(() => {
        if(comuna) {
            dispatch(setComuna(comuna, locationError !== LocationError.PERMISSION_DENIED))
        }
    }, [comuna])

    useEffect(() => {
        if(!loadingComuna && !loadingLocation && comuna) {
            navigation.navigate('Home')
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }]
            })
        }
    }, [loadingLocation, loadingComuna])

    return (
        <View style={styles.container} >
            <Text>Cargando...</Text>
        </View>
    )
}