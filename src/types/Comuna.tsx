export interface NearComuna {
    id: string
    name: string
    paso: number
}

export interface Comuna {
    id: string
    name: string
    paso: number
    latitude: number
    longitude: number
    activeCases: number
    deathCases: number
    totalCases: number
    nearComunas: NearComuna[] 
}