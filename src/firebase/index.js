import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDtePceWSSy4O0o_jxOSLrwFeJkWJpG6as",
    authDomain: "ecommercecoder-c8a40.firebaseapp.com",
    projectId: "ecommercecoder-c8a40",
    storageBucket: "ecommercecoder-c8a40.appspot.com",
    messagingSenderId: "89630139725",
    appId: "1:89630139725:web:066780653407b721744304"
});

export const getFirebase = () => {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore(app);
};