import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAV7X2OW_3Trw0jWoaGZ2YZY7zBMi5pyH4",
  authDomain: "catch-of-the-day-josefina-nm.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-josefina-nm.firebaseio.com"
  });

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;
