import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBAh1cMgztwEkbbFaZywRL-u33gIozusYU",
  authDomain: "whatsapp-2-454aa.firebaseapp.com",
  projectId: "whatsapp-2-454aa",
  storageBucket: "whatsapp-2-454aa.appspot.com",
  messagingSenderId: "74958679408",
  appId: "1:74958679408:web:1016a8e878ebef6e6fb3b5",
  measurementId: "G-1N1F54MSP6",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };