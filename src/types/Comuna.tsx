interface MiniComuna {
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
    dead: number
    totalCases: number
    nearComunas: MiniComuna[] 
}