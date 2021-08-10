import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBFM8QNPCP3sIb73Cb7nrGwuzDHWFdMzTw",


  authDomain: "pixalive-web-app.firebaseapp.com",


  projectId: "pixalive-web-app",


  storageBucket: "pixalive-web-app.appspot.com",


  messagingSenderId: "303577024878",


  appId: "1:303577024878:web:a45b9c7cbcc518b54a597f"
};

export const app = firebase.initializeApp(firebaseConfig);