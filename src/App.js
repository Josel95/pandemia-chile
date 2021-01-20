import React, { useState, useEffect } from 'react';

import levenshtein from 'js-levenshtein'

import { ViewStyled, CurrentComuna, NearbyComunas, NearbyComunasTitle } from './styles'

import { Comuna } from './components/Comuna/Comuna'

import { Paso } from './components/Paso/Paso'

import { ComunaList } from './components/ComunaList/ComunaList'

import { useLocation } from './hooks/useLocation'

import { getNearbyComunas } from './utils/getNearbyComuna'

import { useComunas }  from './hooks/useComunas'

export default function App() {

    const [location, comuna] = useLocation()

    const [coords, setCoords] = useState({})

    const [nearbyComunas, setNearbyComunas] = useState([])

    const [currentComuna, setCurrentComuna] = useState({})

    const comunas = useComunas()

    useEffect(() => {
        if (location) {
            const { latitude, longitude } = location?.coords
            setCoords({
                latitude,
                longitude
            })
        }
    }, [location])

    useEffect(() => {
        if(comunas) {
            const sortedComunas = comunas.sort((a, b) => {
                return levenshtein(a.name, comuna) > levenshtein(b.name, comuna)
            })

            setCurrentComuna(sortedComunas[0])
        }
    }, [comuna])

    useEffect(() => {
        if(currentComuna){
            const coordCurrentComuna = {
                latitude: currentComuna.latitude,
                longitude: currentComuna.longitude
            }
    
            const nearby = getNearbyComunas(comunas, coordCurrentComuna, 20)
            nearby.shift()
            setNearbyComunas(nearby)
        }
    }, [currentComuna, comunas, coords])

    return (
        <ViewStyled>
            <CurrentComuna>
                <Comuna comuna={(currentComuna && currentComuna.name) || "Cargando"} />
                <Paso paso={(currentComuna && currentComuna.paso) || 0} />
            </CurrentComuna>

            <NearbyComunas>
                <NearbyComunasTitle>Comunas cercanas</NearbyComunasTitle>
                <ComunaList comunas={nearbyComunas}/>
            </NearbyComunas>
        </ViewStyled>
    );
}
