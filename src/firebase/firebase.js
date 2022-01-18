import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getDatabase, ref, set } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzbRsz9kbtHgGUr3IksIvNYsBn381ZN4k",
  authDomain: "chatroom-app-c119a.firebaseapp.com",
  projectId: "chatroom-app-c119a",
  storageBucket: "chatroom-app-c119a.appspot.com",
  messagingSenderId: "1075112232381",
  appId: "1:1075112232381:web:ef434f451b6ec43c7c7ed4",
  measurementId: "G-5QCEELMNLN"
};





// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
