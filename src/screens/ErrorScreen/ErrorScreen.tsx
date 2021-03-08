import React, { FC, useEffect } from 'react'

import { useNavigation } from '@react-navigation/native'

import { Text, View, Image } from 'react-native'

import { Button } from 'react-native-elements'

import { styles } from './styles'

export const ErrorScreen: FC = () => {

    const navigation = useNavigation()

    const handleRetry = () => {
        navigation.navigate('Splash')
        navigation.reset({
            index: 0,
            routes: [{ name: 'Splash' }]
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.margin}>
                <Image 
                    style={styles.image} 
                    source={require('../../assets/images/coronavirus-error.png')} />
            </View>
            <View style={styles.margin}>
                <Text style={styles.text}>Ha ocurrido un error</Text>
            </View>
            <View style={styles.margin}>
                <Button title="Reintentar" onPress={handleRetry}/>
            </View>
        </View>
    )
}