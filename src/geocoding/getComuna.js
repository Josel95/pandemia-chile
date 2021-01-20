import axios from 'axios'

import { key } from './key.json'

export const getComuna = async (coords) => {
    const ltnlng = `${coords.latitude}, ${coords.longitude}`

    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${ltnlng}&key=${key}`

    const { data } = await axios.get(url)

    if(data) {
        const comuna = data.results[0].address_components.find(addressComponent => {
            return addressComponent.types.includes("locality")
        })

        return comuna.short_name
    }

    return undefined
}
