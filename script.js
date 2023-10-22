// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your Firebase configuration here
const firebaseConfig = {
    apiKey: "AIzaSyC5zupnLXBgT5sOhh8-yAgGUOgvmpTMGFc",
    authDomain: "pspark-34dc3.firebaseapp.com",
    databaseURL: "https://pspark-34dc3-default-rtdb.firebaseio.com",
    projectId: "pspark-34dc3",
    storageBucket: "pspark-34dc3.appspot.com",
    messagingSenderId: "905920434441",
    appId: "1:905920434441:web:27dfe76c45c1eaa40243d8",
    measurementId: "G-V2FWS1BB6E"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Add an event listener to handle user login
document.getElementById('login-button').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Sign in with email and password
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User signed in successfully
            const user = userCredential.user;
            console.log('User signed in:', user);
            // Redirect to a different page or perform other actions upon successful login.
        })
        .catch((error) => {
            // Handle sign-in error
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Sign-in error:', errorCode, errorMessage);
            // You can display an error message to the user or take other appropriate actions.
        });
});
