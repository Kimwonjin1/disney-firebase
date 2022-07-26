import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "disney-ddd33.firebaseapp.com",
  projectId: "disney-ddd33",
  storageBucket: "disney-ddd33.appspot.com",
  messagingSenderId: "647594861383",
  appId: "1:647594861383:web:6825eb46a711a283482262",
  measurementId: "G-JMD8K7Q3D4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
