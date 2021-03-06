import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    statContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    statTitle: {
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: 0.15,
    },
    statValue: {
        fontSize: 24,
        lineHeight: 24,
        letterSpacing: 0.15,
    }
})