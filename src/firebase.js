import * as firebase from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "pray-pay.web.app",
    projectId: "pray-pay",
    appId: "1:886952026191:web:f94cb106df3c8b08c98a3a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase