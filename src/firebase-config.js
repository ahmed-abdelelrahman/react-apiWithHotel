import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDueZjC10RplATSJk-_tFmITPRbBSo3Ukk",
  authDomain: "react-hotel-c0144.firebaseapp.com",
  projectId: "react-hotel-c0144",
  storageBucket: "react-hotel-c0144.appspot.com",
  messagingSenderId: "47996345570",
  appId: "1:47996345570:web:9e1fc26ba57b15f9efd2bb",
  measurementId: "G-QWR8QT5JQT",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
