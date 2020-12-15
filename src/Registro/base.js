import     firebase from "firebase/app";
import "firebase/auth";

 var firebaseConfig = {
    apiKey: "AIzaSyBHUTVBoANpK0Ddlbbp0pV7gi9RGIEOkAM",
    authDomain: "react-jhon.firebaseapp.com",
    databaseURL: "https://react-jhon.firebaseio.com",
    projectId: "react-jhon",
    storageBucket: "react-jhon.appspot.com",
    messagingSenderId: "278707905353",
    appId: "1:278707905353:web:c5908780c1ecae1c9ab098",
    measurementId: "G-BV6DWE61FC"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);


// export const  auth = app.auth()
export default app;