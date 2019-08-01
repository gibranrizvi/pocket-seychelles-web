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

// Upload picture to Firebase storage and get a download URL
export const uploadProfilePicture = async () => {
  console.log('Uploading to firebase storage');
};

// Saving new user or updating existing user in Firestore
export const createUserProfileDocument = async ({
  uid,
  email,
  first_name,
  last_name,
  profile_picture
}) => {
  const userRef = firestore.doc(`users/${uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    // Create new user
    const created_at = new Date();

    try {
      await userRef.set({
        email,
        first_name,
        last_name,
        profile_picture,
        created_at
      });
    } catch (error) {
      console.log(error.message);
    }
  } else {
    // Update user
    const last_logged_in = new Date();

    try {
      await userRef.update({
        last_logged_in: last_logged_in
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
export const signInWithGoogle = async () => {
  const { user } = await auth.signInWithPopup(provider);
  console.log(user);
  const names = user.displayName.split(' ');
  const userData = {
    uid: user.uid,
    email: user.email,
    first_name: names[0],
    last_name: names[1],
    profile_picture: user.photoURL
  };
  await createUserProfileDocument(userData);
};

// Firebase default export
export default firebase;
