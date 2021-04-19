import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.intializeApp({
    apiKey: "AIzaSyD6Ee2K4MeY2uusRur8uFLKIy2VckPe2Sw",
    authDomain: "ecommercecoder-84c09.firebaseapp.com",
    projectId: "ecommercecoder-84c09",
    storageBucket: "ecommercecoder-84c09.appspot.com",
    messagingSenderId: "59283586579",
    appId: "1:59283586579:web:0ce0585bcf5b17ab8ac9e6",
    measurementId: "G-38DCBF7MM6"
})

export const getFirebase = () => {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore(app);
};