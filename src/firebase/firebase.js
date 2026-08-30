import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyATIb9C2i80uLvARqjw8xWV_A-D1R7fb00",
  authDomain: "protfolio-57c9a.firebaseapp.com",
  projectId: "protfolio-57c9a",
  storageBucket: "protfolio-57c9a.firebasestorage.app",
  messagingSenderId: "702240971788",
  appId: "1:702240971788:web:38a9cfe1167c786b3c6229",
  measurementId: "G-JNBSZER29C"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);