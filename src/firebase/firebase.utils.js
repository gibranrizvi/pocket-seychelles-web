import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import FirebaseContext from './firebase.context';

const config = {
  apiKey: 'AIzaSyDD-CrBqkcbuhqotDMn1JoTi91Jklmw6jQ',
  authDomain: 'pocket-seychelles.firebaseapp.com',
  databaseURL: 'https://pocket-seychelles.firebaseio.com',
  projectId: 'pocket-seychelles',
  storageBucket: 'pocket-seychelles.appspot.com',
  messagingSenderId: '1084215164429',
  appId: '1:1084215164429:web:da30016f7dbfbd72'
};

// Saving new user or updating existing user in Firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    // Create new user
    const { first_name, last_name, profile_picture, email } = userAuth;
    const created_at = new Date();

    try {
      await userRef.set({
        first_name,
        last_name,
        profile_picture,
        email,
        created_at,
        ...additionalData
      });
    } catch (error) {
      console.log(error.message);
    }
  } else {
    // Update user
    const last_logged_in = new Date();

    try {
      await userRef.update({
        last_logged_in
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userRef;
};

// Initialize Firebase
firebase.initializeApp(config);

// Export Auth and Firestore services
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export { FirebaseContext };

// Google OAuth set up
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// Export signInWithGoogle method
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Firebase default export
export default firebase;
