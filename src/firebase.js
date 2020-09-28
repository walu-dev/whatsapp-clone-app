import firebase from "firebase";
//import "firebase/auth";
//import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKU4bV9PL5ccMuENRQG8UH-h6spCqPGJU",
  authDomain: "whatsapp-clone-app-419a2.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-app-419a2.firebaseio.com",
  projectId: "whatsapp-clone-app-419a2",
  storageBucket: "whatsapp-clone-app-419a2.appspot.com",
  messagingSenderId: "434701858860",
  appId: "1:434701858860:web:39c5318299ae9f87173989",
  measurementId: "G-9GPM5XC326",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
