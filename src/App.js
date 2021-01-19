import React, { useState, useEffect } from 'react';

import { ViewStyled, CurrentComuna, NearbyComunas, NearbyComunasTitle } from './styles'

import { Comuna } from './components/Comuna/Comuna'

import { Paso } from './components/Paso/Paso'

import { ComunaList } from './components/ComunaList/ComunaList'

import { useLocation } from './hooks/useLocation'

import { getNearbyComunas } from './utils/getNearbyComuna'

export default function App() {

    const [location] = useLocation()

    const [coords, setCoords] = useState({})

    const [nearbyComunas, setNearbyComunas] = useState([])

    const [closerComuna, setCloserComuna] = useState({})

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
        if(coords){
            const nearby = getNearbyComunas(coords, 20)
            setCloserComuna(nearby.shift())
            setNearbyComunas(nearby)
        }
    }, [coords])

    return (
        <ViewStyled>
            <CurrentComuna>
                <Comuna comuna={closerComuna.name || "Cargando"} />
                <Paso paso={closerComuna.paso || 0} />
            </CurrentComuna>

            <NearbyComunas>
                <NearbyComunasTitle>Comunas cercanas</NearbyComunasTitle>
                <ComunaList comunas={nearbyComunas}/>
            </NearbyComunas>
        </ViewStyled>
    );
}
