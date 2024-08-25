import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,signOut  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// 
const firebaseConfig = {
    apiKey: "AIzaSyBdQXOaSg2qOhek7RNwDeShk2jlhVnDH64",
    authDomain: "fir-authentication-1a877.firebaseapp.com",
    projectId: "fir-authentication-1a877",
    storageBucket: "fir-authentication-1a877.appspot.com",
    messagingSenderId: "580874850390",
    appId: "1:580874850390:web:f220bbabf4deee709b6bf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,signOut  }


