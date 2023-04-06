import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDcHtXoARHljqY6jE1_RjCouEdB7tyxpYA",
    authDomain: "portfolio-245c3.firebaseapp.com",
    projectId: "portfolio-245c3",
    storageBucket: "portfolio-245c3.appspot.com",
    messagingSenderId: "595420037217",
    appId: "1:595420037217:web:bd9d8043f21d03c416ea20"
};


const app = initializeApp(firebaseConfig);
const mydb = getFirestore(app)

export default mydb