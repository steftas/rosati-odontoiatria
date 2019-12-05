import firebase from 'firebase';
import 'firebase/firestore';

// Initialize Firebase
let config = {
  apiKey: "AIzaSyAOr9XAVYfkbTwypJOFJ0ejzS-07RHPakk",
  authDomain: "rosati-odontoiatria.firebaseapp.com",
  databaseURL: "https://rosati-odontoiatria.firebaseio.com",
  projectId: "rosati-odontoiatria",
  storageBucket: "rosati-odontoiatria.appspot.com",
  messagingSenderId: "815578853731"
};
firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

// firebase collections
const attivitaCollection = db.collection('attivita');

export {
  db,
  auth,
  currentUser,
  attivitaCollection
}