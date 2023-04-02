import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAv5Q3G5N8YxCndBqyvNG5X3wE_q37HBho",
  authDomain: "tiktok---jornada-9f3f6.firebaseapp.com",
  projectId: "tiktok---jornada-9f3f6",
  storageBucket: "tiktok---jornada-9f3f6.appspot.com",
  messagingSenderId: "631214068225",
  appId: "1:631214068225:web:ad905a4a55f3554854a600"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db