// JavaScript/firebase-init.js

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHyGf_hxEw7-Bn7sNPy8cVZQrA-GaJbdw",
  authDomain: "alumni-meet-123bd.firebaseapp.com",
  projectId: "alumni-meet-123bd",
  storageBucket: "alumni-meet-123bd.firebasestorage.app",
  messagingSenderId: "930170457101",
  appId: "1:930170457101:web:0d985f0c1a6e46f65f5944",
  measurementId: "G-H8GLWT4FWZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Make these available globally (for easy use in other scripts)
const auth = firebase.auth();
const db = firebase.firestore();

// Optional: for later use (storage, analytics, etc.)
// const storage = firebase.storage();

console.log("Firebase initialized successfully!");