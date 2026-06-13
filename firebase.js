import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";
import { getFirestore }from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWREQSIY1DhqrQop1KUkOWCZvvp1KDVfQ",
  authDomain: "e-commerce-store-4dd8d.firebaseapp.com",
  projectId: "e-commerce-store-4dd8d",
  storageBucket: "e-commerce-store-4dd8d.firebasestorage.app",
  messagingSenderId: "670316152039",
  appId: "1:670316152039:web:c4dac0bccebae1516ace42",
  measurementId: "G-BE08WNG0J2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth,db};