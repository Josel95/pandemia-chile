import { StyleSheet } from 'react-native'

const CIRCLE_SIZE = 39

export const pasosColors = {
    1: {
        dark: '#991717',
        light: '#F75C5C',
        contrast: '#FFFFFF',
    },
    2: {
        dark: '#BF7200',
        light: '#FFBF00',
        contrast: '#7B4900',
    },
    3: {
        dark: '#A69B00',
        light: '#FFF200',
        contrast: '#756D00',
    },
    4: {
        dark: '#004680',
        light: '#338AD1',
        contrast: '#001F39',
    },
}

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
})

export const stylesColors = StyleSheet.create({
    // Colors paso 1
    numberPaso1: {
        backgroundColor: pasosColors[1].dark,
    },
    textPaso1: {
        color: pasosColors[1].dark,
    },
    // Colors paso 2
    numberPaso2: {
        backgroundColor: pasosColors[2].dark,
    },
    textPaso2: {
        color: pasosColors[2].dark,
    },
    // Colors paso 3
    numberPaso3: {
        backgroundColor: pasosColors[3].dark,
    },
    textPaso3: {
        color: pasosColors[3].dark,
    },
    // Colors paso 4
    numberPaso4: {
        backgroundColor: pasosColors[4].dark,
    },
    textPaso4: {
        color: pasosColors[4].dark,
    },
})

export const stylesCard = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: 344,
        height: 72,
    },
    numberContainer: {
        flex: 23,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pasoText: {
        color: '#FFFFFF',
        fontSize: 13
    },
    number: {
        fontSize: 36,
        color: '#FFFFFF',
    },
    textContainer: {
        flex: 77,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    text: {
        fontSize: 24,
    }
})

export const stylesCardColors = StyleSheet.create({
    // Paso 1
    numberContainerPaso1: {
        backgroundColor: pasosColors[1].dark,
    },
    textContainerPaso1: {
        backgroundColor: pasosColors[1].light,
    },
    textPaso1: {
        color: pasosColors[1].contrast,
    },
    // Paso 2
    numberContainerPaso2: {
        backgroundColor: pasosColors[2].dark,
    },
    textContainerPaso2: {
        backgroundColor: pasosColors[2].light,
    },
    textPaso2: {
        color: pasosColors[2].contrast,
    },
    // Paso 3
    numberContainerPaso3: {
        backgroundColor: pasosColors[3].dark,
    },
    textContainerPaso3: {
        backgroundColor: pasosColors[3].light,
    },
    textPaso3: {
        color: pasosColors[3].contrast,
    },
    // Paso 4
    numberContainerPaso4: {
        backgroundColor: pasosColors[4].dark,
    },
    textContainerPaso4: {
        backgroundColor: pasosColors[4].light,
    },
    textPaso4: {
        color: pasosColors[4].contrast,
    },
})