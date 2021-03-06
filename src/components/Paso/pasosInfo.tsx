import { stylesColors, stylesCardColors } from './styles'

export interface PasoDictionary {
    [key: number]: string
}

export interface PasoCardStyle {
    [key: number]: {
        numberContainer: any
        textContainer: any
        text: any
    }
}

export interface PasoStyle {
    [key: number]: {
        number: any
        text: any
    }
}

export const pasosName: PasoDictionary = {
    1: 'Cuarentena',
    2: 'Transición',
    3: 'Preparación',
    4: 'Apertura Inicial',
}

export const pasosStyles: PasoStyle = {
    1: {
        number: stylesColors.numberPaso1,
        text: stylesColors.textPaso1,
    },
    2: {
        number: stylesColors.numberPaso2,
        text: stylesColors.textPaso2,
    },
    3: {
        number: stylesColors.numberPaso3,
        text: stylesColors.textPaso3,
    },
    4: {
        number: stylesColors.numberPaso4,
        text: stylesColors.textPaso4,
    },
}

export const pasosCardStyles: PasoCardStyle = {
    1: {
        numberContainer: stylesCardColors.numberContainerPaso1,
        textContainer: stylesCardColors.textContainerPaso1,
        text: stylesCardColors.textPaso1,
    },
    2: {
        numberContainer: stylesCardColors.numberContainerPaso2,
        textContainer: stylesCardColors.textContainerPaso2,
        text: stylesCardColors.textPaso2,
    },
    3: {
        numberContainer: stylesCardColors.numberContainerPaso3,
        textContainer: stylesCardColors.textContainerPaso3,
        text: stylesCardColors.textPaso3,
    },
    4: {
        numberContainer: stylesCardColors.numberContainerPaso4,
        textContainer: stylesCardColors.textContainerPaso4,
        text: stylesCardColors.textPaso4,
    },
}