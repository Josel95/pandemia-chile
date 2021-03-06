import { StyleSheet } from 'react-native'

const CIRCLE_SIZE = 39

export const styles = StyleSheet.create({
    container: {
        width: 64,
        height: 61,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    number: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#03A8F4', // Default color
        color: '#FFFFFF',
        fontSize: 20,
        marginBottom: 5,
    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 10,
    },
    // Colors paso 1
    numberPaso1: {
        backgroundColor: '#991717',
    },
    textPaso1: {
        color: '#991717',
    },
    // Colors paso 2
    numberPaso2: {
        backgroundColor: '#BF7200',
    },
    textPaso2: {
        color: '#BF7200',
    },
    // Colors paso 3
    numberPaso3: {
        backgroundColor: '#A69B00',
    },
    textPaso3: {
        color: '#A69B00',
    },
    // Colors paso 4
    numberPaso4: {
        backgroundColor: '#004680',
    },
    textPaso4: {
        color: '#004680',
    },
})