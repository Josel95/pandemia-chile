import React, { FC } from 'react'

import { ScrollView } from 'react-native'

import { State } from '../../types/State'

import { ComunaList } from '../../components/ComunaList'

import { useSelector } from 'react-redux'

import { styles } from './styles'

export const HomeScreen: FC = () => {

    const comuna = useSelector((state: State) => state.comuna.comuna)

    if(!comuna){
        return (
            <></>
        )
    }

    return (
        <ComunaList comuna={comuna} showCurrent={true}/>
    )
}