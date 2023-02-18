import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBBzHVc3-vpRN31naCmrLyI6qs7tA9tMfM",
    authDomain: "perfect-atrium-333800.firebaseapp.com",
    projectId: "perfect-atrium-333800",
    storageBucket: "perfect-atrium-333800.appspot.com",
    messagingSenderId: "351740689165",
    appId: "1:351740689165:web:9b2fe5fcc988be144f4e44",
    measurementId: "G-0S2HP8PH24"
  };



  // Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const fs = firebase
export { auth, db, fs };

/*   firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const storage = firebase.storage();
  const db = firebase.firestore();
  const fs = firebase
  
  export { auth, storage, db, fs }; */