
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-e4817.firebaseapp.com",
  projectId: "interviewiq-e4817",
  storageBucket: "interviewiq-e4817.firebasestorage.app",
  messagingSenderId: "638037763523",
  appId: "1:638037763523:web:6b9d64decea70ae73c0976"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}