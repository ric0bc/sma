import * as firebase from 'firebase';

const config = {
  apiKey: "",
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
