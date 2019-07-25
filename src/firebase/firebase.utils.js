import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDD-CrBqkcbuhqotDMn1JoTi91Jklmw6jQ',
  authDomain: 'pocket-seychelles.firebaseapp.com',
  databaseURL: 'https://pocket-seychelles.firebaseio.com',
  projectId: 'pocket-seychelles',
  storageBucket: 'pocket-seychelles.appspot.com',
  messagingSenderId: '1084215164429',
  appId: '1:1084215164429:web:da30016f7dbfbd72'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
