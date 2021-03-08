import React, { FC, useEffect } from 'react'

import { View } from 'react-native'

import { useDispatch } from 'react-redux'

import { useNavigation } from '@react-navigation/native'

import { useLocation, LocationError } from '../../hooks/useLocation'

import { useComuna } from '../../hooks/useComuna'

import { setComuna } from '../../redux/actions/comunasActions'

import { Loading } from '../../components/Loading'

import { defaults } from '../../defaults'

import { styles } from './styles'

export const SplashScreen: FC = () => {
    const dispatch = useDispatch()

    const navigation = useNavigation()

    const { comunaName, error: locationError, loading: loadingLocation } = useLocation()

    const { comuna, getComunaData, error: errorComuna, loading: loadingComuna, usedDefault } = useComuna(defaults.DEFAULT_COMUNA)

    useEffect(() => {
        if(!loadingLocation) {
            if(comunaName) {
                getComunaData(comunaName)
            }
        }
    }, [comunaName, loadingLocation])

    useEffect(() => {
        if(comuna) {
            dispatch(setComuna(comuna, !usedDefault))
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
    }, [loadingLocation, loadingComuna, comuna])

    useEffect(() => {
        if(errorComuna) {
            navigation.navigate('Error')
        }
    }, [errorComuna])

    return (
        <Loading />
    )
}