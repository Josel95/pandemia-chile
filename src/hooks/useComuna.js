import { useState, useEffect } from 'react'

import { firestore } from '../firebase/firestore'

import * as Location from 'expo-location'

import { getComuna } from '../geocoding/getComuna'

const DEFAULT_LOCATION = "santiago"

const getComunaNameByLocation = async () => {
    let { status } = await Location.requestPermissionsAsync()

    if (status !== 'granted') {
        return DEFAULT_LOCATION
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

    const getData = async () => {
        const name = await getComunaNameByLocation()
        if(name){
            getComunaData(name, setComuna)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return [comuna, getData]
}