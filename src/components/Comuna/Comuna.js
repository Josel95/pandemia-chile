import React from 'react'

import { TextComunaName, View, TextTitle } from './styles'

export const Comuna = ({
    comuna
}) => {
    return (
        <View>
            <TextTitle>Comuna</TextTitle>
            <TextComunaName>{comuna}</TextComunaName>
        </View>
    )
} 