import React, { FC } from 'react'

import { Header as AppBar } from 'react-native-elements'

import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'

export const Header: FC = () => {

    const navigation = useNavigation()

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

    return (
        <AppBar
            containerStyle={styles.container}
            placement="left"
            leftComponent={navigation.canGoBack() ? backArrow : undefined}
            centerComponent={{ text: 'Pandemia Chile', style: styles.title }}
            rightComponent={{ icon: 'search', color: '#FFFFFF', onPress: handleSearchPress }}
        />
    )
}