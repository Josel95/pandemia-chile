import { useState } from 'react'

import firestore from '../firebase/firestore'

import { Comuna } from '../types/Comuna'

export const useComuna = () => {
    const [comuna, setComuna] = useState<Comuna | undefined>()

    const [error, setError] = useState(false)

    const [loading, setLoading] = useState(false)

    const getComunaData = (comunaName: string) => {
        setLoading(true)
        setError(false)
        
        const documentRef = firestore.collection('comunas').doc(comunaName.toLowerCase())

        documentRef.get()
            .then(document => {
                if (document.exists) {
                    setComuna(document.data() as Comuna)
                } else {
                    setError(true)
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return { comuna, getComunaData, error, loading }
} 