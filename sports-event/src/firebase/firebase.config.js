// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQIm-lL6DyJXhFj_9neHrjoVGygDYA2F4",
    authDomain: "sports-event-310d3.firebaseapp.com",
    projectId: "sports-event-310d3",
    storageBucket: "sports-event-310d3.appspot.com",
    messagingSenderId: "809497121693",
    appId: "1:809497121693:web:211679586940e30ae41574"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;