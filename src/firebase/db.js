import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
    role: 'ADMIN'
  });

export const onceGetUsers = () => 
  db.ref('users').once('value');

export const onceGetAuthUser = (id) =>
  db.ref(`users/${id}`).once('value');