import { useState, useEffect } from 'react'

import Geolocation from '@react-native-community/geolocation'

import { getComuna } from '../geocoding/getComuna'

import { Coords } from '../types/Coords'

export const useLocation = () => {
    const [coords, setCoords] = useState<Coords | undefined>()

    const [comunaName, setComunaName] = useState<string | undefined>()

    const [error, setError] = useState<string | undefined>()

    useEffect(() => {
        Geolocation.setRNConfiguration({authorizationLevel: 'whenInUse', skipPermissionRequests: false})

        const watchId = Geolocation.watchPosition(
            position => {
                setCoords({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude,
                })
            },
            error => {
                console.log('Ha ocurrido un error obteniendo la posicion')
            },
            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000,
                useSignificantChanges: true
            }
        )

        return () => {
            Geolocation.clearWatch(watchId)
        }
    }, [])

    useEffect(() => {
        (async () => {
            if(coords){
                try {
                    const comuna = await getComuna(coords)
                    setComunaName(comuna)
                } catch (err) {
                    setError(err)
                }
            }
        })()
    }, [coords])

    return { coords, comunaName, error }
}