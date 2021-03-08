import { useState, useEffect } from 'react'

import firestore from '../firebase/firestore'

import { Comuna } from '../types/Comuna'

export const useComuna = (defaultComuna:  string) => {
    const [comuna, setComuna] = useState<Comuna | undefined>()

    const [error, setError] = useState(false)

    const [retry, setRetry] = useState<boolean | undefined>()

    const [usedDefault, setUsedDefault] = useState(false)

    const [loading, setLoading] = useState(false)

    const getComunaData = (comunaName: string) => {
        setLoading(true)
        setError(false)

        if(comunaName === 'NOTCL') {
            comunaName = defaultComuna
            setUsedDefault(true)
        }
        
        const documentRef = firestore.collection('comunas').doc(comunaName.toLowerCase())

        documentRef.get()
            .then(document => {
                if (document.exists) {
                    setComuna(document.data() as Comuna)
                } else {
                    if(retry === undefined && comunaName !== defaultComuna) {
                        setRetry(true)
                    } else {
                        setError(true)
                    }
                }
            })
            .finally(() => {
                if(__DEV__) {
                    console.info(`consultada comuna: ${comunaName}`)
                }
                setLoading(false)
            })
    }

    useEffect(() => {
        if(retry === true) {
            getComunaData(defaultComuna)
            setUsedDefault(true)
            setRetry(false)
        }

        if(retry === false) {
            setError(true)
        }
    }, [retry])

    return { comuna, getComunaData, error, loading, usedDefault }
} 