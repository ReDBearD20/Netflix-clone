//import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAqpsbNXmJrTGcMwpkeHu5IkwSV3XYlako",
  authDomain: "netflix-clone-3a21d.firebaseapp.com",
  projectId: "netflix-clone-3a21d",
  storageBucket: "netflix-clone-3a21d.appspot.com",
  messagingSenderId: "243346212205",
  appId: "1:243346212205:web:92ae65399b985f6c978664",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
