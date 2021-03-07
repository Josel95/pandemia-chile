import '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore'

const db = firestore()

if(__DEV__){
    db.settings({ host: '10.0.2.2:8080', ssl: false })
}

export default db