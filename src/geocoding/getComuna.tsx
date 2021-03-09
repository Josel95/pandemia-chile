import axios from 'axios'

import { key } from '../secrets/geocoding.json'

import { Coords } from '../types/Coords'

export const getComuna = async (coords: Coords) => {
    return new Promise<string>(async (resolve, reject) => {
        const ltnlng = `${coords.latitude}, ${coords.longitude}`
    
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${ltnlng}&key=${key}`
    
        try {
            const { data } = await axios.get(url)
    
            if(data) {
                const country = data.results[0].address_components.find((addressComponent: any) => {
                    return addressComponent.types.includes("country")
                })
    
                if(country.short_name !== 'CL') {
                    reject('Not Chile')
                }
    
                const comuna = data.results[0].address_components.find((addressComponent: any) => {
                    return addressComponent.types.includes("administrative_area_level_3")
                })
        
                resolve(comuna.short_name)
            }
        } catch {
            reject('Get comuna Error')
        }
    })
}