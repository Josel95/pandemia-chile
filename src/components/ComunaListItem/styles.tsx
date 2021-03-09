import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
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