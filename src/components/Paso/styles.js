import styled from 'styled-components/native'

export const View = styled.View`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 90%;
    height: 72px;
    margin-top: 20px;
    background-color: aqua;
`

export const PasoView = styled.View`
    background-color: ${props => props.backgroundColor || "#991717"};
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TitleView = styled.View`
    background-color: ${props => props.backgroundColor || "#F75C5C"};
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-left: 20px;
`

export const TextNormal = styled.Text`
    color: ${props => props.fontColor || "#FFFFFF"};
    font-size: 25px;
    font-family: 'Poppins_400Regular';
`

export const TextBig = styled.Text`
    color: #FFFFFF;
    font-size: 36px;
    font-family: 'Poppins_400Regular';
`