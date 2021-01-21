import React from 'react'

import { ItemContainer, ItemName, PasoContainer, PasoTextRegular, PasoTextSmall, Divider, Row } from './styles'

import colors from '../Paso/colors.json'

import names from '../Paso/names.json'

export const NearestListItem = ({ comuna }) => {

    const { numberBackground: color } = colors[comuna.paso]

    return (
        <ItemContainer color={color}>
            <Row>
                <ItemName>
                    {comuna.name}
                </ItemName>
                
                <PasoContainer>
                    <PasoTextSmall color={color}>Paso {comuna.paso}</PasoTextSmall>
                    <PasoTextRegular color={color}>{names[comuna.paso]}</PasoTextRegular>
                </PasoContainer>
            </Row>
            <Divider />
        </ItemContainer>
    )
} 