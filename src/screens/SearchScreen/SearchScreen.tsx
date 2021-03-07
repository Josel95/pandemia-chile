import React, { FC } from 'react'

import { Text, FlatList } from 'react-native'

import { SearchItem } from '../../components/SearchItem'

import { State } from '../../types/State'

import { useSelector } from 'react-redux'

import { comunaCodes } from '../../comunaCodes'

import { styles } from './styles'

export const SearchScreen: FC = () => {
    const searchTerm = useSelector((state: State) => state.search.searchTerm)

    const filteredEntries = Object.entries(comunaCodes).filter(entrie => {
        const comunaName: string = entrie[1]
        return comunaName.toLowerCase().startsWith(searchTerm.toLowerCase())
    })

    return (
        <FlatList 
            data={filteredEntries}
            renderItem={(entrie) => <SearchItem id={entrie.item[0]} name={entrie.item[1]} searchTerm={searchTerm}/>}
            initialNumToRender={15}
            ListEmptyComponent={<Text>No se han encontrado resultados</Text>}
            keyExtractor={(entrie) => entrie[0]}
        />
    )
}