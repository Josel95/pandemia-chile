import React, { FC } from 'react'

import { View, TouchableOpacity } from 'react-native'

import { ListItem, Icon, Text } from 'react-native-elements'

import { useNavigation } from '@react-navigation/native'

import { Paso } from '../Paso'

import { styles } from './styles'

interface Props {
    id: string
    comuna: string
    paso: number
    isCurrentLocation: boolean
}

export const ComunaListItem: FC<Props> = ({ id, comuna, paso, isCurrentLocation }) => {
    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate('ComunaDetail', { id })
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <ListItem bottomDivider containerStyle={styles.container}>
                <View style={styles.name}>
                    <Text style={styles.text}>{ comuna }</Text>
                    {
                        isCurrentLocation && <Icon name="place"/>
                    }
                </View>
                <View>
                    <Paso paso={paso}/>
                </View>
            </ListItem>
        </TouchableOpacity>
    )
}