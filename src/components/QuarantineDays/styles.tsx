import { StyleSheet } from 'react-native'

const CIRCLE_SIZE = 37

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    day: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: 0.15,
        color: '#FFFFFF',
        backgroundColor: '#4CAF50',
    },
    redDay: {
        backgroundColor: '#F44336',
    },
    greenDay: {
        backgroundColor: '#4CAF50',
    }
})