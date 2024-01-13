import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCjwQTum4hwXBElmwKAHu5vrXZ21uaFm5I",
  authDomain: "fir-fiesta.firebaseapp.com",
  projectId: "fir-fiesta",
  storageBucket: "fir-fiesta.appspot.com",
  messagingSenderId: "976965613002",
  appId: "1:976965613002:web:08d8a7f09c4f76f167cb33",
  measurementId: "G-B1KNQG3HZN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();