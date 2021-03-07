import React, { FC, useRef, useEffect } from 'react'

import { Text, View, Animated, Easing } from 'react-native'

import { styles } from './styles'

const RotateImage = () => {
    const rotateAnimation = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.loop(
            Animated.timing(
                rotateAnimation,
                {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }
            )
        ).start()

        return () => {
            rotateAnimation.stopAnimation()
        }
    }, [rotateAnimation])

    const rotation = rotateAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    return (
        <Animated.Image
            style={[styles.image, { transform: [{ rotateZ: rotation }] }]}
            source={require('../../assets/images/coronavirus.png')} />
    )
}

export const Loading: FC = () => {

    return (
        <View style={styles.container}>
            <RotateImage />
            <Text style={styles.text}>Cargando</Text>
        </View>
    )
}