import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvdTpsrmGVRuHy1jbw0zUzJ4ktMzKcWkE",
  authDomain: "netflix-db-40d3a.firebaseapp.com",
  projectId: "netflix-db-40d3a",
  storageBucket: "netflix-db-40d3a.appspot.com",
  messagingSenderId: "988671642015",
  appId: "1:988671642015:web:ac0baced80ccbcea7315aa"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app) 

