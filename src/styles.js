import styled from 'styled-components'

export const ViewStyled = styled.View`
    display: flex;
    align-items: center;
    padding-top: 50px;
    height: 100%;
    /* background-color: salmon; */
`

export const CurrentComuna = styled.View`
    flex: 30%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: purple; */
`

export const NearbyComunas = styled.View`
    flex: 70%;
    width: 100%;
    display: flex;
    align-items: center;
    /* background-color: pink; */
`

export const NearbyComunasTitle = styled.Text`
    font-size: 27px;
    padding: 15px 0;
    font-family: 'Poppins_400Regular';
`