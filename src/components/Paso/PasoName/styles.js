import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    height: 72px;
    background-color: ${props => props.background || '#FFFFFF'};
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-left: 10px;
    display: flex;
    justify-content: center;
`
export const Name = styled.Text`
    font-size: 24px;
    color: ${props => props.color || '#FFFFFF'};
    font-family: 'Poppins_400Regular';
`