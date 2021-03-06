import React, { FC } from 'react'

import { ScrollView } from 'react-native'

import { State } from '../../types/State'

import { ComunaListItem } from '../../components/ComunaListItem'

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
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <ComunaListItem comuna={comuna.name} paso={comuna.paso} isCurrentLocation />
            {
                comuna.nearComunas.map(nearComuna => 
                    <ComunaListItem key={nearComuna.id} comuna={nearComuna.name} paso={nearComuna.paso} isCurrentLocation={false} />)
            }
        </ScrollView>
    )
}