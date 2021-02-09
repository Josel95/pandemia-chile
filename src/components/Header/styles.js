import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    height: 40%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 23px 32px 50px 32px;
    background-color: #03A9F4;
    display: flex;
    justify-content: space-between;
`

export const HeaderTitle = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ComunaText = styled.Text`
    font-size: 18px;
    color: #B3E5FC;
    font-family: 'Poppins_400Regular';
`

export const ComunaName = styled.Text`
    font-size: 36px;
    color: #ffffff;
    font-family: 'Poppins_400Regular';
`