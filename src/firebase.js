import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCjppuvMLb79LNhEPAyVV7EGler2qu7z9U",
  authDomain: "crud-1-9cbca.firebaseapp.com",
  databaseURL: "https://crud-1-9cbca.firebaseio.com",
  projectId: "crud-1-9cbca",
  storageBucket: "crud-1-9cbca.appspot.com",
  messagingSenderId: "246783015577",
  appId: "1:246783015577:web:74fbb11184ff7f8d469608"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export {
  db
}