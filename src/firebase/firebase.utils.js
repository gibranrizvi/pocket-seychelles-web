import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
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
export const uploadProfilePicture = async (
  uid,
  email,
  firstName,
  lastName,
  pictureURI
) => {
  const file = pictureURI;

  const metadata = {
    contentType: 'image/jpeg'
  };

  const pictureRef = storage
    .ref()
    .child(`profile_pictures/${firstName}_${lastName}_${uid}`);

  try {
    const uploadTask = pictureRef.put(file, metadata);

    await uploadTask.on(
      'state_changed',
      snapshot => {
        // var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log('Upload is ' + progress + '% done');
        // switch (snapshot.state) {
        //   case 'paused': // or 'paused'
        //     console.log('Upload is paused');
        //     break;
        //   case 'running': // or 'running'
        //     console.log('Upload is running');
        //     break;
        // }
      },
      error => {
        console.log(error);
      },
      async () => {
        // Upload complete
        const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
        const userData = {
          uid,
          email,
          first_name: firstName,
          last_name: lastName,
          profile_picture: downloadURL
        };

        return await createUserProfileDocument(userData);
      }
    );
  } catch (error) {
    console.log(error);
  }
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
export const storage = firebase.storage();
export { FirebaseContext };

// Google OAuth set up
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

// Export signInWithGoogle method
export const signInWithGoogle = async () => {
  const { user } = await auth.signInWithPopup(googleProvider);
  formatUserData(user);
};

const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ display: 'popup' });

// Export signInWithFacebook method
export const signInWithFacebook = async () => {
  const { user } = await auth.signInWithPopup(facebookProvider);
  formatUserData(user);
};

const formatUserData = async ({ uid, email, displayName, photoURL }) => {
  const names = displayName.split(' ');
  const userData = {
    uid,
    email,
    first_name: names[0],
    last_name: names[1],
    profile_picture: photoURL
  };
  await createUserProfileDocument(userData);
};

// Firebase default export
export default firebase;
