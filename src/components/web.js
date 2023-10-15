import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYrwMAmJGsIWkObQGzi0UeB6S34WWxTIc",
  authDomain: "authentication-c2f7e.firebaseapp.com",
  projectId: "authentication-c2f7e",
  storageBucket: "authentication-c2f7e.appspot.com",
  messagingSenderId: "165529065805",
  appId: "1:165529065805:web:2acfc395c69ba8a3f23f04",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
export default app;
