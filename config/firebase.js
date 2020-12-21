import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDdsf3oKA39iNCUhtI8IjSlg0aKGMgRIrw",
  authDomain: "emotion-analysis-ba7c1.firebaseapp.com",
  projectId: "emotion-analysis-ba7c1",
  storageBucket: "emotion-analysis-ba7c1.appspot.com",
  messagingSenderId: "916595994907",
  appId: "1:916595994907:web:e9e229f559527b82d963be",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}


const fire = firebase;
export default fire;
