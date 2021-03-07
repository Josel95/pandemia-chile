import { useState } from 'react'

import firestore from '../firebase/firestore'

import { Comuna } from '../types/Comuna'

export const useComuna = () => {
    const [comuna, setComuna] = useState<Comuna | undefined>()

    const [loading, setLoading] = useState(false)

    const getComunaData = (comunaName: string) => {
        setLoading(true)
        const documentRef = firestore.collection('comunas').doc(comunaName.toLowerCase())

        documentRef.get().then(document => {
            if (document.exists) {
                setComuna(document.data() as Comuna)
                setLoading(false)
            }
        })
    }

    return { comuna, getComunaData, loading }
} 