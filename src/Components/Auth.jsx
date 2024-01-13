import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth, googleProvider } from "../config/firebase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(auth?.currentUser?.photoURL)
  const signIn = async () => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
    } catch(err) {
        console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider)
    } catch (err) {
        console.error(err);
    }

  };

  const Logout = async () => {
    try{
        await signOut(auth)
    } catch (err) {
        console.error(err);
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email..."
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password..."
      />
      <button onClick={signIn}>Sign In</button>

      <button onClick={signInWithGoogle}>Sign In With Google</button>
      <button onClick={Logout}>Logout</button>
    </div>
  );
};

export default Auth;
