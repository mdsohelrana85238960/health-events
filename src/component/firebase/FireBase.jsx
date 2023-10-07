// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOv_GNqM1zZxAcHOmyXatRrmdHj4YjODY",
  authDomain: "health-events.firebaseapp.com",
  projectId: "health-events",
  storageBucket: "health-events.appspot.com",
  messagingSenderId: "230958890288",
  appId: "1:230958890288:web:dc6a30f704c17bf2105cf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;