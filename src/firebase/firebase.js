import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


import {useCollectionData} from 'react-firebase-hooks/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDegQtNYh66Rn5fWUX-uI9rFYkFwcHC5QU",
  authDomain: "chatroom-two.firebaseapp.com",
  projectId: "chatroom-two",
  storageBucket: "chatroom-two.appspot.com",
  messagingSenderId: "34267078502",
  appId: "1:34267078502:web:b80567e43ac1a54ea832a7",
  measurementId: "G-GH3MHSLVP5"
};

//Create a user within firebase firestore based on the information provided in the rego form, and the returned value from auth.createUserWithEmailAndPassword//
export const createUserProfileDocument = async(userAuth, additionalData) => {

  if (!userAuth) return; //If there's no userAuth then return from the function. I can't see how this would happen as you would call this function with intent.

  let account;

  const userRef = firestore.doc(`users/${userAuth.uid}`)    //Obtaining a reference to the specific user within firestore.
  const snapshot = await userRef.get()                      //Then we ask Google for a snapshot (copy of any data) that exists at the location of userRef above.

  if (!snapshot.exists) {                                   //If a snapshot DOESNT exist against that user ID, implying the user is NOT available therefore the user doesn't exist, then we will continue with this conditional

    const {email, uid, photoURL, ...rest} = userAuth;            //Destructure the email, photoURL, and rest of the object props from userAuth.
    const {displayName} = additionalData;                   //Destructure the displayName off additionalData.
    const createdAt = new Date();                           //Create a timestamp for this new user so we can refer back to this later if we want to see how long the account is.
    console.log('test3')

    //Try creating (SET) a user profile for this new registered user, otherwise throw us an error detailing the reason why it failed//
    try {
      await userRef.set({
        user: {displayName, email, photoURL, createdAt, uid} //The user will have all of the properties we destructured earlier.
      })
      const newUser = await firestore.doc(`users/${userAuth.uid}`)
      account = newUser.get()
      console.log('test2')
    } catch(error) {
      console.log('Error writing new user to firebase', error)
      account = null;
    }
  }

  return account;
}


//Check to see if the user is already remained logged in on Firebase, if so, pass that user info to our context currentUser//

export const checkAuthenticatedUser = async(userAuth) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);    //search firebase to find the user with the unique ID (uid)
  const userData = userRef.get();
  console.log('test4')
  return userData;
}




// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
