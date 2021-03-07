import React, { FC } from 'react'

import { Text } from 'react-native'

import { State } from '../../types/State'

import { useSelector } from 'react-redux'

import { styles } from './styles'

export const SearchScreen: FC = () => {

    const searchTerm = useSelector((state: State) => state.search.searchTerm)

    return (
        <Text>{searchTerm}</Text>
    )
}