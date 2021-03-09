import React, { FC } from 'react'

import { ListItem } from 'react-native-elements'

import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'
import { Text } from 'react-native'

interface Props {
    id: string
    name: string
    searchTerm: string
}

export const SearchItem: FC<Props> = ({ id, name, searchTerm }) => {

    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate('ComunaDetail', { id })
    }

    const restName = name.substr(searchTerm.length, name.length)

    return (
        <ListItem key={id} bottomDivider onPress={handlePress}>
            <ListItem.Content>
                <Text>
                    <Text style={[styles.text, styles.bold, styles.capitalize]}>{searchTerm}</Text>
                    <Text style={styles.text}>{restName}</Text>
                </Text>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    )
}