import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD0EcAtI0zUOnIpPdWO5NRTCVDViDvhngA",
    authDomain: "fir-7b8c3.firebaseapp.com",
    projectId: "fir-7b8c3",
    storageBucket: "fir-7b8c3.appspot.com",
    messagingSenderId: "28179699533",
    appId: "1:28179699533:web:aaecf3e3ab8a75e6510904"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()
  
export default db