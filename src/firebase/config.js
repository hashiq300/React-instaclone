import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBMph-GkrXzpNj8eznLvuLw7Xw2PoStsVI",
    authDomain: "todo-app-cb4b3.firebaseapp.com",
    databaseURL: "https://todo-app-cb4b3.firebaseio.com",
    projectId: "todo-app-cb4b3",
    storageBucket: "todo-app-cb4b3.appspot.com",
    messagingSenderId: "550549209708",
    appId: "1:550549209708:web:aa130d596934c70f9cce49",
    measurementId: "G-YNEV4TB704"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export { projectStorage, projectFirestore , timestamp };