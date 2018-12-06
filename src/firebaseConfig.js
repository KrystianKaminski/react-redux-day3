import firebase from 'firebase'


  const config = {
    apiKey: "AIzaSyC3ijE0n-Ogy3uTATxFcYrxmye536PBNcM",
    authDomain: "krystian-kaminski.firebaseapp.com",
    databaseURL: "https://krystian-kaminski.firebaseio.com",
    projectId: "krystian-kaminski",
    storageBucket: "krystian-kaminski.appspot.com",
    messagingSenderId: "185496303101"
  };
  firebase.initializeApp(config);


  export const auth = firebase.auth()
  export const database = firebase.database()
  export const googleProvider = new firebase.auth.GoogleAuthProvider()