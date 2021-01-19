const fs = require('fs')

const rawdata = fs.readFileSync('../data/raw.json')

const comunas = JSON.parse(rawdata)

const convertCoord = (coord) => {
    const regex = /(?<degrees>[-+]?\d+)°(?<minutes>\d+)'(?<seconds>\d+(.\d+)?)"?/
    const match = coord.match(regex)
    if(match){
        const { degrees, minutes, seconds } = match?.groups
        const newCoord = Math.abs(parseInt(degrees)) + (parseInt(minutes) / 60) + (parseInt(seconds) / 3600)
        return newCoord * (Math.abs(degrees) / degrees)
    }

    return undefined
}

const transformed = comunas.map(comuna => {
    const latitude = convertCoord(comuna.latitude)
    const longitude = convertCoord(comuna.longitude)
    
    return {
        ...comuna,
        latitude,
        longitude
    }
})

fs.writeFileSync('out.json', JSON.stringify(transformed, null, 4))