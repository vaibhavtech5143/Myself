import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAzaxJnHrRQfquH8fnLuLYer9KtSAU3rgE",
  authDomain: "vaibhav-portfolio-reactjs.firebaseapp.com",
  projectId: "vaibhav-portfolio-reactjs",
  storageBucket: "vaibhav-portfolio-reactjs.appspot.com",
  messagingSenderId: "283550688897",
  appId: "1:283550688897:web:c672023c1935614ff18f80",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
