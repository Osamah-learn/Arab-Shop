import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCTL0ej-gPazmPo2uOOBhv11PPyazBpLhc",
  authDomain: "arab-db.firebaseapp.com",
  projectId: "arab-db",
  storageBucket: "arab-db.appspot.com",
  messagingSenderId: "539079317935",
  appId: "1:539079317935:web:38f3baf7ef50dd3653b75a",
  measurementId: "G-X2Q6R94GE5",
};
// Storing UserAuth inside the DB if its not exsist
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth);
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error While creating User", error.message);
    }
  }
  return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// initilais Google Sign in 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
