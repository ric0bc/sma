import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB3RuB4kYcbdT7zmufqtL8Apj7td0Y3oL8",
  authDomain: "smartmanagementapplication.firebaseapp.com",
  databaseURL: "https://smartmanagementapplication.firebaseio.com",
  projectId: "smartmanagementapplication",
  storageBucket: "",
  messagingSenderId: "221437129300"
};

if(!firebase.apps.length){
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};