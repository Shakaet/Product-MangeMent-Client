// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG9A3AXHt9qQHt0TM0uGcmry_DBm4hW-8",
  authDomain: "product-project-62b6d.firebaseapp.com",
  projectId: "product-project-62b6d",
  storageBucket: "product-project-62b6d.firebasestorage.app",
  messagingSenderId: "98008320292",
  appId: "1:98008320292:web:a19f854e8bc7e996118bb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth