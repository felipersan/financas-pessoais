import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

let firebaseConfig = {
  apiKey: 'AIzaSyAixTSii89Kyh85hThIIQi64yLPEqdqe4c',
  authDomain: 'finance-21e59.firebaseapp.com',
  projectId: 'finance-21e59',
  storageBucket: 'finance-21e59.appspot.com',
  messagingSenderId: '95946976093',
  appId: '1:95946976093:web:671132ab5bead5874116b4',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
