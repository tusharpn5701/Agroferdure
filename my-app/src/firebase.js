import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFe9kJkdbOVCsvTeeslfqA_Q02jdcJMCE",
  authDomain: "agroferdure-4caf6.firebaseapp.com",
  projectId: "agroferdure-4caf6",
  storageBucket: "agroferdure-4caf6.appspot.com",
  messagingSenderId: "267525894354",
  appId: "1:267525894354:web:0e599fb52d12b029ac7d0b",
  measurementId: "G-ZDNB9XGVWG"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage =firebase.storage();

export { auth,provider,storage};
export default db;

