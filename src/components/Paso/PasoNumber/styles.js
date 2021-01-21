import styled from 'styled-components/native'

export const Container = styled.View`
    width: 80px;
    height: 72px;
    background-color: ${props => props.background || '#FFFFFF'};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const PasoText = styled.Text`
    color: ${props => props.color || '#FFFFFF'};
    font-family: 'Poppins_400Regular';
`

export const Number = styled.Text`
    font-size: 36px;
    line-height: 40px;
    color: ${props => props.color || '#FFFFFF'};
    font-family: 'Poppins_400Regular';
`
