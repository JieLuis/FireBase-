import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDc8Ct3k_Zl-r_NxwgTW2PFQqCnvh1_Y1g",
  authDomain: "my-blog-f81a9.firebaseapp.com",
  projectId: "my-blog-f81a9",
  storageBucket: "my-blog-f81a9.appspot.com",
  messagingSenderId: "388734870497",
  appId: "1:388734870497:web:dea25de220d7c5028ea8a0",
};
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
