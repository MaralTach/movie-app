import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAI4fDZzXIAhrZ0BifTSDA8jOOtSCSlpEs",
    authDomain: "movie-app-568c3.firebaseapp.com",
    projectId: "movie-app-568c3",
    storageBucket: "movie-app-568c3.appspot.com",
    messagingSenderId: "182926010948",
    appId: "1:182926010948:web:9ad7a7a1ba8bd8bbdfea11"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
