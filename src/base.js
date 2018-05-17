import Rebase from 're-base';
import firebase from 'firebase';


const config = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: "https://dilafel-1520078358995.firebaseio.com",
    projectId: process.env.REACT_APP_FIREBASE_ID,
    storageBucket: "",
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
  };

  const app = firebase.initializeApp(config);
  const base = Rebase.createClass(app.database());

  export {app, base}