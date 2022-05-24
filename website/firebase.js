// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxGWhCtNC0X8Kwpgj685NuUkSYUjk1yjU",
    authDomain: "abb-programmeraren.firebaseapp.com",
    databaseURL: "https://abb-programmeraren-default-rtdb.firebaseio.com",
    projectId: "abb-programmeraren",
    storageBucket: "abb-programmeraren.appspot.com",
    messagingSenderId: "273252324191",
    appId: "1:273252324191:web:85a5fc796716943cd2dcea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);