import React, { FC, useRef, useEffect } from 'react'

import { Header as AppBar } from 'react-native-elements'

import { useNavigation } from '@react-navigation/native'

import { Search } from '../Search'

import { styles } from './styles'
import { TextInput } from 'react-native'

interface Props {
    search?: boolean
    onlyTitle?: boolean
}

export const Header: FC<Props> = ({ search = false, onlyTitle = false }) => {

    const navigation = useNavigation()

    const searchInputRef = useRef<TextInput>(null)

    const handleSearchPress = () => {
        navigation.navigate('Search')
    }

    const handleBackPress = () => {
        navigation.goBack()
    }

    const backArrow = {
        icon: 'arrow-back',
        color: '#FFFFFF',
        onPress: handleBackPress
    }

    const searchIcon = {
        icon: 'search',
        color: '#FFFFFF',
        onPress: handleSearchPress
    }

    const title = {
        text: `Pandemia Chile`,
        style: styles.title
    }

    useEffect(() => {
        if(search) {
            searchInputRef.current?.focus()
        }
    }, [search])

    return (
        <AppBar
            containerStyle={styles.container}
            placement="left"
            leftComponent={navigation.canGoBack() && !onlyTitle ? backArrow : undefined}
            centerComponent={!search ? title : <Search ref={searchInputRef}/>}
            rightComponent={!search && !onlyTitle ? searchIcon : undefined}
        />
    )
}