import { useState } from 'react'

import firestore from '../firebase/firestore'

import { useSelector } from 'react-redux'

import { defaults } from '../defaults'

import { State } from '../types/State'

import { Comuna } from '../types/Comuna'

const fetchFirestoreData = async (comunaName: string) => {
    const document = await firestore.collection('comunas').doc(comunaName.toLowerCase()).get()

    if(!document.exists) {
        return null
    }

    return document.data() as Comuna
}

export const useComuna = () => {
    const [comuna, setComuna] = useState<Comuna>()

    const [error, setError] = useState(false)

    const [loading, setLoading] = useState(true)

    const [usedDefault, setUsedDefault] = useState(false)

    const [isCurrent, setIsCurrent] = useState(false)

    const comunaStore = useSelector((state: State) => state.comuna.comuna)

    const isCurrentComuna = useSelector((state: State) => state.comuna.isCurrentComuna)

    const getComuna = async (comunaName?: string) => {
        setLoading(true)
        setError(false)

        try {
            if(!comunaName) {
                comunaName = defaults.DEFAULT_COMUNA
                setUsedDefault(true)
            }

            if(comunaStore && comunaStore.name.toLowerCase() === comunaName.toLowerCase()) {
                if(isCurrentComuna) {
                    setIsCurrent(true)
                }
                setComuna(comunaStore)
                return
            }

            let comuna = await fetchFirestoreData(comunaName)

            if(!comuna) {
                comuna = await fetchFirestoreData(defaults.DEFAULT_COMUNA)
                setUsedDefault(true)

                if(!comuna) {
                    setError(true)
                    return
                }
            }

            setComuna(comuna)
        } catch {
            setError(true)
        } finally {
            if(__DEV__) {
                console.info(`consultada comuna: ${comunaName}`)
            }
            setLoading(false)
        }
    }

    return { comuna, error, loading, usedDefault, isCurrent, getComuna }
} 