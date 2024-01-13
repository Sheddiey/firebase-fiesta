// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjwQTum4hwXBElmwKAHu5vrXZ21uaFm5I",
  authDomain: "fir-fiesta.firebaseapp.com",
  projectId: "fir-fiesta",
  storageBucket: "fir-fiesta.appspot.com",
  messagingSenderId: "976965613002",
  appId: "1:976965613002:web:08d8a7f09c4f76f167cb33",
  measurementId: "G-B1KNQG3HZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);