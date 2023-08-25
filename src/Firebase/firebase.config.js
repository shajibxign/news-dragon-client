// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiLx059fwbWP748912hcmNZ0kgPMs0l9w",
  authDomain: "news-dragon-client-eef65.firebaseapp.com",
  projectId: "news-dragon-client-eef65",
  storageBucket: "news-dragon-client-eef65.appspot.com",
  messagingSenderId: "445117659775",
  appId: "1:445117659775:web:58c48a34d9630163591d4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;