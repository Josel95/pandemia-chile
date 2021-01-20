import { useState, useEffect } from 'react'

import { firestore } from '../firebase/firestore'

export const useComunas = () => {
    const [comunas, setComunas] = useState([])

    /**
     * Maybe you can do a logic to download de data only once a day,
     * If so you can use localStorage file in utils folder to save
     * the data and with a timestamp you can check if is another day.
     */

    useEffect(() => {
        const snapshot = firestore.collection('comunas').get()

        snapshot.then(documents => {
            const data = documents.docs.map(document => document.data())

            setComunas(data)
        })
    }, [])

    return comunas
}