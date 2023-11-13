import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBq0l5YNpyBxs-THsN_Gc0sHYOpnD8VAUc",
  authDomain: "foodweb-e5791.firebaseapp.com",
  projectId: "foodweb-e5791",
  storageBucket: "foodweb-e5791.appspot.com",
  messagingSenderId: "1087511170195",
  appId: "1:1087511170195:web:a4982380df33b4d8071166",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); // Export the auth object

export { auth };
export default app;
