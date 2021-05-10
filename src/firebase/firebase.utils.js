import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyCTL0ej-gPazmPo2uOOBhv11PPyazBpLhc",
    authDomain: "arab-db.firebaseapp.com",
    projectId: "arab-db",
    storageBucket: "arab-db.appspot.com",
    messagingSenderId: "539079317935",
    appId: "1:539079317935:web:38f3baf7ef50dd3653b75a",
    measurementId: "G-X2Q6R94GE5"
  };



  firebase.initializeApp(firebaseConfig);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider)
export default firebase;
  