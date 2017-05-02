import firebase from 'firebase'

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyA_22unneBGAT42QmCzsYxS20WwOsR_cU0",
    authDomain: "wipninja-ee9c5.firebaseapp.com",
    databaseURL: "https://wipninja-ee9c5.firebaseio.com",
    projectId: "wipninja-ee9c5",
    storageBucket: "wipninja-ee9c5.appspot.com",
    messagingSenderId: "73353907063"
  };

export const firebaseApp = firebase.initializeApp(config)
