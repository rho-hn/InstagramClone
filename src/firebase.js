import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCWQ3IxsjXPTxAHnFKp6TbvH9nNwjL39Rw",
    authDomain: "instagram-clone-cd00f.firebaseapp.com",
    projectId: "instagram-clone-cd00f",
    storageBucket: "instagram-clone-cd00f.appspot.com",
    messagingSenderId: "797474157428",
    appId: "1:797474157428:web:eca6a9bca76f817890b221"
  });

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const storage = firebaseApp.storage();

  export { db, auth, storage };

