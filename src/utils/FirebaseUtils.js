import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyB5urzSKlTpOz7anVYAOr2ZoneZwsAuOGw",
  authDomain: "pokeshop-4c81c.firebaseapp.com",
  databaseURL: "https://pokeshop-4c81c.firebaseio.com",
  projectId: "pokeshop-4c81c",
  storageBucket: "pokeshop-4c81c.appspot.com",
  messagingSenderId: "725769435889",
  appId: "1:725769435889:web:0223fb61a4041f74644750",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Retrieve the user reference from firebase
  const userReference = firestore.doc(`users/${userAuth.uid}`);

  // Retrieving the snapshot representing the data of the user
  const snapshot = await userReference.get();

  // If user doesn't exist yet, put a new entry into the snapshot
  if (!snapshot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await userReference.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user:", error.message);
    }
  }
  return userReference;
};

firebase.initializeApp(config);

// Workaround function that transforms a subscription for a current user
// to a promise-based function.
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
