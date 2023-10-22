import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';

// from the firebase website
const firebaseConfig = {
    apiKey: "AIzaSyAoNiQCyI5kP3Wjhu4OityIsaQrJ2LMSLE",
    authDomain: "udlejdinbaad.firebaseapp.com",
    projectId: "udlejdinbaad",
    storageBucket: "udlejdinbaad.appspot.com",
    messagingSenderId: "366481371744",
    appId: "1:366481371744:web:b4899d8f0a7195df888905", 
    measurementId: "G-TN39N2Z6DC"
};


export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const db = getFirestore(firebase);

