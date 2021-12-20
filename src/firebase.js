import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAVLsURPtL3lvy5FYy8he-FCr6cxWvnXOA",
      authDomain: "clientreact-12045.firebaseapp.com",
      projectId: "clientreact-12045",
      storageBucket: "clientreact-12045.appspot.com",
      messagingSenderId: "815509263499",
      appId: "1:815509263499:web:5fad86509cc81a3e05708e",
      measurementId: "${config.measurementId}"
  });

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const storage = firebaseApp.storage();
// db.collection('posts').add({userName:"rohan"});
  export { db, auth, storage };


