// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl88h_b4c1AKG33OLvtWKTGfbzM_UiPI4",
  authDomain: "proyecto-final-hernando.firebaseapp.com",
  projectId: "proyecto-final-hernando",
  storageBucket: "proyecto-final-hernando.firebasestorage.app",
  messagingSenderId: "868973684163",
  appId: "1:868973684163:web:66b40232a8fbe0be478976",
  measurementId: "G-Q6R4KVW9QQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore( app )