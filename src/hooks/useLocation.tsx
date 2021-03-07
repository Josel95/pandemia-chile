import { useState, useEffect } from 'react'

import { PermissionsAndroid } from 'react-native'

import Geolocation from '@react-native-community/geolocation'

import { getComuna } from '../geocoding/getComuna'

import { Coords } from '../types/Coords'

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

    const [error, setError] = useState<string | undefined>()

    const [permissionGranted, setPermissionGranted] = useState(false)

    useEffect(() => {
        (async () => {
            const permission = await checkLocationPermission()
            if(!permission) {
                const permission = await requestLocationPermission()
                setPermissionGranted(permission)
            }
            setPermissionGranted(permission)
        })()
    }, [])

    useEffect(() => {
        if(permissionGranted){
            const watchId = Geolocation.watchPosition(
                position => {
                    setCoords({
                        longitude: position.coords.longitude,
                        latitude: position.coords.latitude,
                    })
                },
                error => {
                    console.log(error)
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
        }
    }, [permissionGranted])

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