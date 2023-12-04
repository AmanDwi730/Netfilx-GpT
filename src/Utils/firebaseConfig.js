// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOT5VyDShxV3w9uWZ-V9Bg03xGdh7JxbA",
  authDomain: "netflix-gpt-f3ae4.firebaseapp.com",
  projectId: "netflix-gpt-f3ae4",
  storageBucket: "netflix-gpt-f3ae4.appspot.com",
  messagingSenderId: "834526649679",
  appId: "1:834526649679:web:ecefbe26313e032896f93a",
  measurementId: "G-FFS84J1LC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
