import React, { FC, useEffect } from 'react'

import { View } from 'react-native'

import { useDispatch } from 'react-redux'

import { useNavigation } from '@react-navigation/native'

import { useLocation, LocationError } from '../../hooks/useLocation'

import { useComuna } from '../../hooks/useComuna'

import { setComuna } from '../../redux/actions/comunasActions'

import { Loading } from '../../components/Loading'

import { styles } from './styles'

export const SplashScreen: FC = () => {
    const dispatch = useDispatch()

    const navigation = useNavigation()

    const { comunaName, error: errorLocation, loading: loadingLocation } = useLocation()

    const { comuna, error: errorComuna, loading: loadingComuna, usedDefault, getComuna } = useComuna()

    useEffect(() => {
        if(loadingLocation) {
            return
        }

        if(errorLocation) {
            getComuna()
            return
        }

        if(comunaName) {
            getComuna(comunaName)
        }
    }, [comunaName, errorLocation, loadingLocation])

    useEffect(() => {
        if(loadingComuna) {
            return
        }

        if(errorComuna) {
            navigation.navigate('Error')
            return
        }

        if(comuna) {
            dispatch(setComuna(comuna, !usedDefault))
            navigation.navigate('Home')
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }]
            })
        }

    }, [comuna, errorComuna, loadingComuna])

    return (
        <Loading />
    )
}