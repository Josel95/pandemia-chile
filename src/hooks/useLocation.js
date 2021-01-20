import React, { useEffect, useState } from 'react'

import { getComuna } from '../geocoding/getComuna'

import * as Location from 'expo-location'

export const useLocation = () => {
    const [comuna, setComuna] = useState("")
    const [location, setLocation] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync()
            
            if (status !== 'granted') {
                setError('Permission to access location was denied')
                return
            }
            
            let location = await Location.getCurrentPositionAsync({})
            setLocation(location)

            if(location && location.coords) {
                const comuna = await getComuna({
                    latitude: location?.coords?.latitude,
                    longitude: location?.coords?.longitude
                })

                setComuna(comuna)
            }
            
        })()
    }, [])

    return [location, comuna, error]
}