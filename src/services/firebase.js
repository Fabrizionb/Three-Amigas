// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm0FsduG1wrrTVb4ChTPMld_9XI5rxLlg",
  authDomain: "threeamigas-692dc.firebaseapp.com",
  projectId: "threeamigas-692dc",
  storageBucket: "threeamigas-692dc.appspot.com",
  messagingSenderId: "401517335359",
  appId: "1:401517335359:web:24cb2b95d5487f5ba2398a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);


export default firestoreDB;