import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    card: {
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    text: {
        fontSize: 20,
        letterSpacing: 0.15,
        lineHeight: 24,
        color: "#000",
    },
    name: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
})