// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider , signInWithPopup} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6zPvvqsol2GRnJsagF7MUXABB7FjxaKA",
  authDomain: "fun-group-chat.firebaseapp.com",
  projectId: "fun-group-chat",
  storageBucket: "fun-group-chat.appspot.com",
  messagingSenderId: "167718104844",
  appId: "1:167718104844:web:53b33cdafbdfe2a2262329",
  measurementId: "G-96K8TH8Y2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signIn = () => { 
  return signInWithPopup( auth , provider)
  } ;
  


export const db = getFirestore(app);

