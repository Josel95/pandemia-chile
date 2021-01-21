import styled from 'styled-components/native'

export const Scroll = styled.ScrollView`
    width: 100%;
`

export const ItemContainer = styled.View`
    height: 90px;
    border-style: solid;
    border-left-width: 9px;
    border-left-color: ${props => props.color};
    padding-left: 10px;
    padding-right: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #FFFFFF;
`

export const Row = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Divider = styled.View`
    height: 1px;
    width: 70%;
    background-color: #BDBDBD20;
    position: absolute;
    bottom: 0;
`

export const ItemName = styled.Text`
    color: #212121;
    width: 60%;
    font-size: 24px;
    font-family: 'Poppins_400Regular';
`

export const PasoContainer = styled.View`
    width: 40%;
`

export const PasoText = styled.Text`
    line-height: 20px;
    font-family: 'Poppins_400Regular';
`

export const PasoTextSmall = styled(PasoText)`
    font-size: 14px;
    color: ${props => props.color};
`

export const PasoTextRegular = styled(PasoText)`
    font-size: 18px;
    color: ${props => props.color};
` 