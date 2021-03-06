export interface NearComuna {
    id: string
    name: string
    paso: number
    latitude: number
    longitude: number
    activeCases: number
    deadByComuna: number
    totalCases: number
}

export interface Comuna {
    id: string
    name: string
    paso: number
    latitude: number
    longitude: number
    activeCases: number
    deadByComuna: number
    totalCases: number
    nearComunas: NearComuna[] 
}