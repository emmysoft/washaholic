// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FIREBASE_API, FIREBASE_AUTH_DOMAIN, FIREBASE_DB_URL, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_APP_ID } from "./utils/api";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: FIREBASE_API,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DB_URL,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
