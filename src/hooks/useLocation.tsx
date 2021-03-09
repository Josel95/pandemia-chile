import { useState, useEffect } from 'react'

import { Image, PermissionsAndroid } from 'react-native'

import Geolocation, { GeolocationError, GeolocationResponse } from '@react-native-community/geolocation'

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
    const [comunaName, setComunaName] = useState<string | undefined>()

    const [error, setError] = useState(false)

    const [loading, setLoading] = useState(true)

    const requestPermission = async () => {
        return new Promise(async (resolve, reject) => {
            const permission = await checkLocationPermission()
    
            if(permission) {
                resolve(true)
            }
    
            const permissionGranted = await requestLocationPermission()
            if(permissionGranted) {
                resolve(true)
            }

            reject('Permission Denied')
        })
    }
    
    const getPosition = () => {
        return new Promise<Coords>((resolve, reject) => {
            const onSuccess = (position: GeolocationResponse) => {
                resolve({ 
                    latitude: position.coords.latitude, 
                    longitude: position.coords.longitude,
                })
            }

            const onError = () => {
                reject('Location Error')
            }

            Geolocation.getCurrentPosition(onSuccess, onError)
        })
    }

    const execute = async () => {
        try {
            await requestPermission()

            const coords: Coords = await getPosition()

            const comuna = await getComuna(coords)

            setComunaName(comuna)
            
        } catch(error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        execute()
    }, [])

    return { comunaName, error, loading }
}