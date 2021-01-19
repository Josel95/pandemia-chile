import data from '../../data/test.json'

/**
 * Calculate distances between two coordinates on spherical earth
 * https://www.movable-type.co.uk/scripts/latlong.html
 */
const calculateHaversine = (locationA, locationB) => {
    const lat1 = locationA.latitude
    const lat2 = locationB.latitude

    const lon1 = locationA.longitude
    const lon2 = locationB.longitude

    const R = 6371e3 // metres
    const φ1 = lat1 * Math.PI/180 // φ, λ in radians
    const φ2 = lat2 * Math.PI/180
    const Δφ = (lat2-lat1) * Math.PI/180
    const Δλ = (lon2-lon1) * Math.PI/180

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))

    const d = R * c // in metres

    return d
}

export const getNearbyComunas = (location, top = 10) => {
    let comunas = [...data.map(comuna => {
        const { latitude, longitude } = comuna

        const locationB = {latitude, longitude}

        const distance = calculateHaversine(location, locationB)

        if(isNaN(distance)) {
            console.log(comuna)
        }

        return {
            ...comuna,
            distance
        }
    })]

    return comunas.sort((a, b) => a.distance > b.distance).slice(0, top)
}