import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAbsGDX4mkvPnp5ceVCX3xpJzDNCScX-U8",
    authDomain: "aapka-vichar.firebaseapp.com",
    databaseURL: "https://aapka-vichar.firebaseio.com",
    projectId: "aapka-vichar",
    storageBucket: "aapka-vichar.appspot.com",
    messagingSenderId: "435225476369",
    appId: "1:435225476369:web:fdedd1916fb0a05e8060b0"
}

firebase.initializeApp(firebaseConfig)

export default{
    firestore: firebase.firestore(),
    auth:firebase.auth()
};