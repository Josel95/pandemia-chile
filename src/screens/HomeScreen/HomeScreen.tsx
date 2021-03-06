import React, { FC } from 'react'

import { ComunaListItem } from '../../components/ComunaListItem'

import { styles } from './styles'

export const HomeScreen: FC = () => {

    return (
        <ComunaListItem comuna='Pedro Aguirre Cerda' paso={2} isCurrentLocation={true} />
    )
}