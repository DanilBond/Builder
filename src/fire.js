import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBD5AWIpGxNd66h6qPWZLybe8uNsX6sxA4",
    authDomain: "pcbuilder-989af.firebaseapp.com",
    databaseURL: "https://pcbuilder-989af-default-rtdb.firebaseio.com",
    projectId: "pcbuilder-989af",
    storageBucket: "pcbuilder-989af.appspot.com",
    messagingSenderId: "273872468504",
    appId: "1:273872468504:web:7e82c952b0a5ecf915216d",
    measurementId: "G-SFM1PPP2BH"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);

 export default fire;