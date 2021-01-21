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
    const φ1 = lat1 * Math.PI / 180 // φ, λ in radians
    const φ2 = lat2 * Math.PI / 180
    const Δφ = (lat2 - lat1) * Math.PI / 180
    const Δλ = (lon2 - lon1) * Math.PI / 180

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

    const d = R * c // in metres

    return d
}

const getNearLocations = (currentLocation, locations, top = 10) => {
    const currentCoords = { latitude: currentLocation.latitude, longitude: currentLocation.longitude }

    const sorted = locations.sort((a, b) => {
        const aCoords = { latitude: a.latitude, longitude: a.longitude }
        const bCoords = { latitude: b.latitude, longitude: b.longitude }

        return calculateHaversine(currentCoords, aCoords) - calculateHaversine(currentCoords, bCoords)
    })

    const sliced = sorted.slice(1, top + 1)

    return sliced
}

module.exports = {
    getNearLocations
}