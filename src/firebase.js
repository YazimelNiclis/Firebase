import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
   
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const firestore = firebase.firestore();

firestore.settings({ timestampsInSnapshots: true });


window.firebase = firebase;

export default firebase;
