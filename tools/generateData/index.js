/**
 * This script generate the data to upload to firebase
 */

const TOP = 15

const fs = require('fs')

const { getNearLocations } = require('./near')

const rawdata = fs.readFileSync('./data.json')

let { comunas } = JSON.parse(rawdata)

comunas = comunas.map(comuna => {
    const { latitude, longitude } = comuna

    const nearComunas = getNearLocations({ latitude, longitude }, comunas, TOP)

    return {
        ...comuna,
        nearComunas
    }
})

fs.writeFileSync('out.json', JSON.stringify(comunas, null, 4))