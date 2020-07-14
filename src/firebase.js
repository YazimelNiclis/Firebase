import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDTqZuLEtP2Yx6gPm3kS6QCeyHq0lqMSk8",
    authDomain: "prueba-d1f16.firebaseapp.com",
    databaseURL: "https://prueba-d1f16.firebaseio.com",
    projectId: "prueba-d1f16",
    storageBucket: "prueba-d1f16.appspot.com",
    messagingSenderId: "646350267104",
    appId: "1:646350267104:web:c842b2f35e819b2b8be685",
    measurementId: "G-6F46L403V5"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const firestore = firebase.firestore();

firestore.settings({ timestampsInSnapshots: true });


window.firebase = firebase;

export default firebase;