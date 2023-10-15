import React, { useState } from "react";
import { auth } from "../components/web";

const UserAuth = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed up:", user);
        setError(null);
      })
      .catch((error) => {
        console.error("Error signing up:", error.message);
        setError(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in:", user);
        setError("");
      })
      .catch((error) => {
        console.error("Error signing in:", error.message);
        setError(error.message);
      });
  };

  return (
    <div>
      <center>
        <form autoComplete="off">
          <h1>Authentication</h1>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={changeHandler}
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={changeHandler}
          />
          <br />
          <button onClick={signIn}>Sign In</button> &nbsp;&nbsp;
          <button onClick={signUp}>Sign Up</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </center>
    </div>
  );
};

export default UserAuth;
