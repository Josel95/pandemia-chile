import { useState, useEffect } from 'react'

import { PermissionsAndroid } from 'react-native'

import Geolocation from '@react-native-community/geolocation'

import { getComuna } from '../geocoding/getComuna'

import { Coords } from '../types/Coords'

export enum LocationError {
    PERMISSION_DENIED,
    UNKNOWN
}

const requestLocationPermission = async () => {
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
            title: 'Pandemia Chile',
            message: 'La aplicacion Pandemia Chile requiere acceso a tu ubicación para ofrecerte la mejor experiencia.',
            buttonNeutral: 'Preguntar mas tarde.',
            buttonNegative: 'Cancelar',
            buttonPositive: 'Aceptar',
        }
    )

    return granted === PermissionsAndroid.RESULTS.GRANTED
}

const checkLocationPermission = async () => {
    return await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
}

export const useLocation = () => {
    const [coords, setCoords] = useState<Coords | undefined>()

    const [comunaName, setComunaName] = useState<string | undefined>()

    const [error, setError] = useState<LocationError | undefined>()

    const [loading, setLoading] = useState(false)

    const [permissionGranted, setPermissionGranted] = useState(false)

    useEffect(() => {
        (async () => {
            const permission = await checkLocationPermission()

            if(!permission) {
                const permission = await requestLocationPermission()
                setPermissionGranted(permission)
            } else {
                setPermissionGranted(permission)
            }
        })()
    }, [])

    useEffect(() => {
        let watchId: number

        if(permissionGranted){
            watchId = Geolocation.watchPosition(
                position => {
                    setCoords({
                        longitude: position.coords.longitude,
                        latitude: position.coords.latitude,
                    })
                },
                () => {
                    setError(LocationError.UNKNOWN)
                },
                {
                    enableHighAccuracy: true,
                    timeout: 15000,
                    maximumAge: 10000,
                    useSignificantChanges: true
                }
            )

            setError(undefined)
        } else {
            setError(LocationError.PERMISSION_DENIED)
        }

        return () => {
            Geolocation.clearWatch(watchId)
        }
    }, [permissionGranted])

    useEffect(() => {
        (async () => {
            if(coords){
                try {
                    setLoading(true)
                    const comuna = await getComuna(coords)
                    setComunaName(comuna)
                    setLoading(false)
                } catch {
                    setError(LocationError.UNKNOWN)
                }
            }
        })()
    }, [coords])

    return { coords, comunaName, error, loading }
}