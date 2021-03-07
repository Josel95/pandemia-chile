import React, { forwardRef, useEffect } from 'react'

import { TextInput } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'

import { State } from '../../types/State'

import { setSearchTerm } from '../../redux/actions/searchActions'

import { styles } from './styles'

export const Search = forwardRef<TextInput>((_, ref) => {

    const dispatch = useDispatch()

    const storedSearchTerm = useSelector((state: State) => state.search.searchTerm)

    const handleChangeText = (term: string) => {
        dispatch(setSearchTerm(term))
    }

    useEffect(() => {
        return () => {
            dispatch(setSearchTerm(''))
        }
    }, [])

    return (
        <TextInput
            ref={ref}
            placeholder={'Buscar una comuna'} 
            placeholderTextColor='rgba(255,255,255,0.87)'
            onChangeText={handleChangeText}
            value={storedSearchTerm}
            style={styles.input}/>
    )
})