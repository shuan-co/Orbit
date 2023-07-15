//  Initialize Firebase Application
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from 'firebase/storage';

export const firebaseConfig = {
    apiKey: "AIzaSyA5KuVKg7vp6OuIBMYSgbsxWizMZhqKNmw",
    authDomain: "orbit-90a9a.firebaseapp.com",
    projectId: "orbit-90a9a",
    storageBucket: "orbit-90a9a.appspot.com",
    messagingSenderId: "355762773896",
    appId: "1:355762773896:web:bd8c63fa6d57499427643d",
    measurementId: "G-PVEBSYX62E"
}
const firebase = initializeApp(firebaseConfig);
export const config = {
    auth: getAuth(firebase),
    firestore: getFirestore(firebase),
    storage: getStorage(firebase),
    storageRef: ref(getStorage(firebase))
}

export const user = {
    authentication: null,
    credentials: null
}