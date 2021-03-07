import React, { FC } from 'react'

import { ScrollView } from 'react-native'

import { ComunaListItem } from '../ComunaListItem'

import { Comuna, NearComuna } from '../../types/Comuna'

import { styles } from './styles'

interface Props {
    comuna: Comuna,
    isCurrentLocation?: boolean
    showCurrent?: boolean
}

export const ComunaList: FC<Props> = ({ comuna, isCurrentLocation = false, showCurrent = false }) => {

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {
                showCurrent &&
                <ComunaListItem id={comuna.id} comuna={comuna.name} paso={comuna.paso} isCurrentLocation={isCurrentLocation} />
            }
            {
                comuna.nearComunas.map(nearComuna => 
                    <ComunaListItem key={nearComuna.id} id={nearComuna.id} comuna={nearComuna.name} paso={nearComuna.paso} isCurrentLocation={false} />)
            }
        </ScrollView>
    )
}