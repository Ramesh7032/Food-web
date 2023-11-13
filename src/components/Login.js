import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import "./Home.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import foodie1 from "../images/foodie.gif";
import google from "../images/google.png";
import google1 from "../images/google1.png";
import googel3 from "../images/google3.webp";

// Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBq0l5YNpyBxs-THsN_Gc0sHYOpnD8VAUc",
  authDomain: "foodweb-e5791.firebaseapp.com",
  projectId: "foodweb-e5791",
  storageBucket: "foodweb-e5791.appspot.com",
  messagingSenderId: "1087511170195",
  appId: "1:1087511170195:web:a4982380df33b4d8071166",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [value, setvalue] = useState(""); // User's name

  const navigate = useNavigate();

  const signupwithgoogle = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setvalue(data.user.email);
        localStorage.setItem("email", data.user.email);
        console.log("User SignIn:", data.user);
        navigate("/");
        setError(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    setvalue(localStorage.getItem("email"));
  }, []);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User logged in:", user);
        navigate("/");
        setEmail("");
        setPassword("");
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        console.error("Login error: ", error);
      });
  };

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed up: ", user);
        navigate("/");
        setEmail("");
        setPassword("");
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        console.error("Signup error: ", error);
      });
  };

  return (
    <div>
      <div className="food-login1">
        <div className="food-login2">
          <center>
            <h2>Login</h2>
            <div className="login-input">
              <input
                className="login-input1"
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-input">
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="forgot">Forgot Password?</p>
            <button onClick={handleLogin} className="login-button1">
              Login
            </button>
            <button className="login-button1" onClick={handleSignup}>
              Sign Up
            </button>
            <p>Or</p>
            <p className="login-ptag">SignIn using</p>
            <div className="login-sign">
              <button className="login-btn" onClick={signupwithgoogle}>
                Google
              </button>
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
          </center>
          <div className="food-login3">
            <img src={foodie1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
