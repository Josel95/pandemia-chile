import React, { FC } from 'react'

import { View } from 'react-native'

import { State } from '../../types/State'

import { ComunaList } from '../../components/ComunaList'

import { useSelector } from 'react-redux'

import { styles } from './styles'

export const HomeScreen: FC = () => {

    const comuna = useSelector((state: State) => state.comuna.comuna)

    const isCurrentComuna = useSelector((state: State) => state.comuna.isCurrentComuna)

    if(!comuna){
        return (
            <></>
        )
    }

    return (
        <View style={styles.container} >
            <ComunaList comuna={comuna} isCurrentLocation={isCurrentComuna} showCurrent={true}/>
        </View>
    )
}