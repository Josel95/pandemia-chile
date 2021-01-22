import { useState, useEffect } from 'react'

import { firestore } from '../firebase/firestore'

import * as Location from 'expo-location'

import { getComuna } from '../geocoding/getComuna'

import { BackHandler } from 'react-native'

const getComunaNameByLocation = async () => {
    /**
     * TODO: Request permission in another component, maybe App file.
     * The app shouldn't work if permission has not granted
     */
    let { status } = await Location.requestPermissionsAsync()

    if (status !== 'granted') {
        BackHandler.exitApp()
        return
    }

    let location = await Location.getCurrentPositionAsync({})

    if (location && location.coords) {
        const comuna = await getComuna({
            latitude: location?.coords?.latitude,
            longitude: location?.coords?.longitude
        })

        return comuna
    }
}

const getComunaData = (name, setComuna) => {
    if(!name){
        console.error("No name in getComuna")
        return
    }
    
    const documentRef = firestore.collection('comunas').doc(name.toLowerCase())
    
    documentRef.get().then(document => {
        if (document.exists) {
            setComuna(document.data())
        }
    })
}

export const useComuna = () => {
    const [comuna, setComuna] = useState()

    useEffect(() => {
        (async () => {
            const name = await getComunaNameByLocation()
            if(name){
                getComunaData(name, setComuna)
            }
        })()
    }, [])

    return comuna
}