import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD6AqINY_Q_rsKHx63I1tgDMy_Rn1Rd04A",
    authDomain: "e-commerce-react-70dd9.firebaseapp.com",
    projectId: "e-commerce-react-70dd9",
    storageBucket: "e-commerce-react-70dd9.appspot.com",
    messagingSenderId: "541419194100",
    appId: "1:541419194100:web:d64b25c6d853b5664700a1"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);