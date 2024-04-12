import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBgwoEwc3qA6ZtiRLLYqmye5J24AVW5qqk",
    authDomain: "plantas-1727c.firebaseapp.com",
    projectId: "plantas-1727c",
    storageBucket: "plantas-1727c.appspot.com",
    messagingSenderId: "380145393024",
    appId: "1:380145393024:web:5546c8e6e50f7fe745b565"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Base de datos y autentificación.
export const db = getFirestore(app);
export const auth = getAuth(app);