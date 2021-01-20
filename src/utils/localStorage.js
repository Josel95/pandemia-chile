import AsyncStorage from '@react-native-async-storage/async-storage'

const storeData = (key, data) => {
    return AsyncStorage.setItem(key, data)
}

const getData = (key) => {
    return AsyncStorage.getItem(key)
}

export const storeComunas = (comunas) => {
    const stringified = JSON.stringify(comunas)
    return storeData("@storage_comunas", stringified)
}

export const getStoredComunas = () => {
    return getData("@storage_comunas")
}

export const storeLastDownloaded = () => {    
    const date = (new Date()).toISOString()
    return storeData("@storage_last_downloaded", date)
}

export const getStoredLastDownloaded = () => {
    return getData("@storage_last_downloaded")
}