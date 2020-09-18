import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDo8T8Sf4JAgaw-ZyCfqQqbdmld13tXT5w",
  authDomain: "clone-3cedf.firebaseapp.com",
  databaseURL: "https://clone-3cedf.firebaseio.com",
  projectId: "clone-3cedf",
  storageBucket: "clone-3cedf.appspot.com",
  messagingSenderId: "415132077463",
  appId: "1:415132077463:web:35064a2cf1583dde1e88d2",
  measurementId: "G-34KQP9S10L",
});

const database = firebaseApp.firestore();

export default database;
