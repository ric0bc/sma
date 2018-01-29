import * as firebase from 'firebase';

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "smartmanagementapplication",
  storageBucket: "",
  messagingSenderId: ""
};

if(!firebase.apps.length){
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
